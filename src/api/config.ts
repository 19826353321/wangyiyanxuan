import axios from 'axios';

export const baseURL = "http://localhost:3001";
//axios的实例及拦截设置
const axiosInstance = axios.create({
    baseURL
})

//响应时 
axiosInstance.interceptors.response.use(
    res=>res.data,
    err=>{
        console.log(err,'网络错误');   
    }
)

export { axiosInstance }