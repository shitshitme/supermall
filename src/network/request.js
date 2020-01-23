import axios from 'axios'

export function request(config) {
	// 创建axios的实例
	const instance = axios.create({
		baseURL: '',
		timeout: 5000
	})

	// axios的拦截器
	instance.interceptors.request.use(config => {
		return config
	}, err => {
		console.log(err);
	})

	// 响应拦截
	instance.interceptors.response.use(res => {
		return res.data
	}, err => {
		console.log(err);
	})

	return instance(config);
}




