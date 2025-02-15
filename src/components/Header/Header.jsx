import "../Header/Header.css";
import Menu from '../Menu/Menu';
import Button from '../Button/Button';
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from '../../context/context'

export default function Header() {
    const navigate = useNavigate()
    const {toggleTheme} = useContext(ThemeContext)
     return (
        <header className="header">
            <div className='logo'>Sonali.</div>
            <Menu />
            <Button className='button' label='Contacts' onClick={()=> navigate('/contacts')}/>
                <Button label='Сменить тему' onClick={() => toggleTheme()}/>
        </header>
    )
}