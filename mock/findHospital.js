import Mock from "mockjs";

// 相关医院
import findHospital1 from '../src/static/images/findHospital/findHospital1.jpg';
import findHospital2 from '../src/static/images/findHospital/findHospital2.jpg';
import findHospital3 from '../src/static/images/findHospital/findHospital3.jpg';
import findHospital4 from '../src/static/images/findHospital/findHospital4.jpg';

// 相关医生
import doctor1 from '../src/static/images/findHospital/doctor1.jpg';
import doctor2 from '../src/static/images/findHospital/doctor2.jpg';
import doctor3 from '../src/static/images/findHospital/doctor3.png';
import doctor4 from '../src/static/images/findHospital/doctor4.png';
import doctor5 from '../src/static/images/findHospital/doctor5.png';

// 获取
import consult1 from '../src/static/images/findHospital/consult1.jpg';
import consult2 from '../src/static/images/findHospital/consult2.jpg';
import consult3 from '../src/static/images/findHospital/consult3.jpg';

// 获取类别
export const getCategory = Mock.mock("/getCategory",{
	"data":[
        {
            id: 1,
            name: '国内',
        },
        {
            id: 2,
            name: '国外',
        },
    ]
})

// 获取城市
export const getCity = Mock.mock("/getCity",{
	"data":[
        {
            id: 1,
            name: '全部',
        },
        {
            id: 2,
            name: '北京',
        },
        {
            id: 3,
            name: '上海',
        },
        {
            id: 4,
            name: '广州',
        },
        {
            id: 5,
            name: '天津',
        },
        {
            id: 6,
            name: '长沙',
        },
        {
            id: 7,
            name: '重庆',
        },
        {
            id: 8,
            name: '杭州',
        },
        {
            id: 9,
            name: '武汉',
        },
        {
            id: 10,
            name: '深圳',
        },
    ]
})

// 获取科室
export const getDepartment = Mock.mock("/getDepartment",{
	"data":[
        {
            id: 1,
            name: '神经内科',
        },
        {
            id: 2,
            name: '普通外科',
        },
        {
            id: 3,
            name: '妇产科',
        },
        {
            id: 4,
            name: '风湿科',
        },
        {
            id: 5,
            name: '肿瘤学',
        },
        {
            id: 6,
            name: '胸外科',
        },
        {
            id: 7,
            name: '呼吸科',
        },
        {
            id: 8,
            name: '骨科',
        },
        {
            id: 9,
            name: '口腔科',
        },
        {
            id: 10,
            name: '心血管病',
        },
    ]
})


// 获取相关医院
export const getRelatedHospitals = Mock.mock("/getRelatedHospitals",{
	"data":[
        {
            id: '1',
            img: findHospital1,
            hospitalName: '北京协和医院',
            commentNo: '70350条评论',
            label: [
                {
                    id: '1',
                    name: '三甲',
                },
                {
                    id: '2',
                    name: '综合',
                },
            ],
            address: '地址：北京市东城区帅府园一号',
            symptom: [
                {
                    id: '1',
                    name: '子宫肌瘤'
                },
                {
                    id: '2',
                    name: '卵巢囊肿'
                },
                {
                    id: '3',
                    name: '冠心病'
                },
                {
                    id: '4',
                    name: '子宫内膜异位症'
                },
                {
                    id: '5',
                    name: '红斑狼疮'
                },
            ],
            overallRating: {
                score: 33129,
                rank: '2020年复旦版全国医学综合排名NO.1'
            }
        },
        {
            id: '2',
            img: findHospital2,
            hospitalName: '301医院',
            commentNo: '53637条评论',
            label: [
                {
                    id: '1',
                    name: '三甲',
                },
                {
                    id: '2',
                    name: '综合医院',
                },
                {
                    id: '3',
                    name: '医保定点',
                },
            ],
            address: '地址：北京市海淀区复兴路28号',
            symptom: [
                {
                    id: '1',
                    name: '冠心病'
                },
                {
                    id: '2',
                    name: '肺癌'
                },
                {
                    id: '3',
                    name: '高血压'
                },
                {
                    id: '4',
                    name: '肿瘤'
                },
                {
                    id: '5',
                    name: '胃癌'
                },
            ],
            overallRating: {
                score: 24293,
                rank: '2019年复旦版全国医学综合排名NO.3'
            }
        },
        {
            id: '3',
            img: findHospital3,
            hospitalName: '瑞金医院',
            commentNo: '6523条评论',
            label: [
                {
                    id: '1',
                    name: '三甲',
                },
                {
                    id: '2',
                    name: '医保定点',
                },
            ],
            address: '地址：上海市黄浦区瑞金二路197号',
            symptom: [
                {
                    id: '1',
                    name: '冠心病'
                },
                {
                    id: '2',
                    name: '高血压'
                },
                {
                    id: '3',
                    name: '甲状腺疾病'
                },
                {
                    id: '4',
                    name: '胃癌'
                },
                {
                    id: '5',
                    name: '心脏病'
                },
            ],
            overallRating: {
                score: 18273,
                rank: '2020年复旦版全国医学综合排名NO.5'
            }
        },
        {
            id: '4',
            img: findHospital4,
            hospitalName: '华西医院',
            commentNo: '25614条评论',
            label: [
                {
                    id: '1',
                    name: '三甲',
                },
                {
                    id: '2',
                    name: '综合医院',
                },
            ],
            address: '地址：成都市武侯区国学巷37号',
            symptom: [
                {
                    id: '1',
                    name: '肺癌'
                },
                {
                    id: '2',
                    name: '肿瘤'
                },
                {
                    id: '3',
                    name: '肝癌'
                },
                {
                    id: '4',
                    name: '冠心病'
                },
                {
                    id: '5',
                    name: '糖尿病'
                },
            ],
            overallRating: {
                score: 18096,
                rank: '2020年复旦版全国医学综合排名NO.2'
            }
        },
    ]
})

