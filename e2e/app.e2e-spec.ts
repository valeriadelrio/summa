import { SummaSolutionPage } from './app.po';

describe('summa-solution App', () => {
  let page: SummaSolutionPage;

  beforeEach(() => {
    page = new SummaSolutionPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
