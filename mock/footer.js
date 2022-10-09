const Mock = require('mockjs');

export const getHealth = Mock.mock("/getFooter",{
    "data":[
        {
            id: 1,
            name:"招贤纳士",
        },
        {
            id: 2,
            name:"战略合作",
        },
        {
            id: 3,
            name:"品牌荣誉",
        },
        {
            id: 4,
            name:"企业介绍",
        },
        {
            id: 5,
            name:"意见与反馈",
        },
    ]
})