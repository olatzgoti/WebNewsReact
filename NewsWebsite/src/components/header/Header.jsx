import {Link} from 'react-router-dom'
import React from 'react'


const Header = ()=>{
return (
<>
    <nav>
            
            <span><Link to='/'>Home</Link></span>
            <span><Link to='/form'>Insert New</Link></span>
            <span><Link to='/list'>News</Link></span>
            
    </nav>
</>
)
}
export default Header