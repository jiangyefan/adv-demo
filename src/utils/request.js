import axios from "axios"

export function request(config, success, failure) {
    const instance = axios.create({
        baseURL: 'https://api.apiopen.top',
        timeout: 2500,
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }

    })

    instance.interceptors.request.use(config => {console.log(config); return config}, err => {
        console.log(err);
    })
   return instance(config)
}
