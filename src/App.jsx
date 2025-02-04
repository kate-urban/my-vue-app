import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './components/Main/Main';
import Contacts from './roots/Contacts/Contacts';
import Portfolio from './roots/Portfolio/Portfolio';


function App() {

  return (
    <Routes>
      <Route path='/' element={<Main />}/>
        <Route path='contacts' element={<Contacts/>}/>
        <Route path='Portfolio' element={<Portfolio/>}/>
    </Routes>
  )
}

export default App
