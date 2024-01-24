const BASE_URL = "http://localhost:8000/canyons/"


const tryCatchFetch = async (url, init = null) => {
  try {
    const response = await fetch(url, init)
    if (response.ok) {
      if (response.status !== 204) {
        return await response.json()

      } else {
        return ("Okay")
      }


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

//---------- CANYON FUNCTIONS ------------//
const fetchCanyons = async () => {
  const url = BASE_URL
  return await tryCatchFetch(url + `canyons/`)
}

const fetchCanyonByID = async (canyonID) => {
  const url = BASE_URL + `canyons/${canyonID}/`
  return await tryCatchFetch(url)
}

const addCanyon = async (canyonObj, token) => {
  const url = BASE_URL + 'canyons/'
  const init = {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${token}`
    },
    body: JSON.stringify(canyonObj)
  }
  return await tryCatchFetch(url, init)
}

const deleteCanyon = async (canyonID, token) => {
  const url = BASE_URL + `canyons/${canyonID}/`
  const init = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `JWT ${token}`
    }
  }
  return await tryCatchFetch(url, init)
}

const addFavorite = async (userId, canyonId, token) => {
  const url = `http://localhost:8000/canyons/add_favorite/`;
  const init = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${token}`
    },
    body: JSON.stringify({ userId, canyonId }),
  };
  return await tryCatchFetch(url, init);
};

const fetchUserFavorites = async (userId, token) => {
  const url = `${BASE_URL}favorites/${userId}/`;
  const init = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${token}`
    }
  };
  return await tryCatchFetch(url, init);
};




// ------------------ USER FUNCTIONS -----------//
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
  addCanyon,
  deleteCanyon,
  addFavorite,
  fetchUserFavorites
}

export default exportItems

