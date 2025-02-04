import { v4 as uuid } from 'uuid';
import '../Menu/Menu.css';
import { Link } from 'react-router-dom';


export default function Menu() {
    const MENU = [
        {title: 'Home', to: 'Home', key: uuid()},
        {title: 'Services', to: 'Services', key: uuid()},
        {title: 'Portfolio', to: 'portfolio', key: uuid()},
        {title: 'About Us', to: 'About Us', key: uuid()},
    ];
    return (
        <nav className='NAV'>
        <ul className='Itemul'>
            {MENU.map(({title,to, key}) => 
                <Link className='itemli'to={to} key={key}>{title}</Link>)}
        </ul>
    </nav>
    )
}