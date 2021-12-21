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
// ------------------------------User Functions -----------
  const login = (userObject) => {
    return fetch('http://localhost:8000/token-auth/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userObject)
    }).then(res => res)
  };
  
  const getLoggedInUser = (token) => {
    return fetch('http://localhost:8000/api/canyons/current_user/', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `JWT ${token}`
      }
    }).then(res => res)
  };
  
  const signupUser = (userObject) => {
    return fetch('http://localhost:8000/api/canyons/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userObject)
    }).then(res => res)
  };
    
  
  const exportItems = {
    fetchCanyons,
    fetchCanyonByID,
    fetchUserByID,
    fetchUsers,
    login, 
    getLoggedInUser, 
    signupUser
  }
  
  export default exportItems

