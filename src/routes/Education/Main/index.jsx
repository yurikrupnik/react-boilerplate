import Loadable from '../../../components/Loadable';
// import Mobile from './Mobile';
// import Desktop from './Desktop';

// const Mobile = Loadable({
//     loader: () => import(/* webpackChunkName: "educationMainMobile" */ './Mobile'),
// });


const Desktop = Loadable({
    loader: () => import(/* webpackChunkName: "educationMainDesktop" */ './Desktop'),
});

export default [Desktop];
