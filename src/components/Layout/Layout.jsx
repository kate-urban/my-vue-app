import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PropTypes from 'prop-types';

export default function Layout({children, className}) {
    return (
    <>
        <Header />
        <main className={className}>{children}</main>
        <Footer />
    </>
    )
}
Layout.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
 }      