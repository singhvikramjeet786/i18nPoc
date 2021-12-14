import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  
  siteLanguage: string | undefined = 'English';
  siteLocale: string = 'en';
  languageList = [
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'Français' },
    { code: 'de', label: 'German' }
  ];
  
  constructor() { }

  ngOnInit(): void {
    console.log("window.location :", window.location.pathname, window.location);
    this.siteLocale = window.location.pathname.split('/')[1]? window.location.pathname.split('/')[1] : 'en';
    this.siteLanguage = this.languageList.find(lang=>lang.code===this.siteLocale)?.label;
  }

}
