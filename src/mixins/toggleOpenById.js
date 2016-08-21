export default {
    getInitialState() {
        return {
            elementId: null
        }
    },

    toggleOpen(id) {
        return (ev) => {
            if (ev) ev.preventDefault()
            let elId = id === this.state.elementId ? null : id;
            
            this.setState({
                elementId: elId
            })
        }
    } 
}