import React, {Component} from 'react';

class Comment extends Component {
    render() {
        const {user, text} = this.props.comment;
        return (
            <div>
                <h3>{user}</h3>
                <div>{text}</div>
            </div>
        );
    }
}

export default Comment;