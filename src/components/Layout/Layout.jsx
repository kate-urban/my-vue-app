import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { ThemeContext } from '../../context/context';
import cn from 'classnames';
import '../Layout/Layout.css'

export default function Layout({children, className}) {
    const {theme} = useContext(ThemeContext)
    return (
    <>
        <Header />
        <main className={cn (className, theme)}>{children}
            <div className='container'>
                <div className='layout-div'>
                    <h1 className='layout-main'>I'AM KATUA A PSYHOLOGOGIST</h1>
                    <p className='layout-p'>I work with anxiety, depression, unconscious conflicts. I help you understand yourself, understand the underlying causes of your experiences and restore your internal balance. Are you ready for a deep exploration of your inner world? Contact me.</p>
                </div>
                <img className='layout-image'src='src/assets/scenery.jpg'></img>
            </div> 
       </main>
        <Footer />
    </>
    )
}
Layout.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
 }      