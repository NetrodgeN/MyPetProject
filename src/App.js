import './App.css';
import PostItem from "./component/PostItem";
import {useState} from "react";
import PostList from "./component/PostList";
import {Button, TextField} from "@mui/material";

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
    const [title, setTitle]= useState('')
    const [body, setBody]= useState('')
    const [date, setDate] = useState('')
    function addNewPost(e) {
        e.preventDefault()
        const newPost = {
            id: Date.now(),
            title,
            body,
            date,
        };
        console.log(date)
        //не изменяем состояние напрямую. в новый массив разворачиваем старый
        // и в новый пост
        setPosts([...posts, newPost])
        setTitle('')
        setBody('')
        setDate('')
    }

    return (
        <div className="App">
            <form className={'form'}>
                <TextField
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    label='Заголовок'
                    color="secondary"
                    variant='filled'
                />
                <TextField
                    value={body}
                    onChange={e => setBody(e.target.value)}
                    label='Текст'
                    color='secondary'
                    variant='filled'
                />
                <TextField
                    value={date}
                    onChange={e => setDate(e.target.value)}
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
            <PostList posts={posts}/>
        </div>
    );

}

export default App;
