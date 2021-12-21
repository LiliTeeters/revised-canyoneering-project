import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CanyonPage from './pages/CanyonPage';
import  CanyoneeringAPI  from './api/CanyoneeringAPI';
import { useEffect, useState } from 'react';
import UserLoginPage from "./pages/UserLoginPage";
// import FavoriteCanyonList from './components/FavoriteCanyonsCard';
import FavoritesPage from './pages/FavoritesPage';

function App() {
  const [canyons, setCanyons] = useState([])
  

  useEffect(() => {
    const getCanyons = async() => {
    await CanyoneeringAPI.fetchCanyons().then((data) => setCanyons(data))
    }
    getCanyons()
  },[])
  

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={ <HomePage canyons={canyons}/> }/>
          <Route exact path="/canyons/:canyonID" element={ <CanyonPage /> } />
          <Route exact path="/login/" element={ <UserLoginPage /> } />
          <Route exact path="/canyons/:userID/usercanyons/" element={<FavoritesPage/>}/>
      
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
