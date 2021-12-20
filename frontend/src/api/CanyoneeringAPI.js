const BASE_URL = "http://localhost:8000/api/"


const tryCatchFetch = async (url, init = null) => {
    try {
      const response = await fetch(url, init)
      if (response.ok) {
        return await response.json()
      }
      else {
        throw new Error(`Bad response: ${response.status} ${response.statusText}`)
      }
    }
    catch (e) {
      console.error(e)
      return null
    }
  }
  
  const fetchCanyons = async () => {
    const url = BASE_URL
    return await tryCatchFetch(url + `canyons/`)
  }
  
  const fetchCanyonByID = async (canyonID) => {
    const url = BASE_URL + `canyons/${canyonID}/`
    return await tryCatchFetch(url)
  }

  const fetchUsers = async () => {
    const url = BASE_URL
    return await tryCatchFetch(url + `canyons/`)
  }
  
  const fetchUserByID = async (userID) => {
    const url = BASE_URL + `canyons/${userID}/`
    return await tryCatchFetch(url)
  }


    
  
  const exportItems = {
    fetchCanyons,
    fetchCanyonByID,
    fetchUserByID,
    fetchUsers,
  }
  
  export default exportItems