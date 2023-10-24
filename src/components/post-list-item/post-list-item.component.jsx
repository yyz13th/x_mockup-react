import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar, faTrash } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './post-list-item.styles.css'
import { Component } from 'react';

export default class PostListitem extends Component {

    constructor (props){
        super(props);
        this.state = {
            important: false,
            like: false
        }
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLike = this.onToggleLike.bind(this);
    }

    onToggleImportant = () => {
        this.setState(({important}) => ({
            important: !important
        }));
    }

    onToggleLike = () => {
        this.setState(({like}) => ({
            like: !like
        }));
    }

    render() {
        const {label, onDelete} = this.props;
        const {important, like} = this.state;
        let classNames = 'app-list-item d-flex justify-content-between';
        if (important) {
            classNames +=' important';
        }

         if (like) {
            classNames +=' like';
        }


        return (
            <div className={classNames}>
            <span className="app-list-item-label"
            onClick={this.onToggleLike}>
                {label}
            </span>
            <div className="d-flex justify-content-center align-items-center">
                <button type="button" className="btn-star btn-sm" 
                onClick={this.onToggleImportant}>
                    <FontAwesomeIcon icon={faStar} />
                </button>

                <button type="button" className="btn-trash btn-sm"
                onClick={onDelete}>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
                <p className="btn-heart btn-sm">
                    <FontAwesomeIcon icon={faHeart} size='20px' />
                </p>
            </div> 
        </div>
        )
    }
} 