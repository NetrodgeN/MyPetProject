import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts}) => {
    return (
        <div className={''}>
            <h1 style={{textAlign:'center'}}>Список</h1>
            <div className={'post__list'}>
            {posts.map(post =>
                <PostItem key={post.id} post={post} />
            )}
            </div>
        </div>
    );
};

export default PostList;