import { GpAngelPage } from './app.po';

describe('gp-angel App', () => {
  let page: GpAngelPage;

  beforeEach(() => {
    page = new GpAngelPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
