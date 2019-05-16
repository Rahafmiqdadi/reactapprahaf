import React, { Component } from 'react';

import './AddPost.css';

class AddPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Amer'
    }

    render () {
        return (
            <div className="AddPost">
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Amer">Amer</option>
                    <option value="Mohammad">Mohammad</option>
                </select>
                <button>Add Post</button>
            </div>
        );
    }
}

export default AddPost;