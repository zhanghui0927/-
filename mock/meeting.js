const Mock = require('mockjs');

import timeLine1 from '../src/static/images/meeting/timeLine1.jpg';
import timeLine2 from '../src/static/images/meeting/timeLine2.jpg';
import timeLine3 from '../src/static/images/meeting/timeLine3.jpg';
import timeLine4 from '../src/static/images/meeting/timeLine4.jpg';
import timeLine5 from '../src/static/images/meeting/timeLine5.jpg';
import timeLine6 from '../src/static/images/meeting/timeLine6.jpg';
import timeLine7 from '../src/static/images/meeting/timeLine7.png';

const Random = Mock.Random;

export const getHealth = Mock.mock("/getMeeting",{
	"data":[
        {
            "id": 1,
            "name": "丽水市中心医院教学楼五楼学术报告厅",
            "time": '2021.10.22-24',
            "contentName": "赢在精细——公立医院高质量发展之管理创新研修班",
            "content": "众所周知，今年6月，国务院办公厅出台的《关于推动公立医院高质量发展的意见》要求，强化体系创新、技术创新、模式创新、管理创新，促进“公立医院发展方式从规模扩张转向提质增效，运行模式从粗放管理转向精细化管理。”其实，这并非国家医疗健康政策首次倡导“精细化...",
            "img": timeLine1
        },
        {
            "id": 2,
            "name": "北京协和学术礼堂",
            "time": '2021.7.3-4',
            "contentName": "北京协和心脏年会",
            "content": "",
            "img": timeLine2
        },
        {
            "id": 3,
            "name": "北京协和学术礼堂",
            "time": '2021.7.3-4',
            "contentName": "北京协和心脏年会——继教论坛",
            "content": "",
            "img": timeLine3
        },
        {
            "id": 4,
            "name": "@cword(10)",
            "time": Random.datetime("yyyy-MM-dd"),
            "contentName": "@cword(10)",
            "content": "@cword(60)",
            "img": timeLine4
        },
        {
            "id": 5,
            "name": "成都锦江宾馆",
            "time": '2021.7.2-3',
            "contentName": "2021天府国际脑科学大会",
            "content": "",
            "img": timeLine5
        },
        {
            "id": 6,
            "name": "四川锦江宾馆",
            "time": ' 2021.6.19-20',
            "contentName": "创新引领高质量发展 公立医院创新管理与高质量发展暨四川省医学科学院...",
            "content": "时代奔涌处，总有一些踏浪而行的创制。当中华大地再次焕发深厚的创新禀赋，高质量发展，成为这个时代发展的最强音。制度的新生到发展的跨越，串联起各行各业的前行进程，医疗行业同样在高质量发展道路上深入与厉行。深刻认识医疗行业发展环境面临的深刻变化，公立医院作...",
            "img": timeLine6
        },
        {
            "id": 7,
            "name": "上海富悦大酒店",
            "time": '2021.6.5-6',
            "contentName": "新联动·新融合·新发展 2021长三角医院联盟高峰论坛",
            "content": "新联动·新融合·新发展 2021长三角医院联盟高峰论坛这是一段把握机遇的航程！一纸《长江三角洲区域一体化发展规划纲要》，令一个区域坚定“高质量”“一体化”的发展道路。长三角作为我国经济发展最活跃、开放程度最高、创新能力最强的区域，承担着率先形成新发展格局的重要使命！为顺应长三角区域一体化趋势，谋求区域医...",
            "img": timeLine7
        },
        {
            "id": 8,
            "name": "北京国际会议中心",
            "time": '2021.5.17-2',
            "contentName": "2021健康界峰会暨北京协和医院建院百年学术活动百年辉煌路 健康新...",
            "content": "2021年，一个至关重要的年度。这一年，带领中国人民站起来、富起来、强起来的中国共产党迎来100岁华诞，并正继续带领全党全国各族人民砥砺前行、开拓创新，推进中华民族伟大复兴，向实现第二个百年奋斗目",
            "img": timeLine7
        },
    ]
})



export const getMeetTime = Mock.mock("/getMeetTime",{
	"data":[
        {
            id: 1,
            name: '首页'
        },
        {
            id: 2,
            name: '会议简介'
        },
        {
            id: 3,
            name: '会议日程'
        },
        {
            id: 4,
            name: '会议嘉宾'
        },
        {
            id: 5,
            name: '组织架构'
        },
        {
            id: 6,
            name: '参会指南'
        },
    ]
})


export const getMeetDetails = Mock.mock("/getMeetDetails",{
	"data":[
        {
            id: 1,
            time: '8:30-8:40',
            content: '领导致辞'
        },
        {
            id: 2,
            time: '8:40-8:50',
            content: '《赢在精细》新书发布会'
        },
        {
            id: 3,
            time: '08:50-09:40',
            content: '丽水市中心医院精细化管理“全景图”'
        },
        {
            id: 4,
            time: '09:40-09:50',
            content: '茶歇'
        },
        {
            id: 5,
            time: '09:50-11:40',
            content: '建设“重要窗口”的方法与体会'
        },
        {
            id: 6,
            time: '10:40-11:40',
            content: '医院干部精细化管理——提升医院管理的顺从性'
        },
        {
            id: 7,
            time: '11:40-12:00',
            content: '“智慧医院”建设新趋势'
        },
        {
            id: 8,
            time: '12:00-13:00',
            content: '午餐-丽水市中心医院食堂2楼'
        },
    ]
})