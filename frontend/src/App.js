import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CanyonPage from './pages/CanyonPage';
import  CanyoneeringAPI  from './api/CanyoneeringAPI';
import { useEffect, useState } from 'react';
import UserLoginPage from "./pages/UserLoginPage";
import UserContext from './contexts/UserContext';
import SignupPage from './pages/SignupPage';
import AddCanyonPage from './pages/AddCanyonPage';
import DeleteCanyonPage from './pages/DeleteCanyonPage';

function App() {
  const [canyons] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [ user, setUser ] = useState(null);
  const [error] = useState(null);
  

  // useEffect(() => {
  //   const getCanyons = async() => {
  //   await CanyoneeringAPI.fetchCanyons().then((data) => setCanyons(data))
  //   }
  //   getCanyons()
  // },[])

  useEffect(() => {
    const getUser = async () => {
      if (localStorage.getItem("auth-user") !== 'null') {
        let response = await CanyoneeringAPI.getLoggedInUser(localStorage.getItem("auth-user"));
        let data = await response.json();
        if (data.username) {
          setIsLoggedIn(true);
          setUser(data);
        }
      }
    }
    if (!user) {
      getUser();
    }
  }, [user])

  const handleLogin = async (evt) => {
    evt.preventDefault();
    let userObject = {
      username: evt.target.elements[0].value,
      password: evt.target.elements[1].value,
    }
    let response = await CanyoneeringAPI.login(userObject);
    let data = await response.json();
    // console.log(data)
    if (data.token) {
      localStorage.setItem("auth-user", `${data.token}`);
      setIsLoggedIn(true);
      setUser(data.user);
    }
  }

  const handleLogout = () => {
    localStorage.setItem("auth-user", null);
    setIsLoggedIn(false);
    setUser(null);
  }

  

  return (
    <div className="App">
      <BrowserRouter>
      <UserContext.Provider value={{ user: user, setUser: handleLogin, error: error }}>
        <Routes>
          <Route exact path="/" element={ <HomePage canyons={canyons} isLoggedIn={isLoggedIn} handleLogout={handleLogout}/> }/>
          <Route exact path="/canyons/:canyonID" element={ <CanyonPage /> } />
          <Route exact path="/login/" element={ <UserLoginPage  isLoggedIn={isLoggedIn} handleLogin={handleLogin} handleLogout={handleLogout} user={user} /> } />
          <Route exact path="/signup/" element={<SignupPage/>}/>
          <Route exact path="/addcanyon/" element={<AddCanyonPage/>}/>
          <Route exact path="/canyons/:canyonID/delete/" element={<DeleteCanyonPage />} />
          {/* <Route exact path="/canyons/:userID/usercanyons/" element={<FavoritesPage/>}/> */}
      
        </Routes>
        </UserContext.Provider>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
