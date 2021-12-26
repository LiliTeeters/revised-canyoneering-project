const BASE_URL = "http://localhost:8000/canyons/"


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

  const addToUserFavorites = async(userID, canyonID)=>{
    const url = BASE_URL + `canyons/${canyonID}/`
    const init = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userID)
    }
    return await tryCatchFetch(url,init)
  
  }

// ------------------------------User Functions -----------
  const login = (userObject) => {
    console.log(userObject)
    return fetch('http://localhost:8000/token-auth/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userObject)
    }).then(res => res)
  };
  
  const getLoggedInUser = (token) => {
    return fetch('http://localhost:8000/canyons/current_user/', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `JWT ${token}`
      }
    }).then(res => res)
  };
  
  const signupUser = (userObject) => {
    return fetch('http://localhost:8000/canyons/users/', {
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
    login, 
    getLoggedInUser, 
    signupUser,
    addToUserFavorites,
  }
  
  export default exportItems

