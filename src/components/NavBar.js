import React from 'react'
import './NavBar.css'
import {Link} from 'react-router-dom'


function NavBar() {
    return (
        <div className='navbar' >
            <div className='nav-elements'>
                <h1 className='nav-logo'>QGAP</h1>
                <Link className='nav-link' to='/'>Game page</Link>
                <Link className='nav-link' to='/question-setter'>Question Setter</Link>
            </div>
        </div>
    )
}

export default NavBar
