import React,{Component} from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
export default class CommentApp extends Component{
    //初始化状态
    constructor(){
        super();
        this.state = {
            comments:[]
        }
    }

    _saveComments (comments) {
        localStorage.setItem('comments', JSON.stringify(comments))
    }

    handleSubmitComment (comment) {
        console.log(comment);
        this.state.comments.push(comment);
        this.setState({
            comments:this.state.comments
        })
        // console.log(this.state.comments);
    }

    handleDeleteComment (index) {
        const comments = this.state.comments
        comments.splice(index, 1)
        this.setState({ comments })
        this._saveComments(comments)
    }
    render() {
        return (
            <div className='wrapper'>
                <CommentInput
                    onSubmit={this.handleSubmitComment.bind(this)} />
                <CommentList comments={this.state.comments} onDeleteComment={this.handleDeleteComment.bind(this)}/>
            </div>
        )
    }
}