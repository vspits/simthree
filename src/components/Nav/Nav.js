import React from 'react'
import {Link, withRouter} from 'react-router-dom'

function Nav(props){
    if(props.location.pathname === '/'){
        return <div></div>
    } else {
        return (
            <div>
                Nav
                <Link to='/dashboard'><button>HOME</button></Link>
                <Link to='/new'><button>NEW POST</button></Link>
                <Link to='/'><button>LOGOUT</button></Link>
            </div>
        )
    }
}

export default withRouter(Nav)