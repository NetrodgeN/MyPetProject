import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts, remove}) => {
    //проверяю на пустой ли массив
    if(!posts.length){
        return(
            <h2 className={'empty__post'}>Здесь ничего нет</h2>
            )
    }

    return (
        <div className={''}>
            <h1 style={{textAlign:'center'}}>Список</h1>
            <div className={'post__list'}>
            {posts.map(post =>
                <PostItem remove={remove} key={post.id} post={post} />
            )}
            </div>
        </div>
    );
};

export default PostList;