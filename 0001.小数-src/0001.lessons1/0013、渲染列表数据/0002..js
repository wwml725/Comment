//从react当中引入React包和React.js的组件父类Component。只要写react.js组件就必须引入这两个东西。
import React, {Component} from 'react';
//ReactDOM帮我们把React组件渲染到页面上去，没有其他作用了。
import ReactDOM from 'react-dom';

/*
【列表数据的渲染】
    1、在前端我们经常处理列表数据，例如文章、评论列表。用户列表。。。
* */
/*
这里用了一个新的数组 usersElements，然后循环 users 数组，为每个 user 构建一个 JSX 结构，然后 push 到 usersElements 中。然后直接用表达式插入，把这个 userElements 插到 return 的 JSX 当中。因为 React.js 会自动化帮我们把数组当中的 JSX 罗列渲染出来
* */
const users = [
    {username: 'Jerry', age: 21, gender: 'male'},
    {username: 'Tomy', age: 22, gender: 'male'},
    {username: 'Lily', age: 19, gender: 'female'},
    {username: 'Lucy', age: 20, gender: 'female'}
];

class Index extends Component {
    render() {
        const usersElements = []; // 保存每个用户渲染以后 JSX 的数组
        for (let user of users) {
            usersElements.push( // 循环每个用户，构建 JSX，push 到数组中
                <div>
                    <div>姓名：{user.username}</div>
                    <div>年龄：{user.age}</div>
                    <div>性别：{user.gender}</div>
                    <hr/>
                </div>
            )
        }
        return (
            <div>
                {users.map((user, index) => {
                    return (
                        <div key={index}>
                            <div>姓名：{user.username}</div>
                            <div>年龄：{user.age}</div>
                            <div>性别：{user.gender}</div>
                            <hr/>
                        </div>
                    )
                })}
            </div>
        )
    }
}

ReactDOM.render(<Index/>, document.getElementById('root'));