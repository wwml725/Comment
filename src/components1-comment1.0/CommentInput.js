import React,{Component} from 'react'
export default class CommentInput extends Component{
    constructor () {
        super();
        this.state = {
            username: '',
            content: ''
        }
    }
    handleUsernameChange (event) {
        this.setState({
            username: event.target.value
        })
    }
    handleContentChange (event) {
        this.setState({
            content: event.target.value
        })
    }
    handleSubmit () {
        if (this.props.onSubmit) {
            const { username, content } = this.state
            this.props.onSubmit({username, content})
        }
        this.setState({ content: '' })
    }
    render() {
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                        <input value={this.state.username} onChange={this.handleUsernameChange.bind(this)} />
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                        <textarea value={this.state.content} onChange={this.handleContentChange.bind(this)} />
                    </div>
                </div>
                <div className='comment-field-button'>
                    {/*点击之后将当前组件state中的数据传入父组件中，也就是要修改父组件的state，要修改父组件中的state只能在父组件中修改*/}
                    <button
                        onClick={this.handleSubmit.bind(this)}>
                        发布
                    </button>
                </div>
            </div>
        )
    }
}
/*
 * 【注意一个问题：】
 *   1、将这个组件中的state中的数据传递给父组件？？？
 *
 * */