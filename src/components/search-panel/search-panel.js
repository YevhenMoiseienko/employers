import {Component} from "react";

import './search-panel.scss'

class SearchPanel extends Component{
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        this.setState({
            term: e.target.value
        })
        this.props.onUpdateSearch(e.target.value)
    }


    render() {
        return (
            <input
                type="text"
                className="form-control search-input"
                placeholder="Введите имя сотрудника"
                value={this.state.term}
                onChange={this.onUpdateSearch}/>
        )
    }
}

export default SearchPanel;