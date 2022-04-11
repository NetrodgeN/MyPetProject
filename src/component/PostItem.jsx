import React from 'react';
import {IconButton} from "@mui/material";
import {Delete} from "@mui/icons-material";

const PostItem = (props) => {
    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.post.title}</strong>
                <div> {props.post.body}</div>
                <div>{props.post.date}</div>
            </div>
            <IconButton aria-label='delete' size={'small'}
            onClick={()=> props.remove(props.post)}
            >
                <Delete fontSize={'inherit'}/>
            </IconButton>
        </div>
    );
};

export default PostItem;