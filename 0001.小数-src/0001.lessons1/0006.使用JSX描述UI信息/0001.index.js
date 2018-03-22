//从react当中引入React包和React.js的组件父类Component。只要写react.js组件就必须引入这两个东西。
import React, {Component} from 'react';
//ReactDOM帮我们把React组件渲染到页面上去，没有其他作用了。
import ReactDOM from 'react-dom';
import './index.css'
class Header extends Component{
    //render方法将这个组件的HTML结构返回
    render(){
        return(
            /*return:返回的是一个JSX结构，是html和js的混合模板。*/
            <div>
                <h1>React小书</h1>
            </div>
        )
    }
}

ReactDOM.render(<Header/>, document.getElementById('root'))