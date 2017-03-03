import { IonicAngularCliPage } from './app.po';

describe('ionic-angular-cli App', () => {
  let page: IonicAngularCliPage;

  beforeEach(() => {
    page = new IonicAngularCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
