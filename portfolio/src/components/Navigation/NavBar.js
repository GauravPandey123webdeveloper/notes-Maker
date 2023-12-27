import PropTypes from 'prop-types';
import "./nav.css"
function NavBar(props){
    return(
        <nav className="navbar">
        <div className="container">
          <a className="logo" href="/">{props.title}</a>
        </div>
      </nav>
    )
}
NavBar.propTypes={
title:PropTypes.string.isRequired
}
NavBar.defaultProps={
title:"Text parsing Application"
}
export default NavBar;