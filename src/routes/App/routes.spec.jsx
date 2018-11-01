import routes from './routes';

const {
    it,
    expect,
    shallow,
    render,
    mount
} = global;

it('renders <App /> component', () => {
    expect(routes.getLinks()).toBeTruthy();
    expect(routes.getRoutesByType(true)).toBeTruthy();
    expect(routes.getRoutesByType(false)).toBeTruthy();
});
