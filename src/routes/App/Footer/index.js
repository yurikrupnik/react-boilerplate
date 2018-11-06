// import Mobile from './Mobile';
// import Desktop from './Desktop';
import Loadable from '../../../components/Loadable';

const Mobile = Loadable({
    loader: () => import(/* webpackChunkName: "footerMobile" */ './Mobile'),
});


const Desktop = Loadable({
    loader: () => import(/* webpackChunkName: "footerDesk" */ './Desktop'),
});

export default [Mobile, Desktop];
