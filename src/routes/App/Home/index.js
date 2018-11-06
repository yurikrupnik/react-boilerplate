// import Mobile from './Mobile';
// import Desktop from './Desktop';
import Loadable from '../../../components/Loadable/index';

const Mobile = Loadable({
    loader: () => import(/* webpackChunkName: "homeMobile" */ './Mobile'),
});


const Desktop = Loadable({
    loader: () => import(/* webpackChunkName: "homeDesktop" */ './Desktop'),
});

export default [Mobile, Desktop];
