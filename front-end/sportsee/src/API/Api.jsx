
class API {
  constructor() {
    this.baseApi = 'http://localhost:3100/user'
  }


  responseHandler = async res => {
    const response = await res.json()
    if (res.status >= 200 && res.status <= 300) {
      return await response
    }
    if (res.status > 300 && res.status < 400) {
      return await response
    }
    if (res.status > 400 && res.status < 600) {
      throw await response
    }
  }


  get = async (api) => {
    const res = await fetch(`${this.baseApi}/${api}`)
    return await this.responseHandler(res)
  }

  post = async (api, body) => {
    try {
      const res = fetch(`${this.baseApi}/${api}`, {
        method: "POST",
        body: JSON.stringify(body),
      })
      return res
    } catch (err) {
      console.error(err)
    }
  }

  patch = async (api, body) => {
    try {
      const res = fetch(`${this.baseApi}/${api}`, {
        method: "PATCH",
        body: JSON.stringify(body),
      })
      return res
    } catch (err) {
      console.error(err)
    }
  }

  delete = async api => {
    try {
      const res = await fetch(`${this.baseApi}/${api}`, {
        method: "DELETE"
      })
      return await res.json()
    } catch (err) {
      console.error(err)
    }
  }
}

export default API
