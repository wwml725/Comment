//从react当中引入React包和React.js的组件父类Component。只要写react.js组件就必须引入这两个东西。
import React, {Component} from 'react';
//ReactDOM帮我们把React组件渲染到页面上去，没有其他作用了。
import ReactDOM from 'react-dom';
/*

    props是不可改变的，如果想要改变props传过来的属性，name就直接去改变要传的属性，在props之前改变

    props 一旦传入，你就不可以在组件内部对它进行修改。但是你可以通过父组件主动重新渲染的方式来传入新的 props，从而达到更新的效果。
* */

//把对象作为组件的参数
class Index extends Component {
    constructor () {
        super()
        this.state = {
            likedText: '已赞',
            unlikedText: '赞'
        }
    }

    handleClickOnChange ()
    {
        this.setState({
            likedText: '取消',
            unlikedText: '点赞'
        })
    }

    render () {
        return (
            <div>
                <LikeButton
                    likedText={this.state.likedText}
                    unlikedText={this.state.unlikedText} />
                <div>
                    <button onClick={this.handleClickOnChange.bind(this)}>
                        修改 wordings
                    </button>
                </div>
            </div>
        )
    }
}

class LikeButton extends Component {
    static defaultProps = {
        likedText: '取消',
        unlikedText: '点赞'
    }

    constructor () {
        super();
        this.state = { isLiked: false }
    }

    handleClickOnLikeButton () {
        this.setState({
            isLiked: !this.state.isLiked
        })
    }

    render () {
        return (
            <button onClick={this.handleClickOnLikeButton.bind(this)}>
                {this.state.isLiked
                    ? this.props.likedText
                    : this.props.unlikedText} 👍
            </button>
        )
    }
}

ReactDOM.render(<Index/>,document.getElementById('root'));