import moxios from 'moxios';
import api from '../api';

describe('mocking axios requests', function () {
    it('just for a single spec', function (done) {
        moxios.withMock(function () {
            const cb = jest.fn();
            api.fetch({}, cb);
            moxios.wait(function () {
                let request = moxios.requests.mostRecent();
                request.respondWith({
                    status: 200,
                    data: {
                        id: 12345, firstName: 'Fred', lastName: 'Flintstone'
                    }
                });
                done();
            });
        });
    });
});
