import ApiService from './api.service'

const ServiService = {

  getServis: async function(url) {
    try {
      const response = await ApiService.get(url)
      return response
    } catch (error) {
      console.log(error)
    }
  },

  deleteServi: async function(url) {
    try {
      const response = await ApiService.delete(url)
      return response
    } catch (error) {
      console.log(error)
    }
  },

  storeServi: async function(data) {
    try {
      const response = await ApiService.post('/Servis', data)
      return response
    } catch (error) {
      throw error
    }
  },

  updateServi: async function(id, data) {
    try {
      const response = await ApiService.put(`materials/${id}`, data)
      return response
    } catch (error) {
      throw error
    }
  },
}

export default ServiService