import Loadable from '../../../components/Loadable';

const Mobile = Loadable({
    loader: () => import(/* webpackChunkName: "noMatchMobile" */ './Mobile'),
});


const Desktop = Loadable({
    loader: () => import(/* webpackChunkName: "noMatchDesktop" */ './Desktop'),
});

export default [Mobile, Desktop];
