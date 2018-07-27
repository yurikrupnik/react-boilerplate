import React from 'react';
import renderer from 'react-test-renderer';
import App from '../app';
// import routes from '../../routes';
jest.mock('../../routes'); // eslint-disable-line no-undef

const {
    it,
    expect,
    shallow
} = global;

it('renders <App /> component', () => {
    const tree = renderer
        .create(<App routes={[]} />)
        .toJSON();

    expect(tree).toMatchSnapshot();
});
