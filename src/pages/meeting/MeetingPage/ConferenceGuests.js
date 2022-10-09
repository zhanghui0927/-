/**
 * 会议嘉宾
 */
import React, { useEffect, useState } from 'react';
import { Button, Icon } from 'antd';
import indexImg from '../../../static/images/meeting/timeLine1.jpg';
import '../meeting.less';
import { MeetLine } from '../../../components/MeetLine/index';
import guest1 from '../../../static/images/meeting/guest1.png';
import guest2 from '../../../static/images/meeting/guest2.png';
import guest3 from '../../../static/images/meeting/guest3.jpg';
import guest4 from '../../../static/images/meeting/guest4.png';

const ConferenceGuests = (props) => {
    const { pathname } = props.location;
    const routerName = pathname.split('/')[2];

    return (
        <div className="index" id="conferenceGuests">
            <MeetLine routerName={routerName} />
            <div className='content'>
                <div className='chinese-name' style={{ margin: '2rem 0 0 5rem' }}>会议嘉宾</div>
                <div className='english-name' style={{ marginLeft: '5rem' }}>HONOURED GUEST</div>
                <div className='guest-detail'>
                    <Icon type="left" style={{ fontSize: '2.5rem', cursor: 'pointer' }} />
                    <div className='guest-item'>
                        <img src={guest1} />
                        <div className='name-text'>
                            <div>陈航</div>
                            <div>首都医科大学附属北京地坛医院 党委书记</div>
                        </div>
                    </div>
                    <div className='guest-item'>
                        <img src={guest2} />
                        <div className='name-text'>
                            <div>陈海啸</div>
                            <div>浙江台州恩泽医疗中心(集团)主任</div>
                        </div>
                    </div>
                    <div className='guest-item'>
                        <img src={guest3} />
                        <div className='name-text'>
                            <div>曹健</div>
                            <div>中国人民大学医院管理研究中心 研究员</div>
                        </div>
                    </div>
                    <div className='guest-item'>
                        <img src={guest4} />
                        <div className='name-text'>
                            <div>柴建军</div>
                            <div>北京协和医院 党委副书记、纪委书记</div>
                        </div>
                    </div>
                    <Icon type="right" style={{ fontSize: '2.5rem', cursor: 'pointer' }} />
                </div>
                <div className='btn-div'>
                    <div className='btn'>更多嘉宾</div>
                </div>
            </div>
        </div>
    )
}

export default ConferenceGuests;