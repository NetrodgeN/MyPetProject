// import './App.css';
import {useEffect, useState} from "react";
import PostList from "../component/PostList";
import {Pagination, Stack} from "@mui/material";
import BasicModal from "../component/BasicModal";
import PostService from "../API/PostService";
import {useFetching} from "../hooks/useFetching";
import Loader from "../component/Loader";
import getPageCount from "../utils/pages";

function Posts() {
    const [posts, setPosts] = useState([])
    const [totalPages, setTotalPages] = useState(0) // всего страниц
    const [limit, setLimit] = useState(9)
    const [page, setPage] = useState(1)
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [fetchPosts, isPostsLoading, postError] = useFetching(async ()=>{
        const response = await PostService.getAll(limit, page);
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    })

    useEffect(()=>{
        fetchPosts()
    },[page])
    //функция ожидает новый пост из постФорм
    const createPost = (newPost)=>{
        setPosts([...posts, newPost])
        setOpen(false);
    }
    // фильтр возвращает новый массив по какому то условию
    const removePost = (post) =>{
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const handleChange = (event, value) => {
        setPage(value);
    }

    return (
        <div className="App">
            <BasicModal createPost={createPost} handleOpen={handleOpen} handleClose={handleClose} open={open}/>
            {postError &&
                <h2>ERROR ${postError}</h2>
            }
            {isPostsLoading
                ? <Loader/>
                : <PostList remove={removePost} posts={posts}/>
            }
            <Stack className={'pagination'}>
                <Pagination
                    page={page}
                    count={totalPages}
                    onChange={handleChange}
                    variant={'outlined'}
                    color={'primary'}
                />
            </Stack>

        </div>
    );

}

export default Posts;
