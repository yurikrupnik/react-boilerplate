import Loadable from '../../../components/Loadable';

const Mobile = Loadable({
    loader: () => import(/* webpackChunkName: "dashboardMobile" */ './Mobile'),
});


const Desktop = Loadable({
    loader: () => import(/* webpackChunkName: "dashboardDesktop" */ './Desktop'),
});

export default [Mobile, Desktop];
