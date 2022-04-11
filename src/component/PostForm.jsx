import React, {useState} from 'react';
import {Button, TextField} from "@mui/material";

const PostForm = ({create}) => {
    const [post, setPost]=useState({title:'', body:'', date:''})

    function addNewPost(e) {
        e.preventDefault()
        //не изменяем состояние напрямую. в новый массив разворачиваем старый
        // и в новый пост
        // setPosts([...posts, {...post, id:Date.now()}])
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body:'', date:''})
    }

    return (
        <form className={'form'}>
            <TextField
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}//объект в который разворачиваем старый пост (все поля, но перетераем нужный пост)
                label='Заголовок'
                color="secondary"
                variant='filled'
            />
            <TextField
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
                label='Текст'
                color='secondary'
                variant='filled'
            />
            <TextField
                value={post.date}
                onChange={e => setPost({...post, date: e.target.value})}
                color="secondary"
                variant='filled'
                type={'date'}
            />
            <Button
                variant='contained'
                disableElevation
                size={"small"}
                onClick={addNewPost}
            >Запись</Button>
        </form>
    );
};

export default PostForm;