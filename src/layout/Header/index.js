import React from 'react';


import './index.css';

const Header = () => {
    return (
      <header className="header">
        <img
          src={"https://pngimg.com/uploads/trollface/trollface_PNG48.png"}
          className="header--image"
        />
        <h2 className="header--title">Meme Generator</h2>
      </header>
    );
}

export default Header;
