import React,{Component} from 'react'
export default class CommentInput extends Component{
    constructor(){
        super();
        this.state = {
            username:'',
            content:''
        }
    }

    componentDidMount () {
        this.textarea.focus();
        this._loadUsername()

    }

    handleChangeUsername(event){
        this.setState({
            username:event.target.value
        })
    }

    handleChangeContent(event){
        this.setState({
            content:event.target.value
        })
    }

    handleClickSubmit(){
        if(this.props.onSubmit){
            const {username,content} = this.state;
            this.props.onSubmit({username,content,createdTime: +new Date()})
        }
        this.state.content = ""
        this.textarea.focus()

    }
    _saveUsername (username) {
        localStorage.setItem('username', username)
    }

    handleUsernameBlur (event) {
        this._saveUsername(event.target.value)
    }

    _loadUsername () {
        const username = localStorage.getItem('username')
        if (username) {
            this.setState({ username })
        }
    }




    render () {
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                        <input  onBlur={this.handleUsernameBlur.bind(this)} value={this.state.username} onChange={this.handleChangeUsername.bind(this)} />
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                        <textarea ref={(textarea)=>{this.textarea=textarea}} value={this.state.content} onChange={this.handleChangeContent.bind(this)} />
                    </div>
                </div>
                <div className='comment-field-button'>

                    <button onClick={this.handleClickSubmit.bind(this)}>
                        发布
                    </button>
                </div>
            </div>
        )
    }}

    /*
    * 【注意一个问题：】
    *   1、将这个组件中的state中的数据传递给父组件？？？
    *
    * */