class Dog extends Component {
    constructor() {
        super()
        /* TODO */

        this.state = {
            isBarking: false,
            isRunning: false
        }

    }

    bark() {
        console.log('bark')
        this.setState({isBarking: true})
        setTimeout(() => this.setState({isBarking: false}), 20)
    }

    run() {
        /* TODO */
        console.log('bark')
        this.setState({
            isRunning: true
        })

        setTimeout(() => this.setState({isRunning: false}), 20)

    }

    render() {
        return (<div onClick={() => {
            this.run(), this.bark()
        }}>DOG</div>)
    }
}
