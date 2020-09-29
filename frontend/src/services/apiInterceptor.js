import api from './api'

export default function ApiInterceptor(setAuthenticated) {

    api.interceptors.response.use(response => {
        return response;
    }, error => {
        const response = error.response

        console.log('error', error, 'response', response)

        if (!response) {
            return alert('Error')
        }

        if (response.status === 401) {
            alert(`Error: ${response.data.message}`)
        }

        if (response.status === 400) {
            alert(`Error: ${response.data.message}`)
        }

        if (response.status !== 400 && response.status !== 401 && response.status !== 403) {
            setAuthenticated(true)
        }
    })
} 