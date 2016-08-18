import React, {Component} from 'react';
import Comment from './Comment';

class CommentsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commentsVisible: false
        }
    }

    handleClick(event) {

    }

    render() {
        let commentsList = null;
        const { comments } = this.props;

        if (comments && comments.length > 0) {
            commentsList = comments
                    .map(comment => <li key={comment.id}><Comment comment={comment} /><hr /></li>)
        } else {
            commentsList = <div>Sorry, no comments</div>
        }

        let commentsBlock = null;
        let message = "";
        if (this.state.commentsVisible) {
            message = "Hide comments";
            commentsBlock = (
                <ul>
                    {commentsList}
                </ul>
            );
        } else {
            message = "Show comments";
        }
        //все хорошо, но не пиши много кода в JSX, вынеси эту функцию в метод
        return (
            <div>
                <h4 onClick={() => this.setState({ commentsVisible: !this.state.commentsVisible }) }>{message}</h4>
                {commentsBlock}
            </div>
        );
    }
}

export default CommentsList;
