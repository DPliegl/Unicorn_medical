import { browser, by, element } from 'protractor';

export class UnicornMedicalPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ae-root h1')).getText();
  }
}
