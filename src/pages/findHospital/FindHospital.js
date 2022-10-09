/**
 * 找医院
 */
import React, { useState, useEffect } from 'react';
import { Divider, Tabs, Rate, Pagination } from 'antd';
import { ajaxAxios } from '../../../mock/index';
import '../../../mock/findHospital';

import findHospitalIndex from '../../static/images/findHospital/findHospital-index.jpg';
import framePhone from '../../static/images/findHospital/frame-phone.jpg';
import frameGraphics from '../../static/images/findHospital/frame-graphics.jpg';
import frameReserve from '../../static/images/findHospital/frame-reserve.jpg';
import './findHospital.less';

const FindHospital = (props) => {
    const [category, setCategory] = useState([]); // 类别
    const [city, setCity] = useState([]); // 城市
    const [department, setDepartment] = useState([]); // 科室
    const [relatedHospitals, setRelatedHospitals] = useState([]); // 相关医院
    const [relatedDoctors, setRelatedDoctors] = useState([]); // 相关医生

    // 类别
    const [categoryIndex, setCategoryIndex] = useState(1);
    // 城市
    const [cityIndex, setCityIndex] = useState(1);
    // 科室
    const [departmentIndex, setDepartmentIndex] = useState(1);

    const { TabPane } = Tabs;


    useEffect(() => {
        // 获取类别
        ajaxAxios('/getCategory').then(res => {
            setCategory(res.data)
        })
        // 获取城市
        ajaxAxios('/getCity').then(res => {
            setCity(res.data)
        })
        // 获取科室
        ajaxAxios('/getDepartment').then(res => {
            setDepartment(res.data)
        })
        // 获取相关医院
        ajaxAxios('/getRelatedHospitals').then(res => {
            setRelatedHospitals(res.data)
        })
        // 获取相关医生
        ajaxAxios('/getRelatedDoctors').then(res => {
            setRelatedDoctors(res.data)
        })
    }, []);

    const setIndex = (event, flag) => {
        const index = parseInt(event.currentTarget.getAttribute('index'), 10);
        if (flag === 0) {
            setCategoryIndex(index);
        } else if (flag === 1) {
            setCityIndex(index);
        } else if (flag === 2) {
            setDepartmentIndex(index)
        }
    }

    const go = () => {
        props.history.push('/home/findHospital/relatedHospitalDetail')
    }
    const goDelatedDoctor = () => {
        props.history.push('/home/findHospital/delatedDoctor')
    }

    return (
        <div className='findHospital'>
            <img className='index' src={findHospitalIndex} />
            <div className='content'>
                <Tabs type="card" defaultActiveKey="1" className='tab'>
                    <TabPane tab="按科室找" key="1">
                        <div className='filter'>
                            <div className='category'>
                                <div className='name'>类别：</div>
                                <ul>
                                    {category && category.map(item => {
                                        return (
                                            <li
                                                key={item.id}
                                                index={item.id}
                                                onClick={e => setIndex(e, 0)}
                                                className={categoryIndex === item.id ? 'current' : ''}
                                            >
                                                {item.name}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                            <div className='category' style={{ marginTop: '-2%' }}>
                                <div className='name'>城市：</div>
                                <ul>
                                    {city && city.map(item => {
                                        return (
                                            <li
                                                key={item.id}
                                                index={item.id}
                                                onClick={e => setIndex(e, 1)}
                                                className={cityIndex === item.id ? 'current' : ''}
                                            >
                                                {item.name}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                            <div className='category' style={{ marginTop: '-2%' }}>
                                <div className='name'>科室：</div>
                                <ul>
                                    {department && department.map(item => {
                                        return (
                                            <li
                                                key={item.id}
                                                index={item.id}
                                                onClick={e => setIndex(e, 2)}
                                                className={departmentIndex === item.id ? 'current' : ''}
                                                style={{ marginTop: item.id === department.length ? 20 : 0 }}
                                            >
                                                {item.name}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </TabPane>
                    <TabPane tab="按疾病找" key="2">
                        按疾病找
                    </TabPane>
                </Tabs>
                <Divider className='driver' />
                <div className='related'>
                    <div className='related-hospital'>
                        <h3>相关医院</h3>
                        <div>
                            {relatedHospitals && relatedHospitals.map(item => {
                                return (
                                    <div className='item' key={item.id}>
                                        <div className='item-left'>
                                            {/* <div className='img-div'> */}
                                                <img src={item.img} />
                                            {/* </div> */}
                                            <div className='hospital-name'>
                                                <div className='text-1'>
                                                    <div style={{ cursor: 'pointer', fontWeight: 'bold' }} onClick={go}>{item.hospitalName}</div>
                                                    <div className='span'>
                                                        {item?.label && item?.label.map(labelItem => {
                                                            return(
                                                                <span key={labelItem.id}> {labelItem.name} </span>
                                                            )
                                                        })}
                                                    </div>
                                                </div>
                                                <div className='text-2'>
                                                    {item.commentNo} | <Rate className='rate' disabled defaultValue={5} />
                                                </div>
                                                <div className='text-2'>
                                                    {item.address}
                                                </div>
                                                <div className='symptom'>
                                                    {item?.symptom && item?.symptom.map(symptomItem => {
                                                        return (
                                                            <span key={symptomItem.id}>{symptomItem.name}</span>
                                                        )
                                                    })}
                                                </div>
                                                <div className='frame'>
                                                    <img src={framePhone} /><span className='frame-1'>电话咨询</span>
                                                    <img src={frameGraphics} /><span className='frame-2'>图文咨询</span>
                                                    <img src={frameReserve} /><span className='frame-3'>预约挂号</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='item-right'>
                                            <div className='overall-rating'>综合评分</div>
                                            <div className='overall-rating-no'>{item.overallRating.score}</div>
                                            <div className='overall-rating'>{item.overallRating.rank}</div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className='pagination'>
                            <Pagination defaultCurrent={1} total={50} />
                        </div>
                    </div>
                    <div className='related-doctor'>
                        <h3>相关医生</h3>
                        <div className='doctor-list'>
                            {relatedDoctors && relatedDoctors.map(item => {
                                return (
                                    <div className='doctor-item' key={item.id}>
                                        <div className='doctor-item-content'>
                                            <img src={item.img} />
                                            <div className='introduce'>
                                                <div className='introduce-1'>
                                                    <span className='span1' onClick={goDelatedDoctor}>{item.name}</span>
                                                    <span className='span2'>{item.jobTitle}</span>
                                                </div>
                                                <div className='introduce-2'>{item.introduction}</div>
                                                <div className='make-appointment'>预约挂号</div>
                                            </div>
                                        </div>
                                        {item.id !== relatedDoctors.length && <Divider />}
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

export default FindHospital;