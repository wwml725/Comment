//从react当中引入React包和React.js的组件父类Component。只要写react.js组件就必须引入这两个东西。
import React, {Component} from 'react';
//ReactDOM帮我们把React组件渲染到页面上去，没有其他作用了。
import ReactDOM from 'react-dom';


const lessons = [
    { title: 'Lesson 1: title', description: 'Lesson 1: description' },
    { title: 'Lesson 2: title', description: 'Lesson 2: description' },
    { title: 'Lesson 3: title', description: 'Lesson 3: description' },
    { title: 'Lesson 4: title', description: 'Lesson 4: description' }
];

class Lesson extends Component{
    render(){
        const lesson = this.props.lesson;
        return(
            <div onClick={()=>console.log(`${this.props.index}-${lesson.title}`)}>
                <h1>{lesson.title}</h1>
                <p>{lesson.description}</p>
            </div>
        )
    }
}
class LessonList extends Component{
    render(){
        return(
            lessons.map((lesson,index)=><Lesson lesson={lesson} key={index} index={index}/>)
        )
    }
}


ReactDOM.render(<LessonList/>, document.getElementById('root'));