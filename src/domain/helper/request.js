import axios from "axios";

const instance = axios.create({
    baseURL: "/sysware",
    // headers:{
    //     Authorization:'bearer a3423bc9-9c68-4531-bfdd-f5f96d3501d0'
    // }

});

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

/**
 * 
 * @template T
 * @typedef {object} ResponseData
 * @property {number} code - 状态码
 * @property {T} data - 实际数据
 * @property {string} message - 提示信息
 * @property {boolean} success - 是否成功
 */

// 添加响应拦截器
instance.interceptors.response.use(
    /**
     * 成功返回
     * @returns {ResponseData<any>}
     */
  function (response) {
    //   console.log(response)
    // 对响应数据做点什么
    return response.data;
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);


/**
 * Get请求
 * @param {string} url - 接口地址
 * @param {object} params - 参数（json格式）
 * @returns 
 */
export const get = (url,params)=>{
    return instance.get(url,{params})
}

/**
 * Post请求
 * @param {string} url - 接口地址
 * @param {object} data - 参数（json格式）
 * @returns 
 */
export const post = (url,data)=>{
    return instance.post(url,data)
}


