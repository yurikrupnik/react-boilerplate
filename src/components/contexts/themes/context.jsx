import { createContext } from 'react';

const themes = {
    light: {
        foreground: '#000000',
        background: '#eeeeee',
        color: 'red'
    },
    dark: {
        foreground: '#ffffff',
        background: '#222222',
        color: 'green'
    },
};

const Context = createContext({
    theme: themes.light,
    toggleTheme: () => {}
});

// console.log('Context', Context);
// console.log('Context.Provider', Context.Provider);
// console.log('Context.Consumer', Context.Consumer);


const { Provider, Consumer } = Context;

export { Context, Provider, Consumer, themes };