// 获取相关医生
export const getRelatedDoctors = Mock.mock("/getRelatedDoctors",{
	"data":[
        {
            id: 1,
            img: doctor1,
            name: '郭宏川',
            jobTitle: '主任医师',
            introduction: '首都医科大学宣武医院神经外科'
        },
        {
            id: 2,
            img: doctor5,
            name: '王涛',
            jobTitle: '主任医师,教授',
            introduction: '北京大学第三医院 神经外科'
        },
        {
            id: 3,
            img: doctor3,
            name: '冯世宇',
            jobTitle: '主任医师',
            introduction: '中国人民解放军总医院第一医学中心 神经外科'
        },
        {
            id: 4,
            img: doctor4,
            name: '张凯',
            jobTitle: '主任医师,教授',
            introduction: '首都医科大学附属北京天坛医院 神经外科'
        },
        {
            id: 5,
            img: doctor5,
            name: '毛之奇',
            jobTitle: '主任医师',
            introduction: '中国人民解放军总医院第一医学中心 神经外科'
        },
    ]
})


// 获取
export const getConsult = Mock.mock("/getConsult",{
	"data":[
        {
            id: 1,
            img: consult1,
            name: '名医电话',
            introduce: '一个电话，常见病情，快速诊断',
            reserve: '预约通话',
            topRight: '医生本人电话',
        },
        {
            id: 2,
            img: consult2,
            name: '图文咨询',
            introduce: '名义在线 1对1 疫情交流更清晰',
            reserve: '立即咨询',
            topRight: '在线咨询问疾病',
        },
        {
            id: 3,
            img: consult3,
            name: '预约挂号',
            introduce: '提前了解病情，预约快人一步',
            reserve: '去挂号',
            topRight: '10秒挂号 快速就医',
        },
    ]
})


// 获取回复类别
export const getFilterCategory = Mock.mock("/getFilterCategory",{
	"data":[
        {
            id: 1,
            name: '全部（13）',
        },
        {
            id: 2,
            name: '老年痴呆症（5）',
        },
        {
            id: 3,
            name: '三叉神经痛（4）',
        },
        {
            id: 4,
            name: '面肌痉挛（3）',
        },
        {
            id: 5,
            name: '疼痛（3）',
        },
        {
            id: 6,
            name: '闭经（2）',
        },
        {
            id: 7,
            name: '垂体瘤（2）',
        },
        {
            id: 8,
            name: '高血压（1）',
        },
        {
            id: 9,
            name: '颈椎病（1）',
        },
        {
            id: 10,
            name: '偏头痛（1）',
        },
        {
            id: 11,
            name: '羊水栓塞（1）',
        },
    ]
})



// 获取患友评论
export const getPatientComments = Mock.mock("/getPatientComments",{
	"data":[
        {
            id: 1,
            nickName: '三叉神经疼，',
            comment: '刷牙洗脸都疼，吃饭张嘴，说话着急！不能大喊',
            date: '2022-02-07',
            docter: '回复医生：神经外科-郭宏川'
        },
        {
            id: 2,
            nickName: '三叉神经疼，',
            comment: '刷牙洗脸都疼，吃饭张嘴，说话着急！不能大喊',
            date: '2022-02-07',
            docter: '回复医生：神经外科-郭宏川'
        },
        {
            id: 3,
            nickName: '三叉神经疼，',
            comment: '刷牙洗脸都疼，吃饭张嘴，说话着急！不能大喊',
            date: '2022-02-07',
            docter: '回复医生：神经外科-郭宏川'
        },
    ]
})