import React from 'react';
import styles from '../styles.css';
import { Consumer as ThemesConsumer } from '../../../services/context/themes';
import { Consumer as UsersConsumer } from '../../../../api/users/context';
import { Consumer as ProjectsConsumer } from '../../../../api/projects/context';
import List from '../../../../components/List';

function DashboardMobile() {
    return (
        <UsersConsumer render={userProps => (
            <ProjectsConsumer render={projectsProps => (
                <div>
                    <h2 className={styles.base}>
                        Dashboardsds mobile
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

export default React.memo(DashboardMobile);
