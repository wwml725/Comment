import React,{Component} from 'react'
import PropTypes from 'prop-types'
export default class App extends Component{
    static propTypes = {
        comment: PropTypes.object.isRequired
    }
    constructor () {
        super()
        this.state = { timeString: '' }
    }

    componentWillMount () {
        this._updateTimeString();
        this._timer = setInterval(()=>{
                this._updateTimeString();
            },5000
        )
    }

    _updateTimeString () {
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
    render () {
        return (
            <div className='comment'>
                <div className='comment-user'>
                    <span>{this.props.comment.username} </span>：
                </div>
                <p>{this.props.comment.content}</p>
                <span className='comment-createdtime'>
          {this.state.timeString}
        </span>
            </div>
        )
    }
}