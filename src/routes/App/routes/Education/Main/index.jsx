import Loadable from '../../../../../components/Loadable/index';

const Mobile = Loadable({
    loader: () => import(/* webpackChunkName: "educationMainMobile" */ './Mobile/index'),
});


const Desktop = Loadable({
    loader: () => import(/* webpackChunkName: "educationMainDesktop" */ './Desktop/index'),
});

export default [Mobile, Desktop];
