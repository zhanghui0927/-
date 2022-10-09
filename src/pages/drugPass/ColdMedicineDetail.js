import React, { useEffect, useState, useRef } from 'react';
import { Divider, Icon, Popover } from 'antd';

import { ajaxAxios } from '../../../mock/index';
import '../../../mock/drugPass';
import './drugPass.less';
import cold from '../../static/images/drugPass/999-cold.jpg'

const ColdMedicineDetail = () => {
    const [diseaseData, setDiseaseData] = useState([]); // 疾病分类
    const [brandData, setBrandData] = useState([]); // 品牌分类
    const [coldDetails, setColdDetails] = useState([]); // 999感冒灵详情

    const [currentIndex, setCurrentIndex] = useState(1)
    const [currentIndex2, setCurrentIndex2] = useState(1)

    useEffect(() => {
        // 获取药品分类数据
        ajaxAxios('/getDiseaseDetails').then(res => {
            setDiseaseData(res.data)
        })
        // 获取品牌分类数据
        ajaxAxios('/getBrandDetails').then(res => {
            setBrandData(res.data)
        })
        // 获取999感冒灵详情
        ajaxAxios('/getColdDetails').then(res => {
            setColdDetails(res.data)
        })
        // onChangeLi();
        // setTimeout(() => {
        //     console.log(ref.current)
        //     console.log(ref.current.childNodes)
        //     setLiList(ref.current.childNodes)
            
        // for(let i = 0; i < ref.current.childNodes.length; i++) {
        //     const aaa = ref.current.childNodes
        //     console.log(aaa[i])
        //     // console.log(aaa[i].className)
        //     aaa[i].index = i;
        //     aaa[i].onClick = function(e) {
        //         e.preventDefault();
        //         if (aaa[i].className === 'current') {
        //             aaa[i].className === ''
        //         } else {
        //             aaa[i].className === 'current'
        //         }
        //         e.stopPropagation();
        //     }

        // }
        // }, 200)

    }, [])

    const setCurren = (event) => {
        //parseIndex()有两个参数，第二个参数表示被解析值的进制，并返回对应的十进制数
        //event.currentTarget.getAttribute('index')，通过事件获取当前的序列号并将之转换为number
        setCurrentIndex(parseInt(event.currentTarget.getAttribute('index'), 10))
    }
    const setCurren2 = (event) => {
        setCurrentIndex2(parseInt(event.currentTarget.getAttribute('index'), 10))
    }

    const content = (
        <div style={{ padding: '0 10px' }}>
            <span style={{ marginRight: '10px' }}>感冒</span>
            <span>发烧</span>
        </div>
    );

    const onChangeLi = (obj) => {
        // var liList = document.getElementById("li1").getElementsByTagName("li");
        // console.log(li.current.childNodes) // 获取当前DOM节点的所有子节点
    }

    return (
        <div className='details'>
            <div className='categories'>
                <div className='commodity-no'>
                    共<span>281</span>个相关商品&nbsp;&nbsp;&nbsp;&nbsp;
                </div>

                <div className='disease'>
                    <div className='disease-name'>疾病：</div>
                    <div className='li-more'>
                        <ul>
                            {diseaseData && diseaseData.map(item => {
                                return (
                                    <li
                                        index={item.id}
                                        key={item.id}
                                        onClick={setCurren}
                                        className={currentIndex === item.id ? 'current' : ''}
                                    >
                                        {item.name}
                                    </li>
                                )
                            })}
                        </ul>
                        <Popover content={content}>
                            <span className='disease-more'>更多<Icon type="down" style={{ fontSize: '14px' }} /></span>
                        </Popover>
                    </div>
                </div>
                <div className='divider'>
                    <Divider dashed />
                </div>

                <div className='disease'>
                    <div className='disease-name'>品牌：</div>
                    <div className='li-more'>
                        <ul>
                            {brandData && brandData.map(item => {
                                return (
                                    <li
                                        index={item.id}
                                        key={item.id}
                                        onClick={setCurren2}
                                        className={currentIndex2 === item.id ? 'current' : ''}
                                    >
                                        {item.name}
                                    </li>
                                )
                            })}
                        </ul>
                        <Popover content={content}>
                            <span className='disease-more'>更多<Icon type="down" style={{ fontSize: '14px' }} /></span>
                        </Popover>
                    </div>
                </div>
                <div className='divider'>
                    <Divider dashed />
                </div>
            </div>
            <div className='content'>
                {coldDetails && coldDetails.map(item => {
                    return (
                        <div className='line-detail'>
                            <div className='card-header'><span>{item.drugName}</span>{item.productionPlace}</div>
                            <div className='img-describe'>
                                <img src={item.img} />
                                <div className='describe'>
                                    <div className='describe-div'>
                                        <div className='describe1'>功能主治：</div>
                                        <div className='describe2'>
                                            {item.describe}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                    })}
            </div>
        </div>
    )
}

export default ColdMedicineDetail;