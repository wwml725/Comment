import React,{Component} from 'react'
export default class CommentInput extends Component{
    constructor () {
        super();
        this.state = {
            username: '',
            content: ''
        }
    }
    componentDidMount(){
        this.textarea.focus();
        this._loadUsername()
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
            this.props.onSubmit({
                username: this.state.username,
                content: this.state.content,
                createdTime: +new Date()
            })
        }
        this.setState({ content: '' })
        this.textarea.focus();

    }

    _saveUsername(username){
        localStorage.setItem("username",username)
    }

    handleUsernameBlur(event){
        this._saveUsername(event.target.value)
    }

    //在localStorage中获得保存的username
    //在什么时候执行呢？？页面刚刚加载完毕之后执行此代码
    _loadUsername(){
        const username = localStorage.getItem('username')
        if(username){
            this.setState({
                username:username
            })
        }
    }


    render() {
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name' >用户名：</span>
                    <div className='comment-field-input'>
                        <input value={this.state.username} onChange={this.handleUsernameChange.bind(this)} onBlur={this.handleUsernameBlur.bind(this)} />


                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                        <textarea ref={(textarea)=>this.textarea=textarea} value={this.state.content} onChange={this.handleContentChange.bind(this)} />
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