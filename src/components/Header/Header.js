import { withRouter } from 'react-router-dom';

import history from "../../history";

import './Header.css'

const Header = () => {
  const { location: { pathname, state: data } } = history
  const { name } = data

  if (pathname !== '/') {
    return (
      <div className="header__container">
        <div
          className="header__back-button is-pulled-left is-size-4"
          onClick={() => history.push({ pathname: '/', state: {}})}
        >
          &lt;  
        </div>
        <div className="header__content is-size-4">{`${name.first} ${name.last}`}</div>
      </div>
    )
  }

  return (
    <div className="header__container">
      <div className="header__content is-size-4">All Friends</div>
    </div>
  )
}

export default withRouter(Header);
