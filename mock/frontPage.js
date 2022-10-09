// mock.js
// 使用 Mock
const Mock = require('mockjs')
import healthNumber1 from '../src/static/images/frontPage/health-number1.jpg';
import healthNumber2 from '../src/static/images/frontPage/health-number2.jpg';
import healthNumber3 from '../src/static/images/frontPage/health-number3.jpg';
import healthNumber4 from '../src/static/images/frontPage/health-number4.jpg';
import healthNumber5 from '../src/static/images/frontPage/health-number5.jpg';
import healthNumber6 from '../src/static/images/frontPage/health-number6.jpg';
// var frontPage = Mock.mock("/getFrontPage",{  
//   //"/mock"是通过ajax获取数据时填写的地址，可以随意写。但要和ajax请求时填写的地址一致。
// 	"userinfo|4":[{   			//生成四个如下格式的数据
// 		"id|+1":1, 						//数字从1开始，后续依次加1
// 		"name":"@cname",			//名字为随机中文名
// 		"age|18-28":25, 			//年龄是18-28之间的随机数
// 		"sex|1":["男","女"],	 //性别是数组里的随机一项
// 		"job|1":["web","teacher","python","php"],   //job是数组里的随机一项
//         "goodsFirstCategoryName": "@cword(100)",
// 	}]
// })

// 输出结果
// export default frontPage;


export const frontPage = Mock.mock("/getFrontPage",{
    "userinfo|4":[{
        "id|+1":1,
        "name":"@cname",
        "age|18-28":25,
        "sex|1":["男","女"],
        "job|1":["web","teacher","python","php"],
        "goodsFirstCategoryName": "@cword(100)",
        "aaaaa": "@cparagraph",
    }]
})

export const getHealth = Mock.mock("/getHealth",{
    "data":[
        {
            id: 1,
            name:"健康界锋报",
            focusNo: '4720人关注',
            img: healthNumber1
        },
        {
            id: 2,
            name:"5iRT",
            focusNo: '79人关注',
            img: healthNumber2
        },
        {
            id: 3,
            name:"中科西部细胞",
            focusNo: '100人关注',
            img: healthNumber3
        },
        {
            id: 4,
            name:"肾为先",
            focusNo: '235人关注',
            img: healthNumber4
        },
        {
            id: 5,
            name:"米内网MENET",
            focusNo: '1364人关注',
            img: healthNumber5
        },
        {
            id: 6,
            name:"搜狐健康",
            focusNo: '6.6万人关注',
            img: healthNumber6
        },
    ]
})
