//从react当中引入React包和React.js的组件父类Component。只要写react.js组件就必须引入这两个东西。
import React, {Component} from 'react';
//ReactDOM帮我们把React组件渲染到页面上去，没有其他作用了。
import ReactDOM from 'react-dom';

class Input extends Component {
    constructor () {
        super()
        this.state = { val: 0 }
    }
    handleChangeVal(e){
        this.props.onChange(e.target.value)
    }
    render () {
        return (
            <div>
                <input
                    type='text'
                    onChange={this.handleChangeVal.bind(this)} />
            </div>
        )
    }
}

class PercentageShower extends Component {
    render () {
        return (
            <div>{this.props.val}</div>
        )
    }
}

class PercentageApp extends Component {
    constructor () {
        super()
        this.state = { val: 0 }
    }

    render () {
        return (
            <div>
                <Input onChange={(val)=>{this.setState({val:val})}}/>
                <PercentageShower val={this.state.val}/>
            </div>
        )
    }
}



ReactDOM.render(<PercentageApp/>, document.getElementById('root'));