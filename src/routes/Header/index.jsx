import Loadable from '../../components/Loadable';

const Mobile = Loadable({
    loader: () => import(/* webpackChunkName: "headerMobile" */ './Mobile'),
});


const Desktop = Loadable({
    loader: () => import(/* webpackChunkName: "headerDesktop" */ './Desktop'),
});

export default [Mobile, Desktop];
