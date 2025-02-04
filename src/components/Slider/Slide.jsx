import PropTypes from 'prop-types';

export default function Slide({image}) {
    return(
        <img src={image} />
    )
}
Slide.propTypes = {
    image: PropTypes.string
}