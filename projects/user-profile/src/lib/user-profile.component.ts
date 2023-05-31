import { Component, Input, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Pipe({
  name: 'sanitizeUrl',
  standalone: true,
})
export class SanitizeUrlPipe implements PipeTransform {
  constructor(private readonly _sanitize: DomSanitizer) {}
  transform(value: string): SafeUrl {
    return this._sanitize.bypassSecurityTrustUrl(value);
  }
}

@Component({
  selector: 'lib-user-profile',
  templateUrl: './user-profile.component.html',
  styles: [],
})
export class UserProfileComponent {
  /* Private variable for image source url */
  private _url!: string;

  /* props for image source url */
  @Input() set url(value: string) {
    if (!value) {
      this._url =
        'https://emedia1.nhs.wales/HEIW2/cache/file/F4C33EF0-69EE-4445-94018B01ADCF6FD4.png';
    } else {
      this._url = value;
    }
  }

  /**
   * Getter function for image source url
   *
   * @returns string
   * */
  get url(): string {
    return this._url;
  }

  /* props for image description */
  @Input() imageAlt = '';

  /* props for image style height and width */
  @Input() styleConfig = {
    width: '70px',
    height: '70px',
  };
}
