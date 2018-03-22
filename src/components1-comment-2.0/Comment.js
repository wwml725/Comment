import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class App extends Component {
    static propTypes = {
        comment: PropTypes.object.isRequired,
        onDeleteComment: PropTypes.func,
        index: PropTypes.number    }

    constructor() {
        super()
        this.state = {timeString: ''}
    }

    componentWillMount() {
        this._updateTimeString();
        this._timer = setInterval(() => {
                this._updateTimeString();
            }, 5000
        )
    }

    componentWillUnmount () {
        clearInterval(this._timer)
    }

    _updateTimeString() {
        const comment = this.props.comment;
        //将毫秒转换为秒
        const duration = (+Date.now() - comment.createdTime) / 1000;
        this.setState({
            timeString: duration > 60
                ? `${Math.round(duration / 60)} 分钟前`
                : `${Math.round(Math.max(duration, 0))} 秒前`
        })
        console.log(duration);
    }

    handleDeleteComment(){
        if(this.props.onDeleteComment){
            this.props.onDeleteComment(this.props.index)

        }
    }
    render() {
        const comment = this.props.comment;

        return (
            <div className='comment'>
                <div className='comment-user'>
                    <span>{comment.username}</span>：
                </div>
                <p>{comment.content}</p>
                <span className='comment-createdtime'>
          {this.state.timeString}
        </span>
                <span
                    onClick={this.handleDeleteComment.bind(this)}
                    className='comment-delete'>

          删除
        </span>
            </div>
        )
    }
}