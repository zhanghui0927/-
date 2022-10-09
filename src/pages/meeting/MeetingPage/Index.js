/**
 * 会议
 */
import React, { useEffect, useState } from 'react';
import indexImg from '../../../static/images/meeting/timeLine1.jpg';
import '../meeting.less';
import { MeetLine } from '../../../components/MeetLine/index';

const Index = (props) => {
    const { pathname } = props.location;
    const routerName = pathname.split('/')[2];

    return (
        <div className="index">
            <img src={indexImg} />
            <MeetLine routerName={routerName} />
        </div>
    )
}

export default Index;