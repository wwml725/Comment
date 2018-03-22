//从react当中引入React包和React.js的组件父类Component。只要写react.js组件就必须引入这两个东西。
import React, {Component} from 'react';
//ReactDOM帮我们把React组件渲染到页面上去，没有其他作用了。
import ReactDOM from 'react-dom';
/*
    1、组件是相互独立的、可以复用的，一个组件可能在不同的地方使用。但是在不同的场景下对这个组件的需求可能会有所不同。
    2、通过props就可以实现这个需求。
    3、【props】的使用：在使用一个组件的时候，可以把参数放在标签的属性当中，所有的属性都会作为props对象的键值。
    4、简单来说：把参数放在所使用的组件标签上，在组件内部可以通过“this.props”来访问这些配置参数。
* */



class Index extends Component{
    render(){
        return (
            <div>
                <LikeButton likeText="已赞" unLikeText="赞" ></LikeButton>
            </div>
        )
    }
}
class LikeButton extends Component{
    constructor(){
        super();
        this.state = {
            isLiked:false
        }
    }
    handleClick(){
        this.setState({
            isLiked:!this.state.isLiked
        })
    }
    render(){
        const likeText = this.props.likeText||'取消'
        const unLikeText = this.props.unLikeText||'点赞'
        return(
            <button className="like-btn" onClick={this.handleClick.bind(this)}>
                {this.state.isLiked?likeText:unLikeText} 👍
            </button>
        )
    }

}

ReactDOM.render(<Index/>,document.getElementById('root'))