import React from "react"
import {Link} from'gatsby'
import logo from '../../images/logo.svg'
import {FaCartArrowDown} from 'react-icons/fa'

export default class Navbar extends React.PureComponent {
  state = {
    navbarOpen: false,
    css: 'collapse navbar-collapse',
    links: [
      {
        id: 1,
        path: '/',
        text: 'home'
      },
      {
        id: 2,
        path: '/about',
        text: 'about'
      }
    ],
  }
  
  navbarHandler = () => {
    this.state.navbarOpen 
    ? this.setState(() => ({navbarOpen: false, css: 'collapse navbar-collapse'}))
    : this.setState(() => ({navbarOpen: true, css: 'collapse navbar-collapse show'}))
  }

  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="logo" />
        </Link>
        <button className="navbar-toggler" type="button" onClick={this.navbarHandler}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={this.state.css}>
          <ul className="navbar-nav mx-auto">
            {this.state.links.map(link => <li key={link.id} className="nav-item">
              <Link  className="nav-link text-capitalize" to={link.path}>{link.text}</Link>
              </li>)}
            <li key="1000" className="nav-item ml-sm-5"><FaCartArrowDown className="cart-icon" /></li>
          </ul>
        </div>
      </nav>
    )
  }
}

