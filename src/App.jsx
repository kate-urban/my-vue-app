import { Route, Routes } from 'react-router-dom';
import './App.css';

import Contacts from './roots/Contacts/Contacts';
import Portfolio from './roots/Portfolio/Portfolio';
import Services from './roots/Blog/Blog';
import { ThemeContext } from '../src/context/context';
import { useState } from 'react';
import BlogPost from './roots/Blog/BlogPost';
import Blog from './roots/Blog/Blog';
import Main from './components/Main/main';



function App() {
const [theme, setTheme] = useState('light')
const toggleTheme =() => {
  theme === 'light' ? setTheme('dark'): setTheme('light')
}
  return (
    <ThemeContext.Provider value={{theme: 'light', toggleTheme}}>
      <Routes>
      <Route path='/' element={<Main />}/>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='/Portfolio' element={<Portfolio/>}/>
        <Route path='/Services' element={<Services/>}/>
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path='/Home' element={<Main />}/>

    </Routes>
    </ThemeContext.Provider>
  )
}

export default App
