import './App.css';
import {useState} from "react";
import PostList from "./component/PostList";
import PostForm from "./component/PostForm";
import {Button, Modal} from "@mui/material";
import BasicModal from "./component/BasicModal";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title:'Javascropt', body:' language', date: 213},
        {id: 2, title:'JABA', body:' NEMA', date: 321},
        {id: 3, title:'DABA', body:' ZIPPO', date:456},
        {id: 4, title:'DYBA', body:' HIPPI',date: 645},
        {id: 5, title:'DYBA', body:' HIPPI',date: 789},
        {id: 6, title:'DYBA', body:' HIPPI',date: 987},
        {id: 7, title:'DYBA', body:' HIPPI',date: 888},
    ])
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
            <BasicModal createPost={createPost} />
            {/*<PostForm create={createPost} />*/}
            {posts.length !== 0
                ?
                <PostList remove={removePost} posts={posts}/>
                :
                <div className={'empty__post'}>Здесь ничего нет</div>
            }

        </div>
    );

}

export default App;
