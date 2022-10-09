/**
 * 药品通
 */
import React, { useEffect, useState } from 'react';
import { Divider, Icon } from 'antd';
import { NavLink } from 'react-router-dom';

import index from '../../static/images/drugPass/index.jpg';
import drugPass1 from '../../static/images/drugPass/drug-pass1.jpg';
import drugPass2 from '../../static/images/drugPass/drug-pass2.jpg';
import drugPass3 from '../../static/images/drugPass/drug-pass3.jpg';
import drugPass4 from '../../static/images/drugPass/drug-pass4.jpg';

import SvgIcon from '../../components/SvgIcon/index';
import { ajaxAxios } from '../../../mock/index';
import '../../../mock/drugPass';
import './drugPass.less';

const DrugPass = (props) => {
    const [drug, setDrug] = useState([]); // 药品分类
    const [drugDetails, setDrugDetails] = useState([]); // 药品分类详情

    useEffect(() => {
        // 获取药品分类数据
        ajaxAxios('/getDrugClassification').then(res => {
            setDrug(res.data)
        })

        // 获取药品分类详情数据
        ajaxAxios('/getDrugDetails').then(res => {
            setDrugDetails(res.data)
        })
    }, []);

    const routeOnClick = () => {
        props.history.push('/home/drugPass/menHealth')
    }

    return (
        <div className='drug-pass'>
            <img className='index' src={index} />
            <div className='content'>
                <h2>人群分类</h2>
                <div className='health-img'>
                    <img onClick={routeOnClick} src={drugPass1} style={{ marginTop: '-4px' }}/>
                    <img onClick={routeOnClick} src={drugPass2} />
                    <img onClick={routeOnClick} src={drugPass3} />
                    <img onClick={routeOnClick} src={drugPass4} />
                </div>
                <Divider />
                <h2>药品分类</h2>
                <div className='drug-classification'>
                    <div className='drug-left'>
                            {drug && drug.map(item => {
                                return (
                                    <div className='classification-item' key={item.id}>
                                        <div className='line'>
                                            <SvgIcon iconClass={item.icon} />
                                            <div> {item.name} </div>
                                        </div>
                                    </div>
                                )
                            })}
                    </div>
                    <div className='drug-right'>
                            { drugDetails && drugDetails.map(item => {
                                return (
                                    <div className='detail' key={item.id}>
                                        <div className='name'>{ item.drugName } <Icon type="right" style={{ fontSize: '12px' }} /> </div>
                                        <div className='classification'>
                                            {item.children.map(itemChildren => {
                                                return (
                                                    <div key={itemChildren.id}>
                                                        <Divider type="vertical" />
                                                        <NavLink to="/home/drugPass/details">{ itemChildren.diseaseName }</NavLink>
                                                    </div>
                                                )
                                            })}
                                            {/* <Divider type="vertical" /> 冠心病 <Divider type="vertical" /> 脑血耍你 <Divider type="vertical" /> 心肌梗塞 */}
                                        </div>
                                    </div>
                                )
                            }) }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DrugPass;