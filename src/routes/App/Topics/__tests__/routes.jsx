import routes from '../routes';

const {
    it,
    expect
} = global;

it('topics routes', () => {
    expect(routes.getLinks()).toBeTruthy();
    expect(routes.getRoutesByType(true)).toBeTruthy();
    expect(routes.getRoutesByType(false)).toBeTruthy();
});
