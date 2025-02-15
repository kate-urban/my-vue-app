import React, { useState, useEffect } from 'react';
import useWindowSize from '../hooks/useWindowSize';

const BurgerMenu = () => {
  const { width } = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);

  if (width >= 768) return null;

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>☰</button>
      {isOpen && (
        <nav>
          <ul>
            <li><a href="/">Main</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default BurgerMenu;