import React, {useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/Button/MyButton";
import MyInput from "./components/UI/Input/MyInput";
import PostForm from "./components/PostForm";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', body: 'Description'},
        {id: 2, title: 'Javascript', body: 'Description'},
        {id: 3, title: 'Javascript', body: 'Description'},
        {id: 4, title: 'test', body: 'test'}
    ])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }


    return (
          <div className="App">
              <PostForm create={createPost}/>
              <PostList remove={removePost} posts={posts} title="List of posts"/>
          </div>
    );
}

export default App;
