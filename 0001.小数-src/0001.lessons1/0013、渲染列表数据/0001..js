//从react当中引入React包和React.js的组件父类Component。只要写react.js组件就必须引入这两个东西。
import React, {Component} from 'react';
//ReactDOM帮我们把React组件渲染到页面上去，没有其他作用了。
import ReactDOM from 'react-dom';
/*
【列表数据的渲染】
    1、在前端我们经常处理列表数据，例如文章、评论列表。用户列表。。。
* */
/*
* 1、如果你往 {} 放一个数组，React.js 会帮你把数组里面一个个元素罗列并且渲染出来。
*
* */

//将上面数组里面的数据渲染到页面上
class Index extends Component {
    render () {
        return (
            <div>
                {/*如果你往 {} 放一个数组，React.js 会帮你把数组里面一个个元素罗列并且渲染出来。*/}
                {[
                    <span>React.js </span>,
                    <span>is </span>,
                    <span>good</span>
                ]}
            </div>
        )
    }
}
ReactDOM.render(<Index/>,document.getElementById('root'));