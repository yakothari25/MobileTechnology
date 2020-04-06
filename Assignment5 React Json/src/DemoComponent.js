import React , {Component} from "react";


function Comment(props){
    return(
      <div>
        <h4>{props.name}: {props.content}</h4>
      </div>
    )
  }

class DemoComponent extends Component{
    
    constructor(props){
        super(props);
        this.state = {name:[]};
    }
    
    commentSection = () =>{
        const comment = this.getComment();
        const uiElement = comment.map((comment)=><Comment name={this.state.name} content={this.state.body}/>);
        return (uiElement);
      }
      
    componentDidMount(){
        fetch('http://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(json => this.setState({name:json}));
      
    }
    render(){
        return(
            <div>
        <h3>
          Comments
        </h3>
        {this.commentSection()}
         </div>
        );
    }
        
        
}

export default DemoComponent;