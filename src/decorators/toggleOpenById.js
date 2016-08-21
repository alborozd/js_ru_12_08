import React, { Component } from "react"

export default (Component)  => {
    return class DecoratedTogleOpenElement extends Component {

        state = {
            elementId: null
        }

        render() {
            return <Component {...this.props} openedElement = {this.state.elementId} toggleOpen = {this.toggleOpen} />
        }

        toggleOpen = id => ev => {
            if (ev) ev.preventDefault()
            let elId = id === this.state.elementId ? null : id;
            
            this.setState({
                elementId: elId
            })
        }
    }
}