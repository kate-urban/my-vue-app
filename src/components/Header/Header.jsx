import "../Header/Header.css";
import Menu from '../Menu/Menu';
import Button from '../Button/Button';
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate()
     return (
        <header className="header">
            <div className='logo'>Sonali.</div>
            <Menu />
            <Button className='button' label='Contacts' onClick={()=> navigate('/contacts')}/>
        </header>
    )
}