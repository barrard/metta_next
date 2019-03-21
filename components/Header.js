import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faGem from '@fortawesome/fontawesome-free-regular/faGem'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            {/* <FontAwesomeIcon icon={faGem} transform="grow-18" /> */}
            <img class='lotus-logo' src="/static/images/white-x-mettaelectric_small_logo.png" />

        </div>
        <div className="content">
            <div className="inner">
                <h1>METTA ELECTRIC LLC</h1>
                <p>Bringing mindfulness to construction</p>
                <p>RESIDENTIAL | COMMERCIAL | SOLAR</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('metta')}}>Metta</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('solar')}}>Solar</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
