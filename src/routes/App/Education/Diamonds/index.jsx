import Loadable from '../../../../components/Loadable';

const Mobile = Loadable({
    loader: () => import('./Mobile'),
});


const Desktop = Loadable({
    loader: () => import('./Desktop'),
});

export default [Mobile, Desktop];
