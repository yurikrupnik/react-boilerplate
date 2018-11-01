import Loadable from '../../../../components/Loadable';

const Mobile = Loadable({
    loader: () => import(/* webpackChunkName: "educationMainMobile" */ './Mobile'),
});


const Desktop = Loadable({
    loader: () => import(/* webpackChunkName: "educationMainDesktop" */ './Desktop'),
});

export default [Mobile, Desktop];
