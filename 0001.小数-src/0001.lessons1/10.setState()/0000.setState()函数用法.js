//从react当中引入React包和React.js的组件父类Component。只要写react.js组件就必须引入这两个东西。
import React, {Component} from 'react';
//ReactDOM帮我们把React组件渲染到页面上去，没有其他作用了。
import ReactDOM from 'react-dom';

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    handleClick() {
        // this.setState({
        //     count: this.state.count + 1
        // })
        // this.setState({
        //     count: this.state.count + 3
        // })
        this.setState((prevState)=>{
            return {count:prevState.count+1}
        })
        this.setState((prevState)=>{
            return {count:prevState.count+3}
        })
        this.setState((prevState)=>{
            return {count:prevState.count+6}
        })

    }

    render() {
        return (
            <div onClick={this.handleClick.bind(this)}>
                {this.state.count}
            </div>
        )
    }
}

ReactDOM.render(<Counter/>, document.getElementById('root'))

