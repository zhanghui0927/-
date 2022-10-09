import { Divider } from 'antd';
import React, { useEffect, useState } from 'react';

import minoxidilTincture from '../../static/images/drugPass/minoxidilTincture.jpg';
import vitalitySuOralLiquid from '../../static/images/drugPass/vitalitySuOralLiquid.jpg';
import jinshuibaoCapsules from '../../static/images/drugPass/jinshuibaoCapsules.jpg';
import ginsengSupplements from '../../static/images/drugPass/ginsengSupplements.jpg';
import kidneyTreasure from '../../static/images/drugPass/kidneyTreasure.jpg';
import zuoguiMaru from '../../static/images/drugPass/zuoguiMaru.jpg';

import { ajaxAxios } from '../../../mock/index';
import '../../../mock/drugPass';

const MenHealth = () => {
    const [symptomData, setSymptomData] = useState([]); // 症状列表

    useEffect(() => {
        // 获取症状列表
        ajaxAxios('/getSymptomData').then(res => {
            setSymptomData(res.data)
        })
        
    })

    let divStyle = {
        backgroundImage: 'url(' + jinshuibaoCapsules + ')'
    }

    return (
        <div className='menHealth'>
            <h2>男性健康</h2>
            <div className='introduce-content'>
                <div className='content-left'>
                    <img src={minoxidilTincture} />
                    <div>蔓迪 米诺地尔酊</div>
                    <Divider />
                    <img src={vitalitySuOralLiquid} />
                    <div>地奥 活力苏口服液</div>
                </div>
                <div className='content-center' style={divStyle}>
                    <div className='center-nourishes-text'>
                        <div className='text-bold'>补肾益气</div>
                        <Divider />
                        <div className='text-2'>养精气</div>
                    </div>
                </div>
                <div className='content-right'>
                    <div className='right-nourishes'>
                        <div className='right-nourishes-text'>
                            <div className='text-bold'>益气养血，补肾阳</div>
                            <Divider />
                            <div className='text-2'>仁和 参鹿补片</div>
                        </div>
                        <img src={ginsengSupplements} />
                    </div>
                    <Divider />
                    <div className='right-nourishes'>
                        <div className='right-nourishes-text'>
                            <div className='text-bold'>温阳补肾 扶正固本</div>
                            <Divider />
                            <div className='text-2'>汇仁 肾宝片</div>
                        </div>
                        <img src={kidneyTreasure} />
                    </div>
                    <Divider />
                    <div className='zuoguiMaru-img'>
                        <img src={zuoguiMaru} />
                        <img src={zuoguiMaru} />
                        <img src={zuoguiMaru} />
                    </div>
                </div>
            </div>
            <div className='symptom'>
                <div>
                {/* <div style={{ display: 'flex', justifyContent: 'center' }}> */}
                    <ul>
                        { symptomData && symptomData.map(item => {
                            return (
                                <li>
                                    <span>{item.symptomName}</span>
                                    {item.drugQuantity}
                                </li>
                            )
                        }) }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MenHealth;