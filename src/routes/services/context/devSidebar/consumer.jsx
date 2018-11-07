import React, { useCallback, useState, useContext } from 'react';
import reduce from 'lodash/reduce';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ReactJson from 'react-json-view';
// import { Consumer } from './context';
import { Consumer as DeviceConsumer } from '../device';
import { Consumer as ThemeConsumer } from '../themes';
import { Consumer as UsersConsumer } from '../../../../api/users/context';
import { Consumer as CurrencyConsumer } from '../../../../api/currency/context';
import { Consumer as ProjectsConsumer } from '../../../../api/projects/context';
import Context from './context';

import Drawer from '../../../../components/Drawer';

const DefaultDevMenu = React.memo((props) => {
    const {
        open, toggle, handleClick, renderData
    } = props;
    return (
        <Drawer
            anchor="right"
            open={open}
            toggle={toggle}
        >
            <div>
                <div>
                    <Button onClick={handleClick}>
                        show
                    </Button>
                </div>
                <div>
                    {renderData()}
                </div>
            </div>
        </Drawer>
    );
});

const SidebarConsumer = React.memo(() => {
    const [consumers] = useState([
        CurrencyConsumer,
        DeviceConsumer,
        ThemeConsumer,
        ProjectsConsumer,
        UsersConsumer
    ]);
    const [showHelpers, setState] = useState(false);
    const renderData = useCallback(
        () => consumers.map(C => (
            <C
                key={C.name}
                render={(a) => {
                    const keys = reduce(a, (keyAcc, nextVal, nextKey) => {
                        if (typeof nextVal === 'function') {
                            const c = (
                                <div className="row">
                                    <div className="col-xs-6">
                                        <Button onClick={() => nextVal()}>{nextKey}</Button>
                                    </div>
                                    <div className="col-xs-6">
                                        {
                                            nextKey === 'isMobile' && (<div>{JSON.stringify(nextVal())}</div>)
                                        }
                                    </div>
                                </div>
                            );
                            return keyAcc.concat((
                                <div className="row" key={nextKey}>
                                    <div className="col-xs-3">
                                        {nextKey}
                                    </div>
                                    <div className="col-xs-8">
                                        {c}
                                    </div>
                                </div>
                            ));
                        }
                        return keyAcc;
                    }, []);
                    return (
                        <div>
                            <h2>{a.name}</h2>
                            <ReactJson src={a} />
                            {showHelpers && keys}
                        </div>
                    );
                }}
            />
        )),
        [consumers, showHelpers]
    );

    const handleClick = useCallback(
        () => setState(!showHelpers),
        [showHelpers],
    );

    const devSidebar = useContext(Context);
    const { open, toggle } = devSidebar;
    return (
        <Drawer
            anchor="right"
            open={open}
            toggle={toggle}
            style={{ width: '400px' }}
        >
            <div>
                <div>
                    <Button onClick={handleClick}>
                        show
                    </Button>
                </div>
                <div>
                    {renderData()}
                </div>
            </div>
        </Drawer>
    );
});

DefaultDevMenu.propTypes = {
    open: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired
};

export default SidebarConsumer;
