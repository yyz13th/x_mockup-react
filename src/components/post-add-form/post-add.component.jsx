import './post-add.styles.css';

const PostAddForm = () => {
    return(
        <form className="bottom-panel d-flex">
            <input 
                type="text"
                placeholder="Whats on your mind?"
                className="form-control new-post-label" 
                />
            <button type="button" className="btn btn-outline-secondary">
                Add Post
            </button>
        </form>
    )
}

export default PostAddForm;

