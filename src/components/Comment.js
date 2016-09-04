import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import CommentForm from "./CommentForm"

class Comment extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        if (!this.props.comment) return null
        const { comment: { user, text } } = this.props
        return (
            <p>
                {text}
                {this.decrateUser(user) }
            </p>
        )
    }
    
    decrateUser(user) {
        return <strong>by {user}</strong>
    }

}

// function submitComment(comment) {
//     console.log(comment);

// }
// "id": 0,
//         "user": "Gilliam Underwood",
//         "text"

// function getCommentForm() {

// }


Comment.propTypes = {
    comment: PropTypes.shape({
        user: PropTypes.string,
        text: PropTypes.string.isRequired
    })
}

export default connect(({ comments }, props) => {
    return {
        comment: comments.find(comment => comment.id == props.commentId)
    }
})(Comment)