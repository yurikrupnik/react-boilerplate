import uniqid from 'uniqid';
import { Component } from 'react';
import Router from './index';

const {
    describe,
    it,
    expect
} = global;

const mock = [
    {
        path: '/',
        component: Component,
        key: uniqid()
    },
    {
        path: '/',
        component: [Component, Component],
        exact: true,
        label: 'lo',
        key: uniqid()
    }
];

describe(`Router`, () => {
    it('return an object', () => {
        const routes = Router.create(mock);
        expect(typeof routes.getRoutesByType).toBe('function');
        routes.getRoutesByType(true);
        routes.getRoutesByType(false);
        routes.getLinks();
    });
});
