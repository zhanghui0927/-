/**
 * 招贤纳士 - 职业匹配
 */
 import React from 'react';
 import { Button } from 'antd';
 
 import socialRecruitmentIndex from '../../../static/images/careers/social-recruitment-index.jpg';
 import socialRecruitment1 from '../../../static/images/careers/social-recruitment1.jpg';
 import socialRecruitment2 from '../../../static/images/careers/social-recruitment2.jpg';
 import socialRecruitment3 from '../../../static/images/careers/social-recruitment3.jpg';
 import comLogo from '../../../static/images/companyProfile/com-logo.png';
 import './careerMatch.less';
 
 const CareerMatch = () => {
     
     return (
         <div className='careerMatch'>
             <img className='careerMatch-index' src={socialRecruitmentIndex} />
            <div className='team'>
                <div className='team-left'>
                    <h2>认识我们的团队</h2>
                    <div>
                        我们秉承员工是公司的核心，同时也期待更多志同道合者的加入。对我们在做的事感兴趣的话，搜索我们的所在地，大家来会互相认识一下吧。
                    </div>
                </div>
                <img src={comLogo} />
            </div>
            <div className='find-job'>
                <div className='find'>
                    我想找&nbsp;
                    <select style={{ color: '#2865bf' }}>
                        <option value="1">某个职位</option>
                    </select>
                    &nbsp;&nbsp;&nbsp;  
                    工作地点&nbsp;
                    <select style={{ color: '#2865bf' }}>
                        <option value="2">某个地点</option>
                    </select>
                </div>
                <div className='recruitment'>
                    <div className='recruitment-item'>
                        <img src={socialRecruitment1} />
                        <div className='post'>
                            <div className='position-title'>新媒体运营</div>
                            <div>薪资：16-19K · 14薪</div>
                            <div>工作地点：北京 海淀区 中关村</div>
                            <Button className='btn' type="primary">了解更多</Button>
                        </div>
                    </div>
                    <div className='recruitment-item'>
                        <img src={socialRecruitment2} />
                        <div className='post'>
                            <div className='position-title'>新媒体运营</div>
                            <div>薪资：15-21K · 14薪</div>
                            <div>工作地点：上海</div>
                            <Button className='btn' type="primary">了解更多</Button>
                        </div>
                    </div>
                    <div className='recruitment-item'>
                        <img src={socialRecruitment3} />
                        <div className='post'>
                            <div className='position-title'>新媒体运营</div>
                            <div>薪资：11-13K · 14薪</div>
                            <div>工作地点：浙江 杭州</div>
                            <Button className='btn' type="primary">了解更多</Button>
                        </div>
                    </div>
                </div>
            </div>
         </div>
     )
 }
 
 export default CareerMatch;