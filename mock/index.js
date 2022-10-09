import axios from "axios"

export const ajaxAxios = (url) => {
    return axios.get(url, { //这列的url与mock.js文件里的地址一致
        dataType:'json'
    }).then(res => {
        return res.data;
    })
}