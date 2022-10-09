/**
 * 直播
 */
import React, { useEffect, useState } from 'react';
import { Button, Divider, Tabs } from 'antd';
import SvgIcon from '../../components/SvgIcon/index';
import { ajaxAxios } from '../../../mock/index';

import liveStream1 from '../../static/images/tubeTrain/live-stream-1.jpg';
import liveStreamDetail1 from '../../static/images/tubeTrain/live-streamDetail1.jpg';
import './tubeTrain.less';

const LiveStream = () => {
    const [liveStreamDetail, setLiveStreamDetail] = useState([]); // 获取直播详情数据

    const { TabPane } = Tabs;

    useEffect(() => {
        // 获取直播详情数据
        ajaxAxios('/getLiveStreamDetail').then(res => {
            setLiveStreamDetail(res.data)
        })
    }, [])

    return (
        <div className='liveStream'>
            <div className='above'>
                <img className='liveStream1' src={liveStream1} />
                <div className='introduce'>
                    <div className='text-1'>新形势下病区医院感染管理工作</div>
                    <div className='text-2'>31320人预约</div>
                    <div className='text-3'>直播时间：2022.03.17 19:00:00</div>
                    <div className='footer-btn'>
                        <Button className='btn' type='primary'>回放</Button>
                        <div className='share'>
                            <SvgIcon iconClass="share" size="17px" />
                            <span>分享</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='driver'>
                <Divider />
            </div>
            <div className='detail'>
                <Tabs defaultActiveKey="1" className='tab'>
                    <TabPane tab="直播详情" key="1">
                        <img className='img1' src={liveStreamDetail1} />
                    </TabPane>
                    <TabPane tab="目录" key="2">
                    目录
                    </TabPane>
                </Tabs>
                <div className='related-courses'>
                    <div className='name'>相关课程</div>
                    {liveStreamDetail && liveStreamDetail.map(item => {
                        return (
                            <div className='course-item'>
                                <img src={item.img} />
                                <div className='text'>
                                    <div className='text-1'>{item.name}</div>
                                    <div className='text-footer'>
                                        {item.learn}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default LiveStream;