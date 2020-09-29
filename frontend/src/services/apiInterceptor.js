import api from './api'

export default function ApiInterceptor(setAuthenticated) {

    api.interceptors.response.use(response => {
        return response;
    }, error => {
        const response = error.response
        const status = error.response && error.response.status

        console.log('error', error, 'response', response)

        if (!response) {
            return alert('Error')
        }

        if (!!status) {
            if (status === 404) {
                return alert(`Error: ${response.data.message}`)
            }

            if (status === 401) {
                return alert(`Error: ${response.data.message}`)
            }

            if (status === 400) {
                return alert(`Error: ${response.data.message}`)
            }

            if (status !== 400 && status !== 401 && status !== 403) {
                return setAuthenticated(true)
            }
        }
    })
} 