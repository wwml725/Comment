import React,{Component} from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
export default class CommentApp extends Component{
    constructor () {
        super();
        this.state = {
            comments: []
        }
    }
    componentWillMount () {
        this._loadComments()
    }
    //持久化评论列表
    //将整条评论保存
    _saveComments (comments) {
        localStorage.setItem('comments', JSON.stringify(comments))
    }
    //调用保存的评论
    _loadComments () {
        let comments = localStorage.getItem('comments')
        if (comments) {
            comments = JSON.parse(comments)
            this.setState({ comments })
        }
    }


    handleSubmitComment (comment) {
        if (!comment) return
        if (!comment.username) return alert('请输入用户名')
        if (!comment.content) return alert('请输入评论内容')
        const comments = this.state.comments
        comments.push(comment)
        this.setState({ comments })
        this._saveComments(comments)
        console.log(this.state.comments);
    }

    render() {
        return (
            <div className='wrapper'>
                <CommentInput
                    onSubmit={this.handleSubmitComment.bind(this)} />
                <CommentList comments={this.state.comments}/>
            </div>
        )
    }
}