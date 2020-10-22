import React from 'react';
import { Redirect } from 'react-router-dom';
import Draggable from "react-draggable";
import DraggableCore from "react-draggable";

class PostFormPage extends React.Component {
  state = {
    error: false,
    success: false,
    content: '',
   
  }

  contentChanged = (event) => {
    this.setState({
      content: event.target.value
    });
  }

  savePost = (event) => {
    fetch("/api/posts/", {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({content: this.state.content}),
    })
      .then(res => {
        if(res.ok) {
          return res.json()
        }

        throw new Error('Content validation');
      })
      .then(post => {
        this.setState({
          success: true,
        });
      })
      .catch(err => {
        this.setState({
          error: true,
        });
      });
  
   //Starts from here
 
 //Ends here
}
  render() {

    if(this.state.success) return <Redirect to="/" />;

    let errorMessage = null;
    if(this.state.error) {
      errorMessage = (
        <div className="alert alert-danger">
          "There was an error saving this post."
        </div>
      );
    }

    return (<Draggable
         handle=".drag"
         defaultPosition={{x: 0, y: 0}}
         position={null}
         grid={[5, 5]}
         scale={1}
         onStart={this.handleStart}
         onDrag={this.handleDrag}
         onStop={this.handleStop}
         >
<div className="drag">
      <div className="col-10 col-md-8 col-lg-7">
        { errorMessage }
   
         <div id="drop-region">
    <div class="drop-message">
        Drag & Drop images or click to upload
    </div>
    <div id="image-preview"></div>
                </div>






<div id="drop-region">
    <div class="drop-message">
        Drag & Drop images or click to upload
    </div>
    <div id="image-preview"></div>
</div>






        <div className="input-group, drag">
 
          <input 
            type="text" 
            placeholder="Add your words of wisdom here..." 
            value={this.state.content}
            
            className="form-control mr-3 rounded"
            onChange={this.contentChanged}
          />

          <button className="btn btn-primary" onClick={this.savePost}>Save Post</button>
        </div>
      </div>
      </div>
 </ Draggable>
    );
  }
}

export default PostFormPage;