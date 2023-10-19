import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar, faTrash } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './post-list-item.styles.css'

const PostListItem = () => {
    return(
        <li className="app-list-item d-flex justify-content-between">
            <span className="app-list-item-label">
                Some Text
            </span>
            <div className="d-flex justify-content-center align-items-center">
                <button type="button" className="btn-star btn-sm">
                    <FontAwesomeIcon icon={faStar} />
                </button>

                <button type="button" className="btn-trash btn-sm">
                    <FontAwesomeIcon icon={faTrash} />
                </button>
                <button>
                    <FontAwesomeIcon icon={faHeart} />
                </button>
            </div> 
        </li>
    )
}

export default PostListItem;