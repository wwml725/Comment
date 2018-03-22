import React,{Component} from 'react'
export default class App extends Component{
    render () {
        return (
            <div className='comment'>
                <span className='comment-user'>
                    <span>{this.props.comment.username} </span>：
                </span>
                <span>{this.props.comment.content}</span>
            </div>
        )
    }
}