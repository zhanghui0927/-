/**
 * 首页
 */
import React, { useEffect, useState } from 'react';
import {
    Button,
    Carousel,
    Timeline,
} from 'antd';
import swiper1 from '../../static/images/frontPage/swiper1.jpg';
import indexFind from '../../static/images/frontPage/index-find.jpg';
import indexDrugPass from '../../static/images/frontPage/index-drugPass.jpg';
import indexTubeTrain from '../../static/images/frontPage/index-tubeTrain.jpg';
import indexMeeting from '../../static/images/frontPage/index-meeting.jpg';
import newsRight from '../../static/images/frontPage/news-right.png';

import { ajaxAxios } from '../../../mock/index';
import '../../../mock/frontPage';
import './frontPage.less';

const FrontPage = (props) => {
    const [seemore, setSeemore] = useState(false);
    const [healthData, setHealthData] = useState([]); // 健康号数据

    useEffect(() => {
        ajaxAxios('/getFrontPage').then(res => {
            // console.log(res)
        })
        ajaxAxios('/getHealth').then(res => {
            setHealthData(res.data)
        })

        // Mock.mock('http://api.com', {
        //     "user|2-5": [{                              //2-5组数据
        //         'name': '@cname',                       //中文名称
        //         'age|1-100': 100,                       //100以内随机整数
        //         'birthday': '@date("yyyy-MM-dd")',      //日期
        //         'city': '@city(true)'                   //中国城市
        //     }]
        // });

        // var xhr = new XMLHttpRequest();
        // xhr.open("get", "http://api.com", true);
        // xhr.send(null);

        // xhr.onreadystatechange = function () {
        //     if (xhr.readyState == 4 && xhr.status == 200) {
        //         console.log(xhr.responseText);
        //     }
        // }


    }, []);

    const onBtn = () => {
        setSeemore(!seemore)
    }

    const go = (type) => {
        if (type === 1) {
            props.history.push('/home/findHospital')
        } else if (type === 2) {
            props.history.push('/home/drugPass')
        } else if (type === 3) {
            props.history.push('/home/tubeTrain')
        } else if (type === 4) {
            props.history.push('/home/meeting')
        }
    }

    return (
        <div>
            <Carousel autoplay>
                <div>
                    <img className='swiper' src={swiper1} />
                </div>
            </Carousel>
            <div className='content-middle'>
                <img src={indexFind} onClick={() => go(1)} />
                <img src={indexDrugPass} onClick={() => go(2)} />
                <img src={indexTubeTrain} onClick={() => go(3)} />
                <img src={indexMeeting} onClick={() => go(4)} />
            </div>
            <div className='latest-news'>
                <h2>最新消息</h2>
                <div className='time-father'>
                    <div className='time-track'>
                        <span className='span'>今天</span>
                        <Timeline className='timeLine'>
                            <Timeline.Item>
                                <h3>26日0时至14时，深圳新增11例病例</h3>
                                <p>17:28</p>
                                <div>
                                    26日0时至14时，深圳新增11例病例,26日0时至14时，深圳新增11例病例26日0时至14时，深圳新增11例病例26日0时至14时，深圳新增11例病例26日0时至14时，深圳新增11例病例26日0时至14时，深圳新增11例病例。
                                </div>
                            </Timeline.Item>
                            <Timeline.Item>
                                <h3>山东理工大学2名学生为密接者 西校区暂时相对封闭</h3>
                                <p>17:28</p>
                                <div>
                                    山东理工大学2名学生为密接者 西校区暂时相对封闭山东理工大学2名学生为密接者 西校区暂时相对封闭。
                                </div>
                            </Timeline.Item>
                            {
                                seemore && 
                                <Timeline.Item>
                                    <h3>26日0时至14时，深圳新增11例病例</h3>
                                    <p>17:28</p>
                                    <div>
                                        26日0时至14时，深圳新增11例病例,26日0时至14时，深圳新增11例病例26日0时至14时，深圳新增11例病例26日0时至14时，深圳新增11例病例26日0时至14时，深圳新增11例病例26日0时至14时，深圳新增11例病例。
                                    </div>
                                </Timeline.Item>
                            }
                            <div className='but-seemore'>
                                <Button onClick={onBtn}>{seemore ? '收起更多' : '查看更多'}</Button>
                            </div>
                        </Timeline>
                    </div>
                    <div className='img-right'>
                        <img src={newsRight} style={{ width: '300px', height: '300px' }} />
                    </div>
                </div>
            </div>
            <div className='health-no'>
                <h2>健康号</h2>
                <div className='health-content'>
                    {healthData && healthData.map((item => {
                        return (
                            <div className='health-div' key={item.id}>
                                <img src={item.img} />
                                <div className='name'>{ item.name }</div>
                                <div className='focus-no'>{ item.focusNo }</div>
                                <span className='add-docus'>+关注</span>
                            </div>
                        )
                    }))}
                </div>
            </div>
        </div>
    )
}

export default FrontPage;