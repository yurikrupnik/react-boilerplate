import Loadable from '../../../components/Loadable';

const Mobile = Loadable({
    loader: () => import(/* webpackChunkName: "newsLetterMobile" */ './Mobile'),
});


const Desktop = Loadable({
    loader: () => import(/* webpackChunkName: "newsLetterDesktop" */ './Desktop'),
});

export default [Mobile, Desktop];
