import { EnterpriseAngularPage } from './app.po';

describe('enterprise-angular App', () => {
  let page: EnterpriseAngularPage;

  beforeEach(() => {
    page = new EnterpriseAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
