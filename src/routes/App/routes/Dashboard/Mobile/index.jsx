import React from 'react';
import styles from '../styles.css';
import ThemesConsumer from '../../../../../components/contexts/themes/consumer';
import UsersConsumer from '../../../../../api/users/consumer';
import ProjectsConsumer from '../../../../../api/projects/consumer';
import List from '../../../../../components/List';

function Dashboard() {
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

export default Dashboard;
