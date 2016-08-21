import React, { Component } from 'react'
import Article from './Article'
import toggleMixin from "../mixins/toggleOpenById";

let ArticleList = React.createClass({

    mixins: [toggleMixin],

    render() {
        const articleItems = this.props.articles.map(articleObject =>
            <li key = {articleObject.id}>
                <Article article = {articleObject}
                    isOpen = {this.state.elementId === articleObject.id}
                    toggleOpen = {this.toggleOpen(articleObject.id)}
                />
            </li>)
        return (
            <ul>
                {articleItems}
            </ul>
        )
    }
})

export default ArticleList