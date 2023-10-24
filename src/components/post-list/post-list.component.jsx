import PostListItem from "../post-list-item/post-list-item.component";
import './post-list.styles.css';
import { ListGroup } from "reactstrap";

const PostList = ({posts, onDelete}) => {
    //look through posts and return template of elements
    const elements = posts.map((item) => {
        const {id, ...itemProps} = item;
        return (
            // <li className="list-group-item">
            //     <PostListItem 
            //     label={item.label} 
            //     important={item.important}/>
            // </li>
            <li key={id} className="list-group-item">
            <PostListItem 
                {...itemProps}
                onDelete={() => onDelete(id) }/>
        </li>
        )
    });
    return (
        //create list of posts
        <ListGroup className="app-list">
            {elements}
        </ListGroup>
        
    )
}

export default PostList;