import './post-status-filter.styles.css';
import { Button } from 'reactstrap';
import { Component } from 'react';

export default class PostStatusFilter extends Component {
    constructor(props){
        super(props);
        this.buttons = [
            {label: 'All', name: 'all'},
            {label: 'Liked', name: 'liked'}
        ]
    }
    render() {
        const buttons = this.buttons.map(({label, name}) => {
            const active = this.props.filter === name;
            const clazz = active ? 'btn-info' : 'btn-outline-secondary';
            return (
                <Button 
                    key={name} 
                    type="button" 
                    className={`btn ${clazz}`}
                    onClick={() => this.props.onFilterSelect(name)}
                >{label}
                </Button>
            ) 
        })
        
        return(
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
    
}
