import { Injectable } from '@angular/core';

@Injectable()
export class NavigationService {

  constructor() { }

  nav(location: string): string  {

    if(location === 'search') {
      location = 'SearchPage';
    } else if (location === 'scan') {
      location = 'ScanPage';
    } else if (location === 'home') {
      location = 'HomePage';
    } else if (location === 'about') {
      location = 'AboutPage';
    } else if (location === 'faq') {
      location = 'FaqPage';
    } else if (location === 'convert') {
      location = 'ConvertPage';
    }
    return location;
  }
}
