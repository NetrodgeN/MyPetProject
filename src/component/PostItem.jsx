import React from 'react';
import {Button, IconButton} from "@mui/material";
import {Delete} from "@mui/icons-material";
import {useNavigate} from 'react-router-dom'


const PostItem = (props) => {
    const navigate = useNavigate();
    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.post.id} {props.post.title}</strong>
                <div> {props.post.body}</div>
                <div>{props.post.date}</div>
            </div>
            <div className={"post__btns"}>
                <IconButton aria-label='delete'
                            size={'small'}
                            onClick={()=> props.remove(props.post)}
                >
                    <Delete fontSize={'inherit'}/>
                </IconButton>
                <Button
                onClick={()=> navigate(`/posts/${props.post.id}`)}
                >Open</Button>
            </div>

        </div>
    );
};

export default PostItem;