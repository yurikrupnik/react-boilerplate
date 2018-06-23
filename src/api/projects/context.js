import { createContext } from 'react';

const { Provider, Consumer } = createContext({
    data: [],
    loading: false,
    selected: null
});

export { Provider, Consumer };
