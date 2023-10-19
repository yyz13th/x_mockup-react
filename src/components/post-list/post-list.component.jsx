import PostListItem from "../post-list-item/post-list-item.component";
import './post-list.styles.css';

const PostList = ({posts}) => {
    //look through posts and return template of elements
    const elements = posts.map((item) => {
        return (
            <li className="list-group-item">
                <PostListItem 
                label={item.label} 
                important={item.important}/>
            </li>
        )
    });
    return (
        //create list of posts
        <ul className="app-list list-group">
            {elements}
        </ul>
        
    )
}

export default PostList;