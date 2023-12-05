// Header.js
import { useState } from 'react';
import PropTypes from 'prop-types';

const Header = ({ onLoginButtonClick }) => {
  const [visibleCategories, setCategoriesVisible] = useState(true);

  const handleCategoriesClick = () => {
    setCategoriesVisible(!visibleCategories);

    const categoriesListDiv = document.querySelector(".categoriesList");
    const categoriesArrow = document.querySelector("#more-categories-arrow");

    if (visibleCategories === false) {
      categoriesListDiv.style.display = "none";
      categoriesListDiv.classList.remove("visible");
      categoriesArrow.innerHTML = "&#9660;";
    } else {
      categoriesListDiv.style.display = "flex";
      categoriesListDiv.classList.add("visible");
      categoriesArrow.innerHTML = "&#9650;";
    }
  };

    return (
    <div className="header">
        <div className="header-logo">
            <img id="header-logo-img" src="../public/logos/Life Up logo.png" alt="LifeUp" />
        </div>
        <div className="header-nav">
            <nav>
                <ul>
                    <li><a href="#" onClick={handleCategoriesClick}>Categorias <span id="more-categories-arrow">&#9660;</span></a></li>
                    <li><a href="#">Encontre professores</a></li>
                    <li><a href="#">Seja um professor</a></li>
                    <li><a href="#">Ajuda</a></li>
                </ul>
            </nav>
        </div>
        <div className="user-info">
            <span>Gabriel Zanella</span>
            <img src="" alt="User Photo" />
        </div>
        <div className="login-register">
            <a href="#" id="login-button" onClick={onLoginButtonClick}>Entrar</a>
            <span> / </span>
            <a href="#">Registrar</a>
        </div>
    </div>
  )
};

Header.propTypes = {
    onLoginButtonClick: PropTypes.func.isRequired,
};


export default Header