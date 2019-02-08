import React, {Component} from 'react'
import Post from './../Post/Post'
import axios from 'axios'

class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            userInput: '',
            boxChecked: true,
            posts: []
        }
        //binding if any
    }

    componentDidMount(){
        const {post_id} = this.props
        if(post_id){
            this.props.history.push(`/dashboard`)
        } else {
            axios.get(`/api/posts/${post_id}`)
                .then(res => {
                    this.props.updateUser(res.data)
                    this.props.history.push(`/dashboard`)
                })
                .catch(err => console.log(err))
        }
    }
    
    render(){

        let mappedPosts = this.state.posts.map((post, index) => {
            return <Post 
                        key={index}
                        title={post.title}
                        username={post.username}
                        profile_pic={post.profile_pic}/>
        })

        return (
            <div>
                Dashboard
                <input />
                <button>SEARCH</button>
                <button>RESET</button>
                <p>MY POSTS</p>
                <input 
                    type='checkbox' 
                    checked/>
                {mappedPosts}
            </div>
        )
    }
}

export default Dashboard