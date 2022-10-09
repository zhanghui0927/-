import Mock from "mockjs";

// 直播课
import liveStream1 from '../src/static/images/tubeTrain/live-stream-1.jpg';
import liveStream2 from '../src/static/images/tubeTrain/live-stream-2.jpg';
import liveStream3 from '../src/static/images/tubeTrain/live-stream-3.jpg';
import liveStream4 from '../src/static/images/tubeTrain/live-stream-4.jpg';
import liveStream5 from '../src/static/images/tubeTrain/live-stream-5.jpg';

// 系列课
import seriesClass1 from '../src/static/images/tubeTrain/series-class1.jpg';
import seriesClass2 from '../src/static/images/tubeTrain/series-class2.jpg';
import seriesClass3 from '../src/static/images/tubeTrain/series-class3.jpg';
import seriesClass4 from '../src/static/images/tubeTrain/series-class4.jpg';
import seriesClass5 from '../src/static/images/tubeTrain/series-class5.jpg';
import seriesClass6 from '../src/static/images/tubeTrain/series-class6.png';
import seriesClass7 from '../src/static/images/tubeTrain/series-class7.png';
import seriesClass8 from '../src/static/images/tubeTrain/series-class8.png';
import seriesClass9 from '../src/static/images/tubeTrain/series-class9.jpg';
import seriesClass10 from '../src/static/images/tubeTrain/series-class10.jpg';

// 疫情之下
import epidemic1 from '../src/static/images/tubeTrain/epidemic1.jpg';
import epidemic2 from '../src/static/images/tubeTrain/epidemic2.jpg';
import epidemic3 from '../src/static/images/tubeTrain/epidemic3.jpg';
import epidemic4 from '../src/static/images/tubeTrain/epidemic4.jpg';
import epidemic5 from '../src/static/images/tubeTrain/epidemic5.jpg';
import epidemic6 from '../src/static/images/tubeTrain/epidemic6.jpg';
import epidemic7 from '../src/static/images/tubeTrain/epidemic7.jpg';
import epidemic8 from '../src/static/images/tubeTrain/epidemic8.jpg';
import epidemic9 from '../src/static/images/tubeTrain/epidemic9.jpg';
import epidemic10 from '../src/static/images/tubeTrain/epidemic10.jpg';

// 现代医院
import modernHospital1 from '../src/static/images/tubeTrain/modern-hospital1.jpg';
import modernHospital2 from '../src/static/images/tubeTrain/modern-hospital2.jpg';
import modernHospital3 from '../src/static/images/tubeTrain/modern-hospital3.jpg';
import modernHospital4 from '../src/static/images/tubeTrain/modern-hospital4.jpg';
import modernHospital5 from '../src/static/images/tubeTrain/modern-hospital5.jpg';

// 直播详情

import liveStreamDetail2 from '../src/static/images/tubeTrain/live-streamDetail2.jpg';
import liveStreamDetail3 from '../src/static/images/tubeTrain/live-streamDetail3.jpg';


// 获取直播课列表
export const getLiveStream = Mock.mock("/getLiveStream",{
    "data":[
        {
            id: 1,
            img: liveStream1,
            liveName: '新形势下病区医院感染管理工作',
            date: '2022-03-17',
            timePart: '19:00-20:00',
            watchFrequency: '3.1万人观看'
        },
        {
            id: 2,
            img: liveStream2,
            liveName: '理所当然：《肿瘤分子诊断标志物典型应用案例集》研讨会',
            date: '2022-03-17',
            timePart: '18:00-20:30',
            watchFrequency: '1.2万人观看'
        },
        {
            id: 3,
            img: liveStream3,
            liveName: '血液大咖谈-血友病骨骼肌肉系统并发症评估和康复治疗',
            date: '2022-03-17',
            timePart: '19:30-18:00',
            watchFrequency: '9653人观看'
        },
        {
            id: 4,
            img: liveStream4,
            liveName: '《连线CIO》第48期：专科医院信息化建设启示',
            date: '2022-03-17',
            timePart: '16:00-17:00',
            watchFrequency: '4258人观看'
        },
        {
            id: 5,
            img: liveStream5,
            liveName: '县域健康大咖播92|全国县域医共体高质量发展系列直播-洒洒水是的是的所多所多所多所阿萨撒撒撒',
            date: '2022-03-17',
            timePart: '14:00-16:30',
            watchFrequency: '1.2万人观看'
        },
    ]
})

// 获取系列课列表
export const getSeriesClass = Mock.mock("/getSeriesClass",{
    "data":[
        {
            id: 1,
            img: seriesClass1,
            liveName: '“平疫结合”新常态下的院感防控系列直播',
        },
        {
            id: 2,
            img: seriesClass2,
            liveName: '2022中国医师呼吸影像专业能力提升计划之二 胸部疾病MDT实力时间段是的是的是的是的所多',
        },
        {
            id: 3,
            img: seriesClass3,
            liveName: '2020版医院评审标准全面解读',
        },
        {
            id: 4,
            img: seriesClass4,
            liveName: '如何玩转“智慧医疗”？',
        },
        {
            id: 5,
            img: seriesClass5,
            liveName: 'CNIT创新周话--打通医学创新转化“最初一公里”',
        },
        {
            id: 6,
            img: seriesClass6,
            liveName: '备战“国考”，一飞冲天',
        },
        {
            id: 7,
            img: seriesClass7,
            liveName: '医院专科能力提升计划',
        },
        {
            id: 8,
            img: seriesClass8,
            liveName: '现代医院运营管理之道',
        },
        {
            id: 9,
            img: seriesClass9,
            liveName: '脆性骨折规范管理中心系列学术活动',
        },
        {
            id: 10,
            img: seriesClass10,
            liveName: '“集采”来袭，会带来怎么的变革？',
        },
    ]
})


// 获取疫情之下列表
export const getEpidemicList = Mock.mock("/getEpidemicList",{
    "data":[
        {
            id: 1,
            img: epidemic1,
            epidemicName: '感控大咖解读：如何做好新冠肺炎防控？',
            learn: '9766人加入学习·5课时',
            free: '免费',
        },
        {
            id: 2,
            img: epidemic2,
            epidemicName: '感控大咖解读：如何做好新冠肺炎防控？',
            learn: '9766人加入学习·5课时',
            free: '免费',
        },
        {
            id: 3,
            img: epidemic3,
            epidemicName: '感控大咖解读：如何做好新冠肺炎防控？',
            learn: '9766人加入学习·5课时',
            free: '免费',
        },
        {
            id: 4,
            img: epidemic4,
            epidemicName: '感控大咖解读：如何做好新冠肺炎防控？',
            learn: '9766人加入学习·5课时',
            free: '免费',
        },
        {
            id: 5,
            img: epidemic5,
            epidemicName: '感控大咖解读：如何做好新冠肺炎防控？',
            learn: '9766人加入学习·5课时',
            free: '免费',
        },
        {
            id: 6,
            img: epidemic6,
            epidemicName: '感控大咖解读：如何做好新冠肺炎防控？',
            learn: '9766人加入学习·5课时',
            free: '免费',
        },
        {
            id: 7,
            img: epidemic7,
            epidemicName: '感控大咖解读：如何做好新冠肺炎防控？',
            learn: '9766人加入学习·5课时',
            free: '免费',
        },
        {
            id: 8,
            img: epidemic8,
            epidemicName: '感控大咖解读：如何做好新冠肺炎防控？',
            learn: '9766人加入学习·5课时',
            free: '免费',
        },
        {
            id: 9,
            img: epidemic9,
            epidemicName: '感控大咖解读：如何做好新冠肺炎防控？',
            learn: '9766人加入学习·5课时',
            free: '免费',
        },
        {
            id: 10,
            img: epidemic10,
            epidemicName: '感控大咖解读：如何做好新冠肺炎防控？',
            learn: '9766人加入学习·5课时',
            free: '￥29',
        },
    ]
})


// 获取现代医院列表
export const getModernHospital = Mock.mock("/getModernHospital",{
    "data":[
        {
            id: 1,
            img: modernHospital1,
            name: '现代医院运营管理探索实践',
            learn: '1.3万人加入学习 · 5课时',
            free: '￥99',
        },
        {
            id: 2,
            img: modernHospital2,
            name: '现代医院运营管理探索实践',
            learn: '1.3万人加入学习 · 5课时',
            free: '￥99',
        },
        {
            id: 3,
            img: modernHospital3,
            name: '现代医院运营管理探索实践',
            learn: '1.3万人加入学习 · 5课时',
            free: '￥99',
        },
        {
            id: 4,
            img: modernHospital4,
            name: '现代医院运营管理探索实践',
            learn: '1.3万人加入学习 · 5课时',
            free: '￥99',
        },
        {
            id: 5,
            img: modernHospital5,
            name: '现代医院运营管理探索实践',
            learn: '1.3万人加入学习 · 5课时',
            free: '￥99',
        },
    ]
})


// 获取现代医院列表
export const getLiveStreamDetail = Mock.mock("/getLiveStreamDetail",{
    "data":[
        {
            id: 1,
            img: liveStreamDetail2,
            name: '《三级医院评审标准（2020版）》解读-医院感染管理持续改进',
            learn: '550人加入学习 · 4课时',
        },
        {
            id: 2,
            img: liveStreamDetail3,
            name: '疫情之下的急诊管理',
            learn: '23243人加入学习 · 1课时',
        },
    ]
})