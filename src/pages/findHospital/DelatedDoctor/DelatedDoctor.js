/**
 * 相关医生
 */
import React, { useState, useEffect } from 'react';
import { Tabs, Button, Divider, Icon } from 'antd';
import SvgIcon from '../../../components/SvgIcon/index';

import doctor1 from '../../../static/images/findHospital/doctor1.jpg';
import consult1 from '../../../static/images/findHospital/consult1.jpg';
import consult2 from '../../../static/images/findHospital/consult2.jpg';
import consult3 from '../../../static/images/findHospital/consult3.jpg';
import './delatedDoctor.less';
import { ajaxAxios } from '../../../../mock/index';
import '../../../../mock/findHospital';
import fellowDoctor1 from '../../../static/images/findHospital/fellow-doctor1.jpg';
import fellowDoctor2 from '../../../static/images/findHospital/fellow-doctor2.jpg';

const DelatedDoctor = (props) => {
    const [data, setData] = useState([]);
    const [patientComments, setPatientComments] = useState([]);

    const { TabPane } = Tabs;
    // 回复类别
    const [categoryIndex, setCategoryIndex] = useState(1);

    useEffect(() => {
        ajaxAxios('/getFilterCategory').then(res => {
            setData(res.data)
        })
        ajaxAxios('/getPatientComments').then(res => {
            setPatientComments(res.data)
        })
    }, [])

    const setIndex = (event) => {
        const index = parseInt(event.currentTarget.getAttribute('index'), 10);
        setCategoryIndex(index);
    }

    function callback(key) {
        console.log(key);
    }

    const operations = (
        <div className='tab-right'>我是医生本人，立即完善资料></div>
    );

    return (
        <div className='delatedDoctor'>
            <div className='introduce'>
                <Tabs defaultActiveKey="1" tabBarExtraContent={operations} onChange={callback}>
                    <TabPane tab="概览" key="1" className='overview'>
                        <div className='doctor'>
                            <div className='doctor-introduction'>
                                <img src={doctor1} />
                                <div className='personal'>
                                    <div>
                                        <span className='span1'>郭宏川</span>
                                        <span className='span2'>主任医师</span>
                                    </div>
                                    <div className='visiting-location'>
                                        出诊地点：<span>首都医科大学宣武医院 神经外科</span>
                                    </div>
                                    <div>
                                        擅长领域：三叉神经痛、听神经瘤、胆脂瘤、垂体瘤（从微腺瘤至... <span>详细></span>
                                    </div>
                                    <div>
                                        执业经历：郭宏川，男，副主任医师，副教授，2005年博士毕业于白求恩医科大学神经外科专业，2007年...<span>详细介绍></span>
                                    </div>
                                </div>
                            </div>
                            <Divider />
                            <div className='total-visits'>
                                <div><SvgIcon iconClass="query1" size="18" />总访问：1575次</div>
                                <div><SvgIcon iconClass="query2" size="18" />昨日访问：1次</div>
                                <div><SvgIcon iconClass="article" size="18" />总文章：0篇</div>
                            </div>
                        </div>
                        <div className='overall-rating'>
                            <div className='overall-rating-header'>
                                <div>综合评分：4933分</div>
                                <div>得分排名：北京市神经外科第58名，全国神经外科第260名</div>
                            </div>
                            <div className='score'>
                                <div className='score1'>
                                    <div className='score-name'>学术地位</div>
                                    <div id="rate1" />
                                    <div>暂无评分</div>
                                </div>
                                <div className='score2'>
                                    <div className='score-name'>学术成果</div>
                                    <div id="rate1" />
                                    <div>暂无评分</div>
                                </div>
                                <div className='score3'>
                                    <div className='score-name'>患者评价</div>
                                    <div id="rate2" />
                                    <div>713<span>详情</span></div>
                                </div>
                                <div className='score4'>
                                    <div className='score-name'>平台/职称</div>
                                    <div id="rate2" />
                                    <div>4220<span>详情</span></div>
                                </div>
                            </div>
                        </div>
                    </TabPane>
                    <TabPane tab="详细介绍" key="2">
                        详细介绍
                    </TabPane>
                    <TabPane tab="网友咨询" key="3">
                        网友咨询
                    </TabPane>
                    <TabPane tab="就医分享与点评" key="4">
                        就医分享与点评
                    </TabPane>
                </Tabs>
            </div>
            <div className='content'>
                <div className='content-left'>
                    <div className='information'>
                        <div className='information-table'>
                            <div className='information-table-header'>
                                <div>
                                    <span className='span1'>郭宏川 出诊时间/挂号费用</span>
                                    <span className='span2'>温馨提示：医生出诊时间表更新于2022年03月01日</span>
                                </div>
                                <Button type='primary'>最新时间</Button>
                            </div>
                            <table border="1">
                                <tr>
                                    <th>日期</th>
                                    <th>星期一</th>
                                    <th>星期二</th>
                                    <th>星期三</th>
                                    <th>星期四</th>
                                    <th>星期五</th>
                                    <th>星期六</th>
                                    <th>星期日</th>
                                </tr>
                                <tr>
                                    <td>上午</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>下午</td>
                                    <td></td>
                                    <td>
                                        <div>60元</div>
                                        <div>首都医科大学宣武医院</div>
                                        <Button className='btn' type="primary">查询号源</Button>
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>夜间</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </table>
                        </div>
                        <div className='contact-information'>
                            <h4>联系方式</h4>
                            <div className='connect'>
                                <div className='connect-item'>
                                    <div className='connect-item-img'>
                                        <img src={consult1} />
                                        <div>电话咨询</div>
                                    </div>
                                    <Button type="primary">咨询</Button>
                                </div>
                                <Divider />
                                <div className='connect-item'>
                                    <div className='connect-item-img'>
                                        <img src={consult2} />
                                        <div>图文咨询</div>
                                    </div>
                                    <Button type="primary">咨询</Button>
                                </div>
                                <Divider />
                                <div className='connect-item'>
                                    <div className='connect-item-img'>
                                        <img src={consult3} />
                                        <div>预约挂号</div>
                                    </div>
                                    <Button type="primary">咨询</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='reply'>
                        <div style={{ fontSize: 18, fontWeight: 'bold' }}>郭宏川 回复的患友咨询</div>
                        <Button type="primary">我要咨询</Button>
                    </div>
                    <div className='reply-content'>
                        <div className='filter'>
                            <ul>
                                { data && data.map(item => {
                                    return (
                                        <li
                                            key={item.id}
                                            index={item.id}
                                            onClick={e => setIndex(e)}
                                            className={categoryIndex === item.id ? 'current' : ''}
                                        >
                                            {item.name}
                                        </li>
                                    )
                                }) }
                                <li>展开全部 <Icon type="down" /></li>
                            </ul>
                        </div>
                        <div className='comment'>
                            { patientComments && patientComments.map(item => {
                                return (
                                    <div>
                                        <div className='nickName'>
                                            <SvgIcon iconClass="dialog" size="16" />{item.nickName}
                                        </div>
                                        <div>{item.comment}</div>
                                        <div>{item.date} <span>{item.docter}</span></div>
                                        { item.id !== patientComments.length && <Divider className='driver' dashed /> }
                                    </div>
                                )
                            }) }
                        </div>
                    </div>
                </div>
                <div className='content-right'>
                    <h4 style={{ fontSize: '0.7rem' }}>同科医生</h4>
                    <div className='fellow-doctor'>
                        <div className='doctor-item'>
                            <div className='doctor-item1'>
                                <img src={fellowDoctor1} />
                                <div className='doctor-text'>
                                    <div><span>张鸿祺 </span>主任医师</div>
                                    <div>首都医科大学宣武医院</div>
                                    <div>神经外科门诊</div>
                                    <div>中国医师协会神经介入专业委员会主任委员</div>
                                </div>
                            </div>
                            <div className='doctor-item2'>
                                擅长：脑动脉瘤、脊髓血管畸形、脑血管畸形、海绵状血管瘤、小儿脑血管病、脑出血...
                            </div>
                            <div className='doctor-item3'>
                                <Button className='btn1'>有号</Button>
                                <Button type="primary">预约挂号</Button>
                            </div>
                            <Divider className='driver' dashed />
                        </div>
                        <div className='doctor-item'>
                            <div className='doctor-item1'>
                                <img src={fellowDoctor2} />
                                <div className='doctor-text'>
                                    <div><span>张宇清 </span>主任医师</div>
                                    <div>首都医科大学宣武医院</div>
                                    <div>神经外科门诊</div>
                                    <div>中国医师协会神经介入专业委员会主任委员</div>
                                </div>
                            </div>
                            <div className='doctor-item2'>
                                擅长：脑动脉瘤、脊髓血管畸形、脑血管畸形、海绵状血管瘤、小儿脑血管病、脑出血...
                            </div>
                            <div className='doctor-item3'>
                                <Button className='btn1'>有号</Button>
                                <Button type="primary">预约挂号</Button>
                            </div>
                            <Divider className='driver' dashed />
                        </div>
                        <div className='docter-footer'>
                            <div>【神经外科预约挂号（61位医生）】</div>
                            <div>【神经外科预约挂号（136位医生）】</div>
                            <div>【外科预约挂号（136位医生）】</div>
                            <div>【首都医科大学宣武医院预约挂号（136位医生）】</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DelatedDoctor;