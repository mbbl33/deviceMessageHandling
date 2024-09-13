import {
  FixedSizedSubMessage,
  MessageSizeValidator,
  SubMessageDataTypes,
} from './SubMessageDataTypes';

export class Date_Message
  extends SubMessageDataTypes<Date>
  implements SubMessageDataTypes<Date>, FixedSizedSubMessage
{
  static readonly startYear = 2000;
  static readonly yearBitmask = 0b0111_1111;
  static readonly monthBitmask = 0b0000_1111;
  static readonly dayBitmask = 0b0001_1111;
  static readonly numberOfYearBits = 7;
  static readonly numberOfDayBits = 5;
  static readonly numberOfMonthBits = 4;
  readonly expectedByteSize: number = 2;
  readonly messageSizeValidator: MessageSizeValidator = new MessageSizeValidator();
  override parseFromBinary(binaryData: number[]): Date {
    this.messageSizeValidator.validate(
      this.expectedByteSize,
      binaryData.length
    );
    const uInt8Array = new Uint8Array(binaryData);
    const dataView = new DataView(uInt8Array.buffer);

    const bitField = dataView.getUint16(0);
    //Extract year (7 bit)
    const year =
      Date_Message.startYear +
      ((bitField >>
        (Date_Message.numberOfDayBits + Date_Message.numberOfMonthBits)) &
        Date_Message.yearBitmask);

    // Extract month (4 Bit)
    const month =
      (bitField >> Date_Message.numberOfDayBits) & Date_Message.monthBitmask;

    // Extract day (5 Bit)
    const day = bitField & Date_Message.dayBitmask;

    return new Date(year, month - 1, day); //month - 1, because months are 0-based in JS
  }
  override convertToBinary(date: Date): number[] {
    const year = date.getFullYear() - Date_Message.startYear;
    const month = date.getMonth() + 1; //month + 1, because months are 0-based in JS
    const day = date.getDate();

    // only values between 2000 and 2127 are allowed
    if (year < 0 || year > Date_Message.yearBitmask) {
      throw new Error('Year out of range');
    }

    // carft bit mask
    let bitField =
      (year <<
        (Date_Message.numberOfDayBits + Date_Message.numberOfMonthBits)) |
      (month << Date_Message.numberOfDayBits) |
      day;

    const byteArray = new Uint8Array(2);
    const dataView = new DataView(byteArray.buffer);
    dataView.setUint16(0, bitField);

    return Array.from(byteArray);
  }
}
