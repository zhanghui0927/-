/**
 * 管理课程
 */
import React, { useCallback, useEffect, useState } from 'react';
import { ajaxAxios } from '../../../mock/index';
import '../../../mock/tubeTrain';

import managementCourseImg from '../../static/images/tubeTrain/managementCourse.jpg';
import './tubeTrain.less';

const ManagementCourse = () => {
    const [epidemicDown, setEpidemicDown] = useState([]); // 疫情之下
    const [modernHospital, setModernHospital] = useState([]); // 现代医院

    useEffect(() => {
        // 获取疫情之下数据
        ajaxAxios('/getEpidemicList').then(res => {
            setEpidemicDown(res.data)
        })
        // 获取现代医院数据
        ajaxAxios('/getModernHospital').then(res => {
            setModernHospital(res.data)
        })
    }, [])

    return (
        <div className='managementCourse'>
            <div className='managementCourse-img'>
                <img src={managementCourseImg} />
            </div>
            <div className='epidemic'>
                疫情之下，院感防控需强化！
            </div>
            <div className='live-streaming-course'>
                {epidemicDown && epidemicDown.map(item => {
                    return (
                        <div className='course-item' key={item.id}>
                            <img className='course-img' src={item.img} />
                            <div className='text'>
                                <div className='text-1'>{item.epidemicName}</div>
                                <div className='text-footer'>
                                    {item.learn}
                                </div>
                                <div className='free'>{item.free}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='epidemic'>
                现代医院运营管理之道
            </div>
            <div className='live-streaming-course'>
                {modernHospital && modernHospital.map(item => {
                    return (
                        <div className='course-item' key={item.id}>
                            <img className='course-img' src={item.img} />
                            <div className='text'>
                                <div className='text-1'>{item.name}</div>
                                <div className='text-footer'>
                                    {item.learn}
                                </div>
                                <div className='free'>{item.free}</div>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default ManagementCourse;