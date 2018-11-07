import Loadable from '../../components/Loadable';
// import App from './app';
const App = Loadable({
    loader: () => import('./app'),
});

export default App;
