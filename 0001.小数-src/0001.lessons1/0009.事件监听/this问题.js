//从react当中引入React包和React.js的组件父类Component。只要写react.js组件就必须引入这两个东西。
import React, {Component} from 'react';
//ReactDOM帮我们把React组件渲染到页面上去，没有其他作用了。
import ReactDOM from 'react-dom';
class Title extends Component {
    handleClickOnTitle (word,e) {
        console.log(this)
    }

    render () {
        return (
            <h1 onClick={this.handleClickOnTitle.bind(this,'hello')}>React 小书</h1>
            /*bind 会把实例方法绑定到当前实例上，然后我们再把绑定后的函数传给 React.js 的 onClick 事件监听。这时候你再看看，点击 h1 的时候，就会把当前的实例打印出来：*/
        )
    }
    /*这是因为 React.js 调用你所传给它的方法的时候，并不是通过对象方法的方式调用（this.handleClickOnTitle），而是直接通过函数调用 （handleClickOnTitle），所以事件监听函数内并不能通过 this 获取到实例。*/
}
ReactDOM.render(<Title/>, document.getElementById('root'))

