/**
 * 会议简介
 */
 import React, { useEffect, useState } from 'react';
 import indexImg from '../../../static/images/meeting/timeLine1.jpg';
 import '../meeting.less';
 import { MeetLine } from '../../../components/MeetLine/index';
 
 const ConferenceIntroduction = (props) => {
     const { pathname } = props.location;
     const routerName = pathname.split('/')[2];
 
     return (
         <div className="index" id="conferenceIntroduction">
             <MeetLine routerName={routerName} />
             <div className='content'>
                 <div style={{ margin: '2rem 0 0 5rem' }}>会议简介</div>
                 <div style={{ marginLeft: '5rem' }}>INTRODUCTION</div>
                 <p>众所周知，今年6月，国务院办公厅出台的《关于推动公立医院高质量发展的意见》要求，强化体系创新、技术创新、模式创新、管理创新，促进“公立医院发展方式从规模扩张转向提质增效，运行模式从粗放管理转向精细化管理。” </p>
                 <p>其实，这并非国家医疗健康政策首次倡导“精细化管理”。如早在2017年国务院办公厅发布的《关于建立现代医院管理制度的指导意见》，鲜明提出“推动各级各类医院管理规范化、精细化、科学化”，由此也激起国内诸多医疗机构探索科学管理，健全运营管理体系，推进医疗服务迈向优质高效。</p>
                 <p>热度不减的精细化管理，如何在公立医院根深叶茂？</p>
                 <p>围绕这个问题，健康界联合丽水市中心医院特别策划“赢在精细——公立医院高质量发展之管理创新研修班”，畅谈前沿理念，呈现卓越实践。对于国内不少医院管理者而言，丽水市中心医院并不陌生：2010年将“精管理”写入医院发展纲领，自此开启“探索—总结—提升”的螺旋上升之路。十三五期间，全国共有 1100 余批次的6900余人到院参访，多家医院甚至选派中层管理者驻院学习。作为地市级医疗机构的丽水市中心医院，在2019年度的全国三级公立医院绩效考核中位列第68名，比2018年度上升2名。2021年8月，丽水市中心医院再获殊荣，被浙江省委、省政府评为“浙江省十佳医院”。</p>
                 <p>百尺竿头，更进一步。2021年8月，丽水市中心医院新内科楼开诊，其建设和运行，既延续以往的精细化管理理念，同时融入更具创新性的方式和方法。</p>
                 <p>正因如此，此次研修班借鉴“解剖麻雀”的研究方法，全方位了解丽水市中心医院的行政管理、质量管理、效率管理、环境管理、患者体验管理等，推出授课、参观、定向交流三种学习方式，深入洞察一个个精细化管理案例。</p>
                 <p>会议时间：2021年10月22日-24日，期待全国广大志在探索医院精细化管理，以及推进公立医院高质量发展的医院中高层管理者参会交流。</p>
             </div>
         </div>
     )
 }
 
 export default ConferenceIntroduction;