import './App.css';
import {useEffect, useState} from "react";
import PostList from "./component/PostList";
import PostForm from "./component/PostForm";
import {Button, Modal, Pagination} from "@mui/material";
import BasicModal from "./component/BasicModal";
import axios from "axios";
import PostService from "./API/PostService";
import AutorenewIcon from '@mui/icons-material/Autorenew';
import SvgIcon from '@mui/material/SvgIcon';
import {useFetching} from "./hooks/useFetching";
import Loader from "./component/Loader";

function App() {
    const [posts, setPosts] = useState([])

    const [fetchPosts, isPostsLoading, postError] = useFetching(async ()=>{
        const posts = await PostService.getAll();
        setPosts(posts)
    })

    useEffect(()=>{
        fetchPosts()
    },[])
    //функция ожидает новый пост из постФорм
    const createPost = (newPost)=>{
        setPosts([...posts, newPost])
    }
    // фильтр возвращает новый массив по какому то условию
    const removePost = (post) =>{
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            <Button onClick={fetchPosts}>Click me</Button>
            <BasicModal createPost={createPost} />
            {/*<PostForm create={createPost} />*/}
            {postError &&
                <h2>ERROR ${postError}</h2>
            }
            {isPostsLoading
                ? <Loader/>
                : <PostList remove={removePost} posts={posts}/>
            }
            <Pagination
                count={10}
                variant={'outlined'}
                color={'primary'}
            />
        </div>
    );

}

export default App;
