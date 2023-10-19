import PostListItem from "../post-list-item/post-list-item.component";
import './post-list.styles.css';

const PostList = () => {
    return (
        <ul className="app-list list-group">
            <PostListItem label="Going to learn React"/>
            <PostListItem label="Please anyone halp..."/>
            <PostListItem label="I'm tired...."/>
        </ul>
        
    )
}

export default PostList;