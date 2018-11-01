import React from 'react';
import styles from '../styles.css';
import { Consumer as ThemesConsumer } from '../../../services/context/themes';
import { Consumer as UsersConsumer } from '../../../../api/users/context';
import { Consumer as ProjectsConsumer } from '../../../../api/projects/context';
import List from '../../../../components/List';

class DashboardDesktop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({ open: !prevState.open }));
    }

    render() {
        return (
            <UsersConsumer render={userProps => (
                <ProjectsConsumer render={projectsProps => (
                    <div>
                        <h2 className={styles.base}>
                            Dashboardsds desktop
                        </h2>
                        <List {...userProps} />
                        <List {...projectsProps} />
                        <ThemesConsumer />
                        <ThemesConsumer render={() => (
                            <div>
                                nuuuu
                            </div>
                        )}
                        />
                    </div>
                )}
                />
            )}
            />
        );
    }
}


export default DashboardDesktop;
