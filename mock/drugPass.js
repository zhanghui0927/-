const Mock = require('mockjs');

import cold from '../src/static/images/drugPass/999-cold.jpg';
import paracetamolXanthamine from '../src/static/images/drugPass/paracetamol-xanthamine.jpg';
import littleCrack from '../src/static/images/drugPass/little-crack.jpg';

// 获取药品分类数据
export const getDrugClassification = Mock.mock("/getDrugClassification",{
    "data":[
        {
            id: 1,
            name: "中西药品",
            icon: "chineseAndWestern"
        },
        {
            id: 2,
            name: "常用药品",
            icon: "medicineChest"
        },
        {
            id: 3,
            name: "养生保健",
            icon: "medicalInsurance"
        },
        {
            id: 4,
            name: "医疗器械",
            icon: "temperature"
        },
        {
            id: 5,
            name: "男科健康",
            icon: "andrology"
        },
        {
            id: 6,
            name: "母婴专区",
            icon: "motherBaby"
        },
        {
            id: 7,
            name: "中老年健康",
            icon: "elderly"
        },
    ]
})


// 获取药品分类详情数据
export const getDrugDetails = Mock.mock("/getDrugDetails",{
    "data":[
        {
            id: 1,
            drugName: "男科用药",
            children: [
                {
                    id: 1,
                    diseaseName: "补肾生精"
                },
                {
                    id: 2,
                    diseaseName: "阳痿早泄"
                },
                {
                    id: 3,
                    diseaseName: "男性脱发"
                },
                {
                    id: 4,
                    diseaseName: "前列腺炎"
                },
            ]
        },
        {
            id: 2,
            drugName: "心脑血管疾病",
            children: [
                {
                    id: 1,
                    diseaseName: "高血压血脂"
                },
                {
                    id: 2,
                    diseaseName: "冠心病"
                },
                {
                    id: 3,
                    diseaseName: "脑血栓"
                },
                {
                    id: 4,
                    diseaseName: "心绞痛"
                },
                {
                    id: 5,
                    diseaseName: "心肌梗塞"
                },
            ]
        },
        {
            id: 3,
            drugName: "肝胆用药",
            children: [
                {
                    id: 1,
                    diseaseName: "乙型肝炎"
                },
                {
                    id: 2,
                    diseaseName: "肝纤维化"
                },
                {
                    id: 3,
                    diseaseName: "肝损伤"
                },
                {
                    id: 4,
                    diseaseName: "脂肪肝/肝硬化"
                },
            ]
        },
        {
            id: 4,
            drugName: "儿科用药",
            children: [
                {
                    id: 1,
                    diseaseName: "小儿感冒发烧"
                },
                {
                    id: 2,
                    diseaseName: "小儿支气管炎"
                },
                {
                    id: 3,
                    diseaseName: "小儿厌食"
                },
                {
                    id: 4,
                    diseaseName: "小儿腹泻"
                },
            ]
        },
        {
            id: 5,
            drugName: "皮肤用药",
            children: [
                {
                    id: 1,
                    diseaseName: "银屑病"
                },
                {
                    id: 2,
                    diseaseName: "白癜风"
                },
                {
                    id: 3,
                    diseaseName: "疤痕"
                },
                {
                    id: 4,
                    diseaseName: "痔疮"
                },
                {
                    id: 5,
                    diseaseName: "皮炎湿疹"
                },
            ]
        },
        {
            id: 6,
            drugName: "皮肤用药",
            children: [
                {
                    id: 1,
                    diseaseName: "银屑病"
                },
                {
                    id: 2,
                    diseaseName: "白癜风"
                },
                {
                    id: 3,
                    diseaseName: "疤痕"
                },
                {
                    id: 4,
                    diseaseName: "痔疮"
                },
                {
                    id: 5,
                    diseaseName: "皮炎湿疹"
                },
            ]
        },
        {
            id: 7,
            drugName: "皮肤用药",
            children: [
                {
                    id: 1,
                    diseaseName: "银屑病"
                },
                {
                    id: 2,
                    diseaseName: "白癜风"
                },
                {
                    id: 3,
                    diseaseName: "疤痕"
                },
                {
                    id: 4,
                    diseaseName: "痔疮"
                },
                {
                    id: 5,
                    diseaseName: "皮炎湿疹"
                },
            ]
        },
        {
            id: 8,
            drugName: "皮肤用药",
            children: [
                {
                    id: 1,
                    diseaseName: "银屑病"
                },
                {
                    id: 2,
                    diseaseName: "白癜风"
                },
                {
                    id: 3,
                    diseaseName: "疤痕"
                },
                {
                    id: 4,
                    diseaseName: "痔疮"
                },
                {
                    id: 5,
                    diseaseName: "皮炎湿疹"
                },
            ]
        },
        {
            id: 9,
            drugName: "皮肤用药",
            children: [
                {
                    id: 1,
                    diseaseName: "银屑病"
                },
                {
                    id: 2,
                    diseaseName: "白癜风"
                },
                {
                    id: 3,
                    diseaseName: "疤痕"
                },
                {
                    id: 4,
                    diseaseName: "痔疮"
                },
                {
                    id: 5,
                    diseaseName: "皮炎湿疹"
                },
            ]
        },
        {
            id: 10,
            drugName: "皮肤用药",
            children: [
                {
                    id: 1,
                    diseaseName: "银屑病"
                },
                {
                    id: 2,
                    diseaseName: "白癜风"
                },
                {
                    id: 3,
                    diseaseName: "疤痕"
                },
                {
                    id: 4,
                    diseaseName: "痔疮"
                },
                {
                    id: 5,
                    diseaseName: "皮炎湿疹"
                },
            ]
        },
        {
            id: 11,
            drugName: "皮肤用药",
            children: [
                {
                    id: 1,
                    diseaseName: "银屑病"
                },
                {
                    id: 2,
                    diseaseName: "白癜风"
                },
                {
                    id: 3,
                    diseaseName: "疤痕"
                },
                {
                    id: 4,
                    diseaseName: "痔疮"
                },
                {
                    id: 5,
                    diseaseName: "皮炎湿疹"
                },
            ]
        },
        {
            id: 12,
            drugName: "皮肤用药",
            children: [
                {
                    id: 1,
                    diseaseName: "银屑病"
                },
                {
                    id: 2,
                    diseaseName: "白癜风"
                },
                {
                    id: 3,
                    diseaseName: "疤痕"
                },
                {
                    id: 4,
                    diseaseName: "痔疮"
                },
                {
                    id: 5,
                    diseaseName: "皮炎湿疹"
                },
            ]
        },
        {
            id: 13,
            drugName: "皮肤用药",
            children: [
                {
                    id: 1,
                    diseaseName: "银屑病"
                },
                {
                    id: 2,
                    diseaseName: "白癜风"
                },
                {
                    id: 3,
                    diseaseName: "疤痕"
                },
                {
                    id: 4,
                    diseaseName: "痔疮"
                },
                {
                    id: 5,
                    diseaseName: "皮炎湿疹"
                },
            ]
        },
    ]
})


