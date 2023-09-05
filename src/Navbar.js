import React, { Component } from 'react'
import WhatshotIcon from '@mui/icons-material/Whatshot';
import  { Link }  from 'react-router-dom';

export default class Navbar extends Component {
   
  render() {
    return (
      <div><nav className={`navbar navbar-expand-lg bg-${this.props.mode} text-${this.props.mode==="light"?"dark":"light"} border border-secondary border-12 border-rounded`}>
      <div className="container-fluid">
        <Link to='/general'  className={`navbar-brand text-${this.props.mode==="light"?"dark":"light"} `} href="#"><WhatshotIcon style={{width:"40px",height:"40px"}}/> News</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className={`nav-link active text-${this.props.mode==="light"?"dark":"light"}`} aria-current="page" href="#">Home</a>
            </li>
            <li className={`nav-item text-${this.props.mode==="light"?"dark":"light"}`}>
              <a className={`nav-link text-${this.props.mode==="light"?"dark":"light"}`} href="#">Link</a>
            </li>
            <li className={`nav-item`}>
              <a className={`nav-link dropdown-toggle text-${this.props.mode==="light"?"dark":"light"}`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Category
              </a>
              <ul className="dropdown-menu bg-secondary ">
                
                
                <li><Link to='/business' className={`dropdown-item bg-${this.props.mode} text-${this.props.mode==="light"?"dark":"light"}`}>business</Link></li>
                <li><Link  to='/entertainment' className={`dropdown-item bg-${this.props.mode} text-${this.props.mode==="light"?"dark":"light"}`}>entertainment</Link></li>
                <li><Link to='/health' className={`dropdown-item bg-${this.props.mode} text-${this.props.mode==="light"?"dark":"light"}`}>health</Link></li>
                <li><Link  to='/science' className={`dropdown-item bg-${this.props.mode} text-${this.props.mode==="light"?"dark":"light"}`}>science</Link></li>
                <li><Link to='/sports' className={`dropdown-item bg-${this.props.mode} text-${this.props.mode==="light"?"dark":"light"}`}>sports</Link></li>
                <li><Link  to='/technology' className={`dropdown-item bg-${this.props.mode} text-${this.props.mode==="light"?"dark":"light"}`}>technology</Link></li>
                
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit" >Search</button>
          </form>
          <div class="form-check form-switch mx-4">
                  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={this.props.toggle}/>
                  <label className="form-check-label " for="flexSwitchCheckDefault"></label>
         </div>
        </div>
      </div>
    </nav></div>
    )
  }
}

