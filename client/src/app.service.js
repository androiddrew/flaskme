import axios from 'axios'

axios.defaults.baseURL = process.env.VUE_APP_API_URL

const appService = {
  getPing () {
    return new Promise((resolve, reject) => {
      axios.get('/ping')
        .then(response => {
          resolve(response.data)
        })
        .catch(error => {
          reject(error.status)
        })
    })
  }

}

export default appService
