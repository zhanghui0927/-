import React, { useEffect,useState } from 'react';

import findHospital1 from '../../../static/images/findHospital/findHospital1.jpg';
import relevantRanking from '../../../static/images/findHospital/relevant-ranking.png';
import consult1 from '../../../static/images/findHospital/consult1.jpg';
import SvgIcon from '../../../components/SvgIcon/index';
import { ajaxAxios } from '../../../../mock/index';
import '../../../../mock/findHospital';
import './style.less';

const RelatedHospitalDetail = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        ajaxAxios('/getConsult').then(res => {
            setData(res.data)
            map()
        })
    }, [])

    const map = () => {
        var map = new BMapGL.Map("container");// 创建地图实例,这里用到了id选择器
        var point = new BMapGL.Point(116.4209827203209,39.917818629732665);// 设置经纬度
        map.centerAndZoom(point, 15); // 初始化地图，设置中心点坐标和地图级别
        var marker = new BMapGL.Marker(point) // 创建标注
        map.addOverlay(marker)    // 将标注添加到地图中
        
        map.enableScrollWheelZoom(true) // 开启鼠标滚轮缩放
        map.addControl(new BMapGL.NavigationControl()) // 添加平移缩放控件
        map.addControl(new BMapGL.ScaleControl()) // 添加比例尺控件
        // map.addControl(new BMapGL.OverviewMapControl()) // 添加缩略地图控件
    }

    return (
        <div className='relatedHospitalDetail'>
            <div className='hospital-introduction'>
                <div className='left'>
                    <img className='img' src={findHospital1} />
                    <div className='text'>
                        <div className='text-1'>
                            <span className='name'>中国医学科学院北京协和医院</span>
                            <span className='spanType1' id="span">公立</span>
                            <span className='spanType2' id="span">三甲</span>
                            <span className='spanType1' id="span">综合</span>
                        </div>
                        <div>别称：北京协和医院</div>
                        <div>地址：北京市东城区帅府园一号<span className='link'>[导航]</span></div>
                        <div>电话：010-69156114</div>
                        <div>简介：北京协和医院是集医疗、教学、科研于一体的现代化综合三级甲等医院，是国家卫生健康委指定的全国疑难重症诊...<span className='link'>详情></span></div>
                        <div>服务介绍：名医电话（16个科室，23名医生），图文咨询（30个科室，52名医生）预约挂号（57个科室，2060名医生），</div>
                    </div>
                </div>
                <div className='right'>
                    <div className='content'>
                        <img src={relevantRanking} />
                        <div className='ranking'>
                            <div>2020年复旦版全国医院综合排名No.1</div>
                            <div>
                                <span>名医汇医院排行榜：</span>北京市第一名、全国第一名
                            </div>
                            <div>
                                <span>在线服务患者：</span>6183
                            </div>
                            <div>
                                <span>患者好评：</span>好评:57657 好评率:97%;
                            </div>
                            <div>普通外科：2016年复旦版全国普通外科专科排名No.1</div>
                            <div className='expand-more'>展开更多</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='consult'>
                <div className='consult-text'>
                    {data && data.map(item => {
                        return (
                            <div className='consult-text-item' key={item.id}>
                                <img src={item.img} />
                                <div className='consult-text'>
                                    <div className='consult-text1'>{item.name}</div>
                                    <div className='consult-text2'>{item.introduce}</div>
                                    <div className='consult-text3'>{item.reserve}<SvgIcon iconClass="to-right" size="18" /></div>
                                </div>
                                <div className='top-right'>{item.topRight}</div>
                            </div>
                        )
                    })}
                </div>
                <div className='map'>
                    <h3>北京协和医院地图</h3>
                    <div id="container"></div> 
                </div>
            </div>
        </div>
    )
}

export default RelatedHospitalDetail;