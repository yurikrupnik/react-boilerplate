// import Mobile from './Mobile';
// import Desktop from './Desktop';
import Loadable from '../../../components/Loadable/index';

const Mobile = Loadable({
    loader: () => import(/* webpackChunkName: "newsLetterMobile" */ './Mobile/index'),
});


const Desktop = Loadable({
    loader: () => import(/* webpackChunkName: "newsLetterDesktop" */ './Desktop/index'),
});

export default [Mobile, Desktop];
