// @flow

import moxios from 'moxios';
import { setSearchTermAction, addApiDataAction, getApiData } from '../redux/action-creators';

const orangeIsTheNewBlackShow = {
  rating: '0.8',
  title: 'Orange Is the New Black',
  year: '2013–',
  description: 'The story of Piper Chapman, a woman in her thirties who is sentenced to fifteen months in prison after being convicted of a decade-old crime of transporting money for her drug-dealing girlfriend.',
  poster: 'oitnb.jpg',
  imdbID: 'tt2372162',
  trailer: 'th8WT_pxGqg'
};

test('setSearchTermAction', () => {
  expect(setSearchTermAction('New York')).toMatchSnapshot();
});

test('addApiDataAction', () => {
  expect(addApiDataAction(orangeIsTheNewBlackShow)).toMatchSnapshot();
});

test('getApiData', (done: Function) => {
  const dispatchMock = jest.fn();
  moxios.withMock(() => {
    getApiData(orangeIsTheNewBlackShow.imdbID)(dispatchMock);

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request
        .respondWith({
          status: 200,
          response: orangeIsTheNewBlackShow
        })
        .then(() => {
          expect(request.url).toEqual(`http://localhost:3000/${orangeIsTheNewBlackShow.imdbID}`);
          expect(dispatchMock).toBeCalledWith(addApiDataAction(orangeIsTheNewBlackShow));
          done();
        });
    });
  });
});
