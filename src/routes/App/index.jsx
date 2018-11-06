import Loadable from '../../components/Loadable';

const App = Loadable({
    loader: () => import('./app'),
});

export default App;
