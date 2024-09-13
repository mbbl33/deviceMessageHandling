export class DeviceProtocolVersion {
  major: number;
  minor: number;
  constructor(major: number, minor: number) {
    this.major = major;
    this.minor = minor;
  }
  toString() {
    return `${this.major}.${this.minor}`;
  }
}
