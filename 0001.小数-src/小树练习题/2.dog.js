import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// import './history/1.reactDOM.render';
class Dog extends Component {
    bark() {
        console.log('bark')
    }

    run() {
        console.log('run')
    }

    handleClick() {
        this.bark();
        this.run();
        console.log(this);//this是的是当前组件

    }

    render() {
        return (<div onClick={this.handleClick.bind(this)}>DOG</div>)
        /*this的指向问题*/
    }
}

ReactDOM.render(<Dog/>, document.getElementById('root'));
