/**
 * 企业介绍
 */
import React from 'react';

import comLogo from '../../static/images/companyProfile/com-logo.png';
import herbalife1 from '../../static/images/companyProfile/herbalife1.jpg';
import herbalife2 from '../../static/images/companyProfile/herbalife2.jpg';
import herbalife3 from '../../static/images/companyProfile/herbalife3.jpg';
import herbalife4 from '../../static/images/companyProfile/herbalife4.jpg';
import companyImg from '../../static/images/companyProfile/company-img.jpg';
import './companyProfile.less';

const CompanyProfile = () => {

    return (
        <div className='companyProfile'>
            <div className='content'>
                <div className='header-name'>
                    <img className='img1' src={companyImg} />
                </div>
                <p>健康界创立于2012 年 3 月，是北京华媒康讯信息技术股份有限公司（以下简称“华媒康讯”，新三板代码：872612）旗下的主营品牌，经过长期的探索与沉淀，健康界实现了从单一专业传媒模式拓展到专项化、专科化、社群化、数字化学习管理平台和标准化、数字化、产品化解决方案共享平台。</p>
                <p>健康界立足于面向卫生健康主管部门和医院提供高质量发展重点能力提升解决方案。以线上知识学习管理为主要合作基础， 同时针对重点能力提升提供一体化解决方案，包含公立医院绩效考核、人才培养、质量管理与等级评审、学科评估与建设、医保精细化、薪酬绩效、医学创新等培训、咨询与数字化产品。截止2021年4月，累计814万全网用户。</p>
                <div className='platformService'>
                    <div className='platformService-left'>
                        <h3>一、平台与服务</h3>
                        <img className='platformService-img' src={herbalife2} />
                    </div>
                    <div className='platformService-right'>
                        <div className='informationKnowledge'>
                            <p>（一）海量资讯与知识</p>
                            <img src={herbalife1} />
                        </div>
                        <p>健康界通过文字、图片、视频、音频、漫画、直播、课程、图书等多种载体，提供可信赖的医疗健康资讯与知识。已打造出“院士领航”“决策者说”“临床前线”“健客交锋”“BOSS论健”“对话学科带头人”“连线CIO”等多个颇受用户喜爱的品牌栏目和精品课程。健康界拥有专业创作者/机构3000+，每天生产资讯400+，年直播会议800+，现有课程4000+、案例12000+、文档5000+、电子书600+。</p>
                    </div>
                </div>
                <div className='learning'>
                    <div>
                        <p>（二）在线学习服务</p>
                        <p>健康界致力于打造专项化、专科化、社群化、数字化学习管理服务平台。会员学习服务按照不同层级知识体系确定周课主题，以每日督学的方式提供会员知识服务。在线直播、在线课件、在线互动、在线答疑、学习评估、选修必修、分班分组、学习奖励……构建学习型组织，助力医院高质量发展。</p>
                        <p>（三）数据与用户服务</p>
                        <p>基于健康界网站、APP、小程序和WAP端及数据库，构建医健领域个性化获取专业资讯与知识的互联网平台。个人用户和团队用户既是健康界创作者又是资讯和知识消费者，可以实现在线生产和获取资讯和知识的双向切换。基于用户行为数据，可以进行细分用户精准服务，在健康界公域平台上打造私域空间，实现定制团队学习、病例讨论、知识竞赛、系列直播等线上行为管理与数据分析。</p>
                    </div>
                    <img src={herbalife3} />
                </div>
                <div className='conference'>
                    <img src={herbalife4} />
                    <div>
                        <p>（四）O2O会议会展服务</p>
                        <p>集合资源、策划、组织与平台优势，健康界具备完整的线上线下（O2O）组织各类会议会展的综合服务能力。经过9年升级与积淀，健康界已经形成多个会议及评选品牌，如 “健康界峰会”“中国医院临床专科建设与发展论坛”“北斗学院标杆医院学习之旅”“大师面对面”等品牌会议，“改善医疗服务行动全国医院擂台赛”“中国医院管理奖”“中国医学创新大赛”“健康中国行动示范V创新挑战赛”“中国医院品牌专科评选”等品牌评选，“北斗夜话”“抗疫者说”“药有所为”等品牌线上会议。</p>
                        <p>(五)医学非学历职业教育</p>
                        <p>“健康界九风教育”致力为医学人才带来更体系化、更落地、更优质的医学教育产品，为医学从业人员提供职业发展机会。通过现有人才盘点与供需分析，通过体系化、标准化、梯队化建设，为高效组织管理赋能，实现人才培养与发展的良性循环。围绕医院管理人员培养、卫生人才交流（进修）、卫生健康人才学历培训、卫生健康社会服务、继续医学教育、全科医学培训、住院医师规范化培训、网络教育、医学模拟培训与研究、国际人才交流十大工作模块量身定制，已成为多地医学培训项目的政府采购对象。</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyProfile;