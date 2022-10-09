/**
 * 战略合作
 */
import React, { useEffect, useState } from 'react';
import { Divider, Form, Input, Button, Radio, Row, Col, Icon } from 'antd';

import { ajaxAxios } from '../../../mock/index';
import '../../../mock/strategyCooperate';
 
import strategic from '../../static/images/strategyCooperate/strategic.jpg';
import logo_ad from '../../static/images/strategyCooperate/logo_ad.jpg';
import './strategyCooperate.less';

const StrategyCooperate = (props) => {
    const [strategyData, setStrategyData] = useState([]);

    useEffect(() => {
        // 获取战略合作
        ajaxAxios('/getStrategyCooperate').then(res => {
            setStrategyData(res.data)
        })
    }, []);
    
    return (
        <div className='strategyCooperate'>
            <img className='img-name' src={strategic} />
            <div className='strategyCooperate-content'>
                {strategyData && strategyData.map(item => {
                    return (
                        <img id={item.id} src={item.img} />
                    )
                })}
            </div>
        </div>
    )
}

export default StrategyCooperate;
