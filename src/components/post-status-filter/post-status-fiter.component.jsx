import './post-status-filter.styles.css';

const PostStatusFilter = () => {
    return(
    <div className="btn-group">
        <button type="button" className="btn btn-info"> All </button>
        <button type="button" className="btn btn-outline-secondary"> Liked </button>
    </div>
    )
}

export default PostStatusFilter;