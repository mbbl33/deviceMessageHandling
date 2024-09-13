export class DeviceSoftwareVerison {
  major: number;
  minor: number;
  patch: number;
  constructor(major: number, minor: number, patch: number) {
    this.major = major;
    this.minor = minor;
    this.patch = patch;
  }
  toString() {
    return `V${this.major}.${this.minor}.${this.patch}`;
  }
}
