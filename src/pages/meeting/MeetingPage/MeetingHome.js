import React from 'react';

import './meetingHome.less';
import healthWhite from '../../../static/images/meeting/health-white.png';
import { Button } from 'antd';

const MeetingHome = (props) => {
    const { children } = props;

    return (
        <div className='home'>
            <div className='meetHeader'>
                <img src={healthWhite} />
                <div>
                    <Button className='btn'>登录</Button>
                    <Button className='btn'>注册</Button>
                </div>
            </div>
            { children }
        </div>
    )
}

export default MeetingHome;