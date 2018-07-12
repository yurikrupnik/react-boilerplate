import moxios from 'moxios';
import api from '../api';

const { test } = global;

test('should fetch users', (done) => {
    moxios.withMock(() => {
        api.fetch({});
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
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
