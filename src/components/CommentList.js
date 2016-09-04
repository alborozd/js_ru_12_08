import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import CommentCount from './CommentCount'
import CommentForm from "./CommentForm"
import {addComment} from "../AC/comments"
import {addCommentToArticle} from "../AC/articles"
import {connect} from "react-redux"

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

/*
    componentDidMount() {
        console.log('---', 'mounted')
    }

    componentWillUnmount() {
        console.log('---', 'unmounting')
    }

    componentWillReceiveProps() {
        console.log('---', 'updating')
    }
*/

    render() {
        const { comments, isOpen, toggleOpen, articleId } = this.props
        console.log('comments ----', comments);
        
        if (!comments || !comments.length) return <p>No comments yet</p>
        const toggleButton = <a href="#" onClick = {toggleOpen}>{isOpen ? 'hide' : 'show'} comments.
            <CommentCount count = {comments.length}/>
        </a>

        if (!isOpen) return <div>{toggleButton}</div>

        const commentItems = comments.map(commentId => <li key = {commentId}><Comment commentId = {commentId} /></li>)

        return (
            <div>
                {toggleButton}
                <CommentForm onSubmit={(comment) => this.submitComment(comment)}/>
                <ul>{commentItems}</ul>
            </div>
        )
    }

    submitComment(comment) {
        //console.log(comment);
        console.log('submiting...');
        
        this.props.addComment(comment, this.props.articleId);
       // this.props.addCommentToArticle()
    }
}

export default connect((state, props) => {
    console.log(state.comments.toJS());
    
    return props
}, { addComment, addCommentToArticle })(toggleOpen(CommentList))

//export default toggleOpen(CommentList)