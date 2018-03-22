/*
 <div class='box' id='content'>
   <div class='title'>Hello</div>
   <button>Click</button>
 </div>
* */

/*
* 分析：
*   1、每一个dom元素包含的信息只有三个：标签名、属性、子元素
*   2、将上面的html信息用合法的JS对象表示
* */
let oDIV =
    {
        tag: 'div',
        attrs: {className: 'box', id: 'content'},
        children: [
            {
                tag: 'div',
                attrs: {className: 'title'},
                children: ['Hello']
            },
            {
                tag: 'button',
                attrs: {className: 'title'},
                children: ['Hello']
            }
        ]
    }
//由于使用JS对象来描述所有能用的html表示的UI信息。写起来太长又不太清晰，所以React.js就把Js语法扩展了一下，让js语言支持直接在js代码中编写html标签结构的语法“JSX语法”。
//编译的过程会将jsx结构转换成js的队像结构。



/*class Header extends Component {
    //render方法将这个组件的HTML结构返回
    render() {
        return (
            /!*return:返回的是一个JSX结构，是html和js的混合模板。*!/
            <div>
                <h1>React小书</h1>
            </div>
        )
    }
}

ReactDOM.render(<Header/>, document.getElementById('root'))*/

/*import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class Header extends Component {
    render () {
        return (
            React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    { className: 'title' },
                    "React 小书"
                )
            )
        )
    }
}

ReactDOM.render(
    React.createElement(Header, null),
    document.getElementById('root')
);*/

