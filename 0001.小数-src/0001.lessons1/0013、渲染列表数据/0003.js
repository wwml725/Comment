//从react当中引入React包和React.js的组件父类Component。只要写react.js组件就必须引入这两个东西。
import React, {Component} from 'react';
//ReactDOM帮我们把React组件渲染到页面上去，没有其他作用了。
import ReactDOM from 'react-dom';

/*
* 将其分成不同的组件
* */
const users = [
    {username: 'Jerry', age: 21, gender: 'male'},
    {username: 'Tomy', age: 22, gender: 'male'},
    {username: 'Lily', age: 19, gender: 'female'},
    {username: 'Lucy', age: 20, gender: 'female'}
];

class Index extends Component {
    render() {
        return (
            users.map((user,index)=><User key={index} user={user}></User>)
        )
    }
}

class User extends Component{
    render(){
        let user = this.props.user;
        return(
                <div>
                    <div>姓名：{user.username}</div>
                    <div>年龄：{user.age}</div>
                    <div>性别：{user.gender}</div>
                    <hr />

            </div>
        )
    }
}

ReactDOM.render(<Index/>, document.getElementById('root'));