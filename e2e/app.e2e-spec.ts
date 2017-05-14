import { HayleemonteiroPage } from './app.po';

describe('hayleemonteiro App', () => {
  let page: HayleemonteiroPage;

  beforeEach(() => {
    page = new HayleemonteiroPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
