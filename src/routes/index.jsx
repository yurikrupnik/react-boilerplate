import Routes from './classes';
import News from './Newsletter';
import Dashboard from './Dashboard';
import Header from './Header';
import Guarantee from './Guarantee';
import Education from './Education';
// console.log('Header', Header);


const routes = new Routes([
    {
        component: Header
    },
    {
        component: Dashboard,
        exact: true
    },
    {
        component: Guarantee,
        path: '/guarantee',
        label: 'guarantee'
    },
    {
        component: Education,
        path: '/education',
        label: 'education'
    },
    {
        component: News
    }
]);

// function getLinks() {
//     console.log('getLinks');
//
//     return routes.reduce((acc, next) => {
//         if (!next.label) {
//             return acc;
//         }
//         return acc.concat({
//             label: next.label,
//             to: next.path,
//             key: next.key
//         });
//     }, []);
// }
//
// function getRoutes() {
//     return routes;
// }

export default routes;

// export { getLinks, getRoutes };