// 获取药品详情疾病分类
export const getDiseaseDetails = Mock.mock("/getDiseaseDetails", {
    "data": [
        {
            id: 1,
            name: '不限',
        },
        {
            id: 2,
            name: '智齿',
        },
        {
            id: 3,
            name: '偏头痛',
        },
        {
            id: 4,
            name: '咽喉炎',
        },
        {
            id: 5,
            name: '痛经',
        },
        {
            id: 6,
            name: '风湿性关节炎',
        },
        {
            id: 7,
            name: '小儿发烧',
        },
        {
            id: 8,
            name: '痰热咳嗽',
        },
        {
            id: 9,
            name: '伤风',
        },
        {
            id: 10,
            name: '风热头痛',
        },
        {
            id: 11,
            name: '风热感冒',
        },
        {
            id: 12,
            name: '风热犯肺',
        },
    ]
})

// 获取药品详情疾病分类
export const getBrandDetails = Mock.mock("/getBrandDetails", {
    "data": [
        {
            id: 1,
            name: '不限',
        },
        {
            id: 2,
            name: '益佰',
        },
        {
            id: 3,
            name: '神苗',
        },
        {
            id: 4,
            name: '白云山',
        },
        {
            id: 5,
            name: '万通',
        },
        {
            id: 6,
            name: 'cspc',
        },
        {
            id: 7,
            name: '青龙',
        },
        {
            id: 8,
            name: '历史',
        },
        {
            id: 9,
            name: '特一',
        },
        {
            id: 10,
            name: '必理通',
        },
        {
            id: 11,
            name: '北京同仁堂',
        },
        {
            id: 12,
            name: '护彤',
        },
        {
            id: 13,
            name: '辅仁',
        },
        {
            id: 14,
            name: '修正',
        },
    ]
})


// 获取999感冒灵详情数据
export const getColdDetails = Mock.mock("/getColdDetails", {
    "data": [
        {
            id: 1,
            img: cold,
            drugName: '999小儿感冒颗粒',
            productionPlace: '华润三九(枣庄)药业有限公司',
            describe: '疏风解表，清热解毒。用于小儿风热感冒，症见发热、头胀痛、咳嗽痰黏、咽喉胀痛；流感见上述证后候者。',
        },
        {
            id: 2,
            img: paracetamolXanthamine,
            drugName: '999小儿感冒颗粒',
            productionPlace: '华润三九(枣庄)药业有限公司',
            describe: '疏风解表，清热解毒。用于小儿风热感冒，症见发热、头胀痛、咳嗽痰黏、咽喉胀痛；流感见上述证后候者。',
        },
        {
            id: 3,
            img: littleCrack,
            drugName: '999小儿感冒颗粒',
            productionPlace: '华润三九(枣庄)药业有限公司',
            describe: '疏风解表，清热解毒。用于小儿风热感冒，症见发热、头胀痛、咳嗽痰黏、咽喉胀痛；流感见上述证后候者。',
        },
    ]
})


