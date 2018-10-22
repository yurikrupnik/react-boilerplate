import Loadable from '../../../../components/Loadable/index';
// import Mobile from './Mobile/index';
// import Desktop from './Desktop';

const Mobile = Loadable({
    loader: () => import(/* webpackChunkName: "headerMobile" */ './Mobile/index'),
});


const Desktop = Loadable({
    loader: () => import(/* webpackChunkName: "headerDesktop" */ './Desktop/index'),
});

export default [Mobile, Desktop];
