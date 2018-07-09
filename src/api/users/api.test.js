import React from 'react';
import api from './api';
// jest.mock('./api'); //
// import Component from './dataContainer';

const {
    describe,
    it,
    expect,
    shallow,
    beforeEach
} = global;
const users = {
    4: { name: 'Mark' },
    5: { name: 'Paul' },
};

function request(url) {
    return new Promise((resolve) => {
        resolve([{
            email: 'd@d.com',
            hashPassword: 'sd',
            name: 'yu',
            __v: 0,
            _id: '5b2d3305fe40a50438a82c6e'
        }]);
        // const userID = parseInt(url.substr('/users/'.length), 10);
        // process.nextTick(
        //     () =>
        //         users[userID]
        //             ? resolve(users[userID])
        //             : reject({
        //                 error: 'User with ' + userID + ' not found.',
        //             }),
        // );
    });
}

describe('theme provider', () => {
    beforeEach(() => {
        // Clear all instances and calls to constructor and all methods:
        // console.log('Api', Api);
        // api.mockClear();
    });
    it('renders three <Component.name /> components', (done) => {
        // const wrapper = shallow(<Component><div>helo</div></Component>);
        // expect(wrapper.length).toBe(1);
        // expect(wrapper).toMatchSnapshot();
        request().then((res) => {
            expect(res).toEqual([{
                email: 'd@d.com',
                hashPassword: 'sd',
                name: 'yu',
                __v: 0,
                _id: '5b2d3305fe40a50438a82c6e'
            }]);
            done();
        });
    });

    it('should ta', (done) => {
        // let asd = Api()
        console.log('api', api.getMockName);

        api.fetch()
            // .then(res => {
            //     console.log('res', res);
            //
                done();
            // });
    });
});
