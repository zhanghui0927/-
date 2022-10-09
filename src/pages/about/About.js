/**
 * 关于我们
 */
import React from 'react';

import aboutUsIndex from '../../static/images/about/about-us-index.jpg';
import QRCode1 from '../../static/images/about/QR-code1.png';
import QRCode2 from '../../static/images/about/QR-code2.png';
import './about.less';

const About = () => {

    return (
        <div className='about'>
            <img className='img' src={aboutUsIndex} />
            <div style={{ height: '51rem' }}>

            </div>
            <div className='about-us'>
                <h1>关于我们</h1>
                <p>“为了更好的医疗健康服务”，是2021年创办的健康界的使命。从创立之始，她就预见到席卷全球的从医疗到健康的融合浪潮，并一直致力于提供“值得信赖医疗健康资讯、产品及服务”。</p>
                <p>在打造“华语医疗智库”的愿景下，多年来，健康界传媒一直与世界顶级的医疗机构保持良好的合作关系。梅奥诊所、克利夫兰医院、纽约长老会医院、法国巴黎公立医院集团、休斯顿卫理公会医院、匹兹堡大学医学中心等都和健康界保持着在资讯、会议、交流密切的联系，致力于追求“优质医疗实践”。</p>
                <p>面对国内越来越多的患者期待能享受到优质、高效的国际医疗与服务，各种海外医疗信息纷繁芜杂、泥沙俱下，既对真正有需求的患者带来选择困难，也遮掩了真正优质国际医疗资源。</p>
                <p>为此，健康界搭建此全球医疗频道，直接和世界上优质的学术医疗中心、医疗系统和面向国际运营的医院进行全方位的战略合作，集聚全球优质的医疗和信息服务，以健康界的公信力和专业性为背书，向真正有需求的患者提供更权威、更诚信的信息，去粗存精，将就医选择权真正交到患者及其家属手中。</p>
                <p>同时，全球医疗频道还构建了从知识、信息到培训、咨询，面向中国优秀的医院和优秀医生全体系的“线上线下的国际医疗服务整合平台”。 医院、科室、医生在这里都可以寻找到适合自己的各类前沿医疗、管理培训、参访项目信息。</p>
                <p>发现优质医疗、见证优质医疗以及将优质医疗推荐给有需要的人，是健康界全球医疗频道的初衷，也是使命。</p>
                <div className='footer-info'>
                    <div className='footer-info-name'>获取更多健康信息</div>
                    <div className='img-div'>
                        <div className='contact-information' id="contact1">
                            <img src={QRCode1} />
                            <div>健康界App</div>
                        </div>
                        <div className='contact-information' id="contact2">
                            <img src={QRCode2} />
                            <div>天下好医</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;