/**
 * 会议日程
 */
import React, { useEffect, useState } from 'react';
import { Divider } from 'antd';
import indexImg from '../../../static/images/meeting/timeLine1.jpg';
import '../meeting.less';
import { MeetLine } from '../../../components/MeetLine/index';
import { ajaxAxios } from '../../../../mock/index';
import '../../../../mock/meeting.js';

const MeetSchedule = (props) => {
    const { pathname } = props.location;
    const routerName = pathname.split('/')[2];
    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);

    useEffect(() => {
        ajaxAxios('/getMeetDetails').then(res => {
            setData(res.data.splice(0,5))
            setData2(res.data)
        })
    }, [])

    return (
        <div className="index" id='meetSchedule'>
            <MeetLine routerName={routerName} />
            <div className='content'>
                 <div className='chinese-name' style={{ margin: '2rem 0 0 5rem' }}>会议日程</div>
                 <div className='english-name' style={{ marginLeft: '5rem' }}>AGENDA</div>
                 <div className='schedule'>
                    <ul>
                        <li>10月22日</li>
                        <li>10月23日</li>
                        <li>10月24日</li>
                        <li>10月25日</li>
                        <li>10月26日</li>
                        <li>10月27日</li>
                    </ul>
                     <Divider className='divider' />
                     <div className='meeting-name'>
                         <span>开班仪式-主论坛</span>
                         <span>模块一：行政管理（新效能）</span>
                         <span>模块一：效率管理（新动力）</span>
                     </div>
                     <Divider className='divider' />
                     <div className='meeting-details'>
                         <div className='meeting-details-left'>
                             {data && data.map(item => {
                                 return (
                                     <div className='item'>
                                        <div className='time'>{item.time}</div>
                                        <div className='details-content'><div className='yuan'></div>{item.content}</div>
                                     </div>
                                 )
                             })}
                         </div>
                         <div className='meeting-details-left'>
                            {data2 && data2.map(item => {
                                 return (
                                     <div className='item'>
                                        <div className='time'>{item.time}</div>
                                        <div className='details-content'><div className='yuan'></div>{item.content}</div>
                                     </div>
                                 )
                             })}
                         </div>
                     </div>
                 </div>
            </div>
        </div>
    )
}

export default MeetSchedule;