import React, { Component } from "react";
import "./App.css";
import Person from "./Person";

import like from './Assets/like.svg'
import share from './Assets/share.svg'
import comments from './Assets/opinion.svg'
// import axios from 'axios'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      myimages: [],
      isLoaded: false,
    };
  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(json => {
        this.setState({
          myimages: json,
          isLoaded: true,
        })
      })
      .catch((err) => {
        console.log(err);
      });

    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(json => {
        this.setState({
          items: json,
          isLoaded: true,
        })
      })
      .catch((err) => {
        console.log(err);
      });
      
      
  }

  jsonConcat(o1, o2) {
    for (var key in o2) {
     o1[key] = o2[key];
    }
    return o1;
   }

  render() {
    var output = [];
    
   /* for (var key in items) {
      output[key] = items[key];
     }
     for (var key in this.imgs) {
      output[key] = this.imgs[key];
     }*/
     
    var { items, myimages ,isLoaded } = this.state;
    output = Object.assign(myimages,items)
    if (!isLoaded) {
      return <div>Loading.....</div>
    }
    else {
      return (
        < div className="frame" >
         
          {output.map((item) =>{
            
              return <Person key={item.id} title={item.title} body={item.body} name={item.name} body1={item.body} social= {comment} />
            
          } )};
          <br />
        </div >
      )
    }

  }

}



var comment = <p>
  <div class="imgcollection"> <img class="like" src={like} alt="Like Button" /> <img class="like" src={share} alt="Share Button" /> <img class="like" src={comments} alt="Comment Button" /> </div>
</p>

export default App;
