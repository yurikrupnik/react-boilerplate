import users from './users/provider';
import projects from './projects/provider';
import { Provider as currency } from './currency/context';

export default [
    users,
    projects,
    currency
];
