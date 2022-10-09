const Mock = require('mockjs');

// 校招职位
// 获取职能类别
export const getfication = Mock.mock("/getfication",{
    "data":[
        {
            id: 1,
            name: '全部'
        },
        {
            id: 2,
            name: '财务'
        },
        {
            id: 3,
            name: '公关'
        },
        {
            id: 4,
            name: '销售'
        },
        {
            id: 5,
            name: '运营'
        },
        {
            id: 6,
            name: '剪辑'
        },
        {
            id: 7,
            name: '策划'
        },
        {
            id: 8,
            name: '摄像'
        },
        {
            id: 9,
            name: '记者'
        },
        {
            id: 10,
            name: '主持人'
        },
        {
            id: 11,
            name: '产品研发'
        },
        {
            id: 12,
            name: '设计'
        },
        {
            id: 13,
            name: '编程'
        },
    ]
})

// 获取工作地点
export const getWorkPlace = Mock.mock("/getWorkPlace",{
    "data":[
        {
            id: 1,
            address: '全部'
        },
        {
            id: 2,
            address: '北京'
        },
        {
            id: 3,
            address: '上海'
        },
        {
            id: 4,
            address: '天津'
        },
        {
            id: 5,
            address: '浙江-杭州'
        },
        {
            id: 6,
            address: '江西-南京'
        },
        {
            id: 7,
            address: '四川-成都'
        },
        {
            id: 8,
            address: '广州-深圳'
        },
        {
            id: 9,
            address: '湖南-长沙'
        },
    ]
})

// 获取工作年限
export const getworkingYears = Mock.mock("/getworkingYears",{
    "data":[
        {
            id: 1,
            name: '全部'
        },
        {
            id: 2,
            name: '无经验'
        },
    ]
})

// 获取职位
export const getPosition = Mock.mock("/getPosition",{
    "data":[
        {
            id: 1,
            positionName: '内容运营部-新媒体运营（抖音）',
            adress: '北京',
            category: '运营',
            releaseTime: '2021-12-17'
        },
        {
            id: 2,
            positionName: '内容运营部-视频剪辑（抖音、快手）',
            adress: '北京',
            category: '运营',
            releaseTime: '2021-12-16'
        },
        {
            id: 3,
            positionName: '内容运营部-新媒体运营（微博）',
            adress: '北京',
            category: '运营',
            releaseTime: '2021-12-17'
        },
        {
            id: 4,
            positionName: '内容运营部-新媒体运营（微信公众号）',
            adress: '北京',
            category: '运营',
            releaseTime: '2021-12-17'
        },
        {
            id: 5,
            positionName: '内容运营部-新媒体运营（微信）',
            adress: '北京',
            category: '运营',
            releaseTime: '2021-12-16'
        },
        {
            id: 6,
            positionName: '内容运营部-视频剪辑（视频号）',
            adress: '北京',
            category: '运营',
            releaseTime: '2021-12-15'
        },
    ]
})



// 实习生职位
// 获取职能类别
export const getficationIntern = Mock.mock("/getficationIntern",{
    "data":[
        {
            id: 1,
            name: '全部'
        },
        {
            id: 2,
            name: '运营'
        },
        {
            id: 3,
            name: '剪辑'
        },
        {
            id: 4,
            name: '策划'
        },
        {
            id: 5,
            name: '摄像'
        },
        {
            id: 6,
            name: '设计'
        },
    ]
})

// 获取工作地点
export const getWorkPlaceIntern = Mock.mock("/getWorkPlaceIntern",{
    "data":[
        {
            id: 1,
            address: '全部'
        },
        {
            id: 2,
            address: '北京'
        },
        {
            id: 3,
            address: '浙江-杭州'
        },
        {
            id: 4,
            address: '江西-南京'
        },
        {
            id: 5,
            address: '湖南-长沙'
        },
    ]
})

// 获取职位
export const getPositionIntern = Mock.mock("/getPositionIntern",{
    "data":[
        {
            id: 1,
            positionName: '内容运营部-新媒体运营（实习生）',
            adress: '湖南-长沙',
            category: '运营',
            releaseTime: '2021-12-17'
        },
        {
            id: 2,
            positionName: '内容运营部-视频剪辑（实习生）',
            adress: '北京',
            category: '运营',
            releaseTime: '2021-12-16'
        },
        {
            id: 3,
            positionName: '内容运营部-新媒体运营（实习生）',
            adress: '浙江-杭州',
            category: '运营',
            releaseTime: '2021-12-16'
        },
        {
            id: 4,
            positionName: '内容运营部-摄影（实习生）',
            adress: '江西-南昌',
            category: '技术',
            releaseTime: '2021-12-17'
        },
        {
            id: 5,
            positionName: '内容运营部-文案策划（实习生）',
            adress: '北京',
            category: '运营',
            releaseTime: '2021-12-16'
        },
        {
            id: 6,
            positionName: '内容运营部-文案策划（实习生）',
            adress: '北京',
            category: '运营',
            releaseTime: '2021-12-15'
        },
    ]
})
