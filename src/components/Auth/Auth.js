import React, {Component} from 'react'
import axios from 'axios';
import { connect } from 'react-redux'
import { updateUser } from './../../ducks/reducer'

class Auth extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: ''
        }
        this.register = this.register.bind(this)
        this.login = this.login.bind(this)
    }

    // componentDidMount(){
    //     const {id} = this.props
    //     if(id){
    //         this.props.history.push(`/dashboard`)
    //     } else {
    //         axios.get(`/api/user`)
    //             .then(res => {
    //                 this.props.updateUser(res.data)
    //                 this.props.history.push(`/dashboard`)
    //             })
    //             .catch(err => {

    //             })
    //     }
    // }

    handleChange(prop, value){
        this.setState({[prop]: value })
    }

    register(){
        const {username, password} = this.state
        axios.post(`/auth/register`, {username, password})
            .then(res => {
                console.log(res.data)
                this.props.updateUser(res.data)
                this.props.history.push(`/dashboard`)
            })
            .catch(err => () => console.log(err))
    }

    login(){
        const {username, password} = this.state
        axios.post(`/auth/login`, {username, password})
            .then(res => {
                this.props.updateUser(res.data)
                this.props.history.push(`/dashboard`)
            })
            .catch(err => console.log(err))
    }

    render(){
        const {username, password} = this.state
        return (
            <div className='Auth'>
                <p>Auth</p>

                <p>USERNAME</p>
                <input 
                    value={username}
                    onChange={(e) => this.handleChange('username', e.target.value)} />

                <p>PASSWORD</p>
                <input 
                    type='password'
                    value={password}
                    onChange={(e) => this.handleChange('password', e.target.value)} />

                <br></br>
                <br></br>
                <button onClick={this.login}>LOGIN</button>
                <button onClick={this.register}>REGISTER</button>
            </div>
        )
    }
}

const mapDispatchToProps ={
    updateUser
}

export default connect(null, mapDispatchToProps)(Auth)