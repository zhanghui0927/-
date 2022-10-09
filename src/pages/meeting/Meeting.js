/**
 * 会议
 */
import React, { useEffect, useState } from 'react';
import meeting from '../../static/images/meeting/meeting.jpg';
import { ajaxAxios } from '../../../mock/index';
import '../../../mock/meeting.js';
import './meeting.less';

const Meeting = (props) => {
    const [meetingData, setMeetingData] = useState([]);

    useEffect(() => {
        ajaxAxios('/getMeeting').then(res => {
            console.log(res)
            setMeetingData(res.data)
        })
    }, [])

    let divStyle = {
        backgroundImage: 'url(' + meeting + ')'
    }

    const goMeet = () => {
        props.history.push('/meet/index')
    }

    return (
        <div className='meeting'>
            <div className='top-img' style={divStyle}>
                <div>
                    品牌会议
                    <br />
                    CONFERENCE
                </div>
            </div>
            <div className='content'>
                { meetingData && meetingData.map(item => {
                    return (
                        <div className='line' key={item.id}>
                            <div className='line-left'>
                                <img src={item.img} />
                            </div>
                            <div className='line-right'>
                                <div className='text'>
                                    <div className='right1' onClick={item.id === 1 && goMeet}>{item.contentName}</div>
                                    <div className='nameTime'>
                                        <div className='left-name'>
                                            {item.name}{item.time}
                                        </div>
                                    </div>
                                    <div className='right2'>{item.content}</div>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Meeting;