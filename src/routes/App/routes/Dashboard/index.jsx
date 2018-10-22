import Loadable from '../../../../components/Loadable/index';

const Mobile = Loadable({
    loader: () => import(/* webpackChunkName: "dashboardMobile" */ './Mobile/index'),
});


const Desktop = Loadable({
    loader: () => import(/* webpackChunkName: "dashboardDesktop" */ './Desktop/index'),
});

export default [Mobile, Desktop];
