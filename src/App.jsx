//import { useState } from 'react'
import Header from './components/Header';
import HeaderCategories from './components/HeaderCategories';
import HomeContent from './components/HomeContent';
import './App.css';
import { useState } from 'react';


function App() {

  const [currentPage, setCurrentPage] = useState("home");

  const handleLoginButtonClick = () => {
    setCurrentPage("login");
  };

  return (
  
    <div className="main">
          {/* HOMEPAGE */}
          {
            currentPage === "home" && 
            (
              <div className="main_home">
                <Header onLoginButtonClick={handleLoginButtonClick}/>
                <HeaderCategories />    
                <HomeContent />
              </div>
            )
          }

          {/* LOGIN PAGE */}
          {
            currentPage === "login" && 
            (
              <div className="main_contact">
                <Header onLoginButtonClick={handleLoginButtonClick}/>
                Logado
              </div>
            )
          }

    </div>

  );
}

export default App
