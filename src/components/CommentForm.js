import React, {Component, PropTypes} from 'react';

class CommentForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            commentText: ""
        }
    }

    render() {
        return (
            <div>
                <input type="text" onChange={(e) => this.onCommentChange(e)} />
                <input type="button" onClick={() => this.submit()} value="submit" />
            </div>
        );
    }

    onCommentChange(e) {
        this.setState({
            commentText: e.target.value
        });
    }

    submit() {
        if (!this.state.commentText)
            return;
        this.props.onSubmit({
            user: "Current User",
            text: this.state.commentText
        });
    }
}

// CommentForm.propTypes = {
//     onSubmit: PropTypes.func.isRequired()
// }

export default CommentForm;