import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class VersionService {
  semVerRegex = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)$/;
  lastStoredVersion = '0.0.0'
  
  compareVersion (newVersion, oldVersion) {
    const newV = newVersion.split('.').map((f: string) => Number(f));
    const oldV = oldVersion.split('.').map((f: string) => Number(f));
    const maxLength = Math.max(newV.length, oldV.length);
    for (let i = 0, len = maxLength; i < len; ++i ) {
        const num1 = newV[i] || 0;
        const num2 = oldV[i] || 0;
        if (num1 < num2) {
            return -1;
        } else if (num1 > num2) {
            return 1;
        }
    }
  
    return 0;
  }

  validateVersion(version: string) {
    const isValidVersion = /^(\d+)\.(\d+)\.(\d+)$/.test(version);
    if (!isValidVersion) {
      return {
        error: 'pattern'
      };
    }

    const isGreater = this.compareVersion(version, this.lastStoredVersion) > 0;
    return {
      error: !isGreater ? 'oldVersion' : null
    };
  }

  updateVersion(version: string) {
    const {error} = this.validateVersion(version);
    if (error === null) {
      this.lastStoredVersion = version;
    } else {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  resetVersion() {
    this.lastStoredVersion = '0.0.0';
  }
}
