import React from 'react'
import {Link, withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import './nav.css'

function Nav(props){
    const {username, profile_pic} = props
    if(props.location.pathname === '/'){
        return <div></div>
    } else {
        return (
            <div className='Nav'>
                <p>Nav</p>
                <img src={profile_pic} alt='profilepic'/>
                <p>{username}</p>
                <Link to='/dashboard'><button>HOME</button></Link>
                <Link to='/new'><button>NEW POST</button></Link>
                <Link to='/'><button>LOGOUT</button></Link>
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        username: reduxState.username,
        profile_pic: reduxState.profile_pic
    }
}

export default withRouter(connect(mapStateToProps)(Nav))