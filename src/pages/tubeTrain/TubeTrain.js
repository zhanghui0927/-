/**
 * 管培
 */
import React, { useEffect, useState } from 'react';
import { Carousel, Icon } from 'antd';
import SvgIcon from '../../components/SvgIcon/index';

import swiper1 from '../../static/images/tubeTrain/tubeTrain-swiper1.jpg';
import swiper2 from '../../static/images/tubeTrain/tubeTrain-swiper2.jpg';
import swiper3 from '../../static/images/tubeTrain/tubeTrain-swiper3.jpg';
import managementCourse from '../../static/images/tubeTrain/course-management.jpg';
import clinicalCourse from '../../static/images/tubeTrain/course-clinical.jpg';
import nursingCourse from '../../static/images/tubeTrain/course-nursing.jpg';
import generalCourse from '../../static/images/tubeTrain/course-general.jpg';

import { Morebtn } from '../../components/TubeTrain/index';
import { ajaxAxios } from '../../../mock/index';
import '../../../mock/tubeTrain';
import './tubeTrain.less';


const TubeTrain = (props) => {
    const [liveStream, setLiveStream] = useState([]); // 直播数据
    const [seriesClass, setSeriesClass] = useState([]); // 系列课数据

    useEffect(() => {
        // 获取直播课程数据
        ajaxAxios('/getLiveStream').then(res => {
            setLiveStream(res.data)
        })
        // 获取系列课数据
        ajaxAxios('/getSeriesClass').then(res => {
            setSeriesClass(res.data)
        })
    })

    const clickToJump = () => {
        props.history.push('/home/tubeTrain/managementCourse')
    }
    const clickToLiveSteam = () => {
        props.history.push('/home/tubeTrain/liveStream')
    }

    return (
        <div className='tube-train'>
            {/* <img className='index' src={index} /> */}
            <Carousel autoplay>
                <div>
                    <img className='swiper' src={swiper1} />
                </div>
                <div>
                    <img className='swiper' src={swiper2} />
                </div>
                <div>
                    <img className='swiper' src={swiper3} />
                </div>
            </Carousel>
            <div className='tube-train-content'>
                <div className='img-course'>
                    <img onClick={clickToJump} className='course' src={managementCourse} />
                    <img className='course' src={clinicalCourse} />
                    <img className='course' src={nursingCourse} />
                    <img className='course' src={generalCourse} style={{ position: 'relative', bottom: '3px' }} />
                </div>
                <div className='live-streaming'>
                    <SvgIcon size="27px" iconClass="live-streaming" />
                    <span>直播</span>
                </div>
                <div className='live-streaming-course'>
                    {liveStream && liveStream.map(item => {
                        return (
                            <div className='course-item' key={item.id} onClick={clickToLiveSteam}>
                                <img className='course-img' src={item.img} />
                                <div className='text'>
                                    <div className='text-1'>{item.liveName}</div>
                                    <div className='text-footer'>
                                        <div className='text-icon'>
                                            <SvgIcon iconClass="live-streaming-ash" />&nbsp;{item.date}
                                        </div> 
                                        <div>{item.timePart}</div>
                                    </div>
                                    <div>{item.watchFrequency}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <Morebtn btnName={<div>查看更多直播&nbsp;<Icon type="right" /></div>} />
                <div className='series-class'>
                    系列课
                </div>
                <div className='live-streaming-course'>
                    {seriesClass && seriesClass.map(item => {
                        return (
                            <div className='course-item' key={item.id}>
                                <img className='course-img' src={item.img} />
                                <div className='text'>
                                    <div className='text-1'>{item.liveName}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <Morebtn btnName='更多系列课' />
            </div>
        </div>
    )
}

export default TubeTrain;