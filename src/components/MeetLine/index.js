import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom'
import { ajaxAxios } from '../../../mock/index';
import '../../../mock/meeting';
import './index.less';

/**
 * 会议时间轴
 */
export const MeetLine = withRouter((props) => {
    const { routerName } = props;
    const [data, setData] = useState([]);

    useEffect(() => {
        ajaxAxios('/getMeetTime').then(res => {
            setData(res.data)
        })
    }, []);

    const idName = (item, type) => {
        const condition = type === 1 ? 'current-round' : 'current-name';

        if (item.id === 1 && routerName === 'index') {
            return condition;
        } else if (item.id === 2 && routerName === 'conferenceIntroduction') {
            return condition;
        } else if (item.id === 3 && routerName === 'meetSchedule') {
            return condition;
        } else if (item.id === 4 && routerName === 'conferenceGuests') {
            return condition;
        }
        return '';
    }

    const go = (item) => {
        if (item.id === 1) {
            props.history.push('/meet/index')
        }
        if (item.id === 2) {
            props.history.push('/meet/conferenceIntroduction')
        }
        if (item.id === 3) {
            props.history.push('/meet/meetSchedule')
        }
        if (item.id === 4) {
            props.history.push('/meet/conferenceGuests')
        }
    }

    return (
        <div className='meetLine' id={routerName !== 'index' && 'color'}>
            {data && data.map(item => {
                return (
                    <>
                        <div className='driver-v'>
                            <div className='driver' />
                        </div>
                        <div className='group'>
                            <div className='vertical-item'>
                                <div className='driver-short' />
                                <div className='round' id={idName(item, 1)} />
                                <div className='driver-short' />
                            </div>
                            <span className='name' id={idName(item, 2)} onClick={() => go(item)}>{item.name}</span>
                        </div>
                        { item.id === data.length && 
                        <div className='driver-v'>
                            <div className='driver' />
                        </div> }
                    </>
                )
            })}
        </div>
    )
})