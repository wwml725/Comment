import React,{Component} from 'react'
class Index extends Component{
    render(){
        return (
            <div>
                <LikeButton likedText="赞" unLikedText="已赞" />
            </div>
        )
    }
}
class LikeButton extends Component{
    constructor(){
        super();
        this.state = {
            isLiked :false
        }
    }
    handleClick(){
        this.setState({
            isLiked:!this.state.isLiked
        })
    }
    render(){
        return (
            <div>
                <span>{this.state.isLiked?this.props.likedText:this.props.unLikedText}</span>
            </div>
        )
    }
}
ReactDOM.render(<Index/>,document.getElementById("root"))