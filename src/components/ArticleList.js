import React, { Component, PropTypes } from 'react'
import Article from './Article'
import toggleOpen from "../decorators/toggleOpenById";

class ArticleList extends Component {
    render() {
        const articleItems = this.props.articles.map(articleObject =>
            <li key = {articleObject.id}>
                <Article article = {articleObject}
                    isOpen = {this.props.openedElement === articleObject.id}
                    toggleOpen = {this.props.toggleOpen(articleObject.id)}
                />
            </li>)
        return (
            <ul>
                {articleItems}
            </ul>
        )
    }
}

ArticleList.propTypes = {
    toggleOpen: PropTypes.func.isRequired,
    openedElement: PropTypes.number
}

export default toggleOpen(ArticleList)