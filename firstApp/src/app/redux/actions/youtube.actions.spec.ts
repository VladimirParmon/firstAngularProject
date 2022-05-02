import * as fromYoutube from './youtube.actions';

describe('testYoutubes', () => {
  it('should return an action', () => {
    expect(fromYoutube.testYoutubes().type).toBe('[Youtube] Test Youtubes');
  });
});