// 获取症状列表
export const getSymptomData = Mock.mock("/getSymptomData", {
    "data": [
        {
            id: 1,
            symptomName: '老年男性性功能障碍',
            drugQuantity: '(49种药品)',
        },
        {
            id: 2,
            symptomName: '淋病合并症前列腺炎',
            drugQuantity: '(299种药品)',
        },
        {
            id: 3,
            symptomName: '包皮龟头炎',
            drugQuantity: '(399种药品)',
        },
        {
            id: 4,
            symptomName: '前列腺增生',
            drugQuantity: '(649种药品)',
        },
        {
            id: 5,
            symptomName: '老年人前列腺增生症',
            drugQuantity: '(359种药品)',
        },
        {
            id: 6,
            symptomName: '性功能障碍',
            drugQuantity: '(1537种药品)',
        },
        {
            id: 7,
            symptomName: '老年男性性功能障碍',
            drugQuantity: '(49种药品)',
        },
        {
            id: 8,
            symptomName: '阳痿',
            drugQuantity: '(761种药品)',
        },
        {
            id: 9,
            symptomName: '早泄',
            drugQuantity: '(515种药品)',
        },
        {
            id: 10,
            symptomName: '不育症',
            drugQuantity: '(216种药品)',
        },
        {
            id: 11,
            symptomName: '男性不育症',
            drugQuantity: '(169种药品)',
        },
        {
            id: 12,
            symptomName: '男性更年期综合症',
            drugQuantity: '(302种药品)',
        },
        {
            id: 13,
            symptomName: '非淋性前列腺炎',
            drugQuantity: '(84种药品)',
        },
        {
            id: 14,
            symptomName: '勃起功能障碍',
            drugQuantity: '(62种药品)',
        },
        {
            id: 15,
            symptomName: '细菌性前列腺炎',
            drugQuantity: '(1140种药品)',
        },
        {
            id: 16,
            symptomName: '细菌性前列腺炎',
            drugQuantity: '(1140种药品)',
        },
        {
            id: 17,
            symptomName: '细菌性前列腺炎',
            drugQuantity: '(1140种药品)',
        },
        {
            id: 18,
            symptomName: '细菌性前列腺炎',
            drugQuantity: '(1140种药品)',
        },
        {
            id: 19,
            symptomName: '非细菌性前列腺炎',
            drugQuantity: '(13种药品)',
        },
        {
            id: 20,
            symptomName: '淋病',
            drugQuantity: '(8154种药品)',
        },
        {
            id: 21,
            symptomName: '淋病合并症精囊炎',
            drugQuantity: '(5种药品)',
        },
        {
            id: 22,
            symptomName: '特异性前列腺炎',
            drugQuantity: '(83种药品)',
        },
        {
            id: 23,
            symptomName: '前列腺炎',
            drugQuantity: '(5654种药品)',
        },
        {
            id: 24,
            symptomName: '无精症',
            drugQuantity: '(8种药品)',
        },
        {
            id: 25,
            symptomName: '细菌性前列腺炎',
            drugQuantity: '(1140种药品)',
        },
        {
            id: 26,
            symptomName: '慢性细菌性前列腺炎',
            drugQuantity: '(151种药品)',
        },
        {
            id: 27,
            symptomName: '小阴茎',
            drugQuantity: '(8种药品)',
        },
        {
            id: 28,
            symptomName: '附睾炎',
            drugQuantity: '(1014种药品)',
        },
        {
            id: 29,
            symptomName: '急性附睾炎',
            drugQuantity: '(208种药品)',
        },
        {
            id: 30,
            symptomName: '附睾炎',
            drugQuantity: '(1014种药品)',
        },
        {
            id: 31,
            symptomName: '急性附睾炎',
            drugQuantity: '(208种药品)',
        },
        {
            id: 32,
            symptomName: '附睾炎',
            drugQuantity: '(1014种药品)',
        },
        {
            id: 33,
            symptomName: '急性附睾炎',
            drugQuantity: '(208种药品)',
        },
        {
            id: 34,
            symptomName: '精液不液化',
            drugQuantity: '(6种药品)',
        },
        {
            id: 35,
            symptomName: '射精功能障碍',
            drugQuantity: '(7种药品)',
        },
        {
            id: 36,
            symptomName: '少精子症',
            drugQuantity: '(21种药品)',
        },
        {
            id: 37,
            symptomName: '死精症',
            drugQuantity: '(8种药品)',
        },
        {
            id: 38,
            symptomName: '精索静脉曲张',
            drugQuantity: '(13种药品)',
        },
    ]
})