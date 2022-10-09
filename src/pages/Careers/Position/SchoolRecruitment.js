/**
 * 招贤纳士 - 校招职位
 */
import React, { useState, useEffect } from 'react';
import { Button, Icon, Input, Pagination } from 'antd';
import './schoolRecruitment.less';

import { ajaxAxios } from '../../../../mock/index';
import '../../../../mock/careers';
import schoolRecruitment from '../../../static/images/careers/school-recruitment.jpg';
import intern from '../../../static/images/careers/intern.jpg';

const SchoolRecruitment = (props) => {
    const { match } = props;
    const [functional, setFunctional] = useState([{name: '11111'}]); // 职能类别
    const [adress, setAdress] = useState([]); // 工作地点
    const [workingYears, setWorkingYears] = useState([]); // 工作年限
    const [position, setPosition] = useState([]); // 职位

    // 校招/实习生
    const IS_SCHOOL = match.params.type === 'school'; // 是否为校招
    console.log(IS_SCHOOL)

    // 类别
    const [functionalIndex, setFunctionalIndex] = useState(1);
    // 工作地点
    const [adressIndex, setAdressIndex] = useState(1);
    // 工作年限
    const [workingYearsIndex, setWorkingYearsIndex] = useState(1);

    
    useEffect(() => {
        // 获取职能类别
        ajaxAxios(IS_SCHOOL ? '/getfication' : '/getficationIntern').then(res => {
            setFunctional(res.data)
        })
        // 获取工作地点
        ajaxAxios(IS_SCHOOL ? '/getWorkPlace' : '/getWorkPlaceIntern').then(res => {
            setAdress(res.data)
        })
        // 获取工作年限
        ajaxAxios('/getworkingYears').then(res => {
            setWorkingYears(res.data)
        })
        // 获取职位
        ajaxAxios(IS_SCHOOL ? '/getPosition' : '/getPositionIntern').then(res => {
            setPosition(res.data)
        })
    }, []);

    const setIndex = (event, flag) => {
        const index = parseInt(event.currentTarget.getAttribute('index'), 10);
        if (flag === 0) {
            setFunctionalIndex(index);
        } else if (flag === 1) {
            setAdressIndex(index);
        } else if (flag === 2) {
            setWorkingYearsIndex(index)
        }
    }


    return (
        <div className='schoolRecruitment'>
            <img src={IS_SCHOOL ? schoolRecruitment : intern} />
            <div className='schoolRecruitment-content'>
                <div className='options'>
                    <div className='options-header'>
                        <div />&nbsp;筛选项
                    </div>
                    <div className='functional'>
                        <div className='name'>职能类别：</div>
                        <ul>
                            {functional && functional.map(item => {
                                return (
                                    <li
                                        key={item.id}
                                        index={item.id}
                                        onClick={e => setIndex(e, 0)}
                                        className={functionalIndex === item.id ? 'current' : ''}
                                    >
                                        {item.name}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className='functional'>
                        <div className='name'>工作地点：</div>
                        <ul>
                            {adress && adress.map(item => {
                                return (
                                    <li
                                        key={item.id}
                                        index={item.id}
                                        onClick={e => setIndex(e, 1)}
                                        className={adressIndex === item.id ? 'current' : ''}
                                    >
                                        {item.address}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className='functional'>
                        <div className='name'>工作年限：</div>
                        <ul>
                            {workingYears && workingYears.map(item => {
                                return (
                                    <li
                                        key={item.id}
                                        index={item.id}
                                        onClick={e => setIndex(e, 2)}
                                        className={workingYearsIndex === item.id ? 'current' : ''}
                                    >
                                        {item.name}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className='search'>
                        <Input placeholder="职位名称关键字" style={{ width: '20%' }} /><Button type="primary">职位搜索</Button>
                    </div>
                </div>
                <div className='job-detail'>
                    <div className='job-header'>
                        <div />&nbsp;共{IS_SCHOOL ? 21 : 6}个职位
                    </div>
                    {position && position.map(item => {
                        return (
                            <div className='job-item' key={item.id} id={item.id === 1 ? 'back' : ''}>
                                <div className='job-line'>
                                    <div>
                                        <Icon type="copy" style={{ fontSize: '20px', color: '#08c' }} />
                                        <span style={{ fontWeight: 'bold' }}>{item.positionName}</span>
                                    </div>
                                    <div>
                                        工作地点：{item.adress}
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        只能类别：{item.category}
                                    </div>
                                </div>
                                <div>发布于：{item.releaseTime}</div>
                            </div>
                        )
                    })}
                    <Pagination
                        style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 20 }}
                        total={IS_SCHOOL ? 4 : 1}
                        showTotal={total => `共 ${total} 页`}
                        pageSize={1}
                        defaultCurrent={1}
                    />
                </div>
            </div>
        </div>
    )
}

export default SchoolRecruitment;