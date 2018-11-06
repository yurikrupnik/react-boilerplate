import React, { memo } from 'react';
import Loadable from '../../../components/Loadable';
import { Consumer as DeviceConsumer } from '../../services/context/device/index';

const Mobile = Loadable({
    loader: () => import('./Mobile')
});

const Desktop = Loadable({
    loader: () => import('./Desktop')
});

const Guarantee = () => (
    <DeviceConsumer render={(renderProps) => {
        const isMobile = renderProps.isMobile();
        return isMobile ? <Mobile /> : <Desktop />;
    }}
    />
);

export default memo(Guarantee);
