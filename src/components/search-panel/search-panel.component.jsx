import './search-panel.styles.css';
import { Component } from 'react';
export default class SearchPanel extends Component {
    constructor (props){
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
      const term = e.target.value;
      this.setState({term});
        this.props.onUpdateSearch(term);
    }

    render() {
        return (
            <input 
            type="text" 
            className="form-control search-input"
            placeholder="Search by posts" 
            onChange={this.onUpdateSearch.bind(this)}/>
        )
    }
    
}