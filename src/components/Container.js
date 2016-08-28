import React, { Component, PropTypes } from 'react'
import ArticleList from './ArticleList'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import JqueryComponent from './JqueryComponent'
import DaypickerContainer from './DaypickerContainer'
import Counter from './Counter'
import { findDOMNode } from 'react-dom'
import { connect } from 'react-redux'
import { filterArticles } from '../AC/articles'

class Container extends Component {
    static propTypes = {

    };

    state = {
        selected: null,
        from: null, 
        to: null
    }

    render() {
        const options = this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div>
                <Counter />
                <ArticleList articles = {this.props.articles} />
                <Select options = {options} value={this.state.selected} onChange = {this.handleChange} multi={true}/>
                <DaypickerContainer onChange = {this.onDateChange} />
                <JqueryComponent items = {this.props.articles} ref={this.getJQ}/>
            </div>
        )
    }

    getJQ = (ref) => {
        this.jqRef = ref
        console.log('---', findDOMNode(ref))
    }

    onDateChange(from, to) {
        this.setState({
            from: from,
            to: to
        });

        this.props.filterArticles(this.state.selected, this.state.from, this.state.to);
    }

    handleChange = (selected) => {

        this.setState({
            selected
        });
        //console.log("selected === ", selected);
        var idsToFilter = selected.map(item => item.value);
        this.props.filterArticles(idsToFilter, this.state.from, this.state.to)   
    }
}

export default connect((state) => {
    const { articles } = state
    return { articles }
}, { filterArticles })(Container)
