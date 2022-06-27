import React, {useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/Button/MyButton";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', body: 'Description'},
        {id: 2, title: 'Javascript', body: 'Description'},
        {id: 3, title: 'Javascript', body: 'Description'},
    ])

  return (
      <div className="App">
          <form>
              <input type="text" placeholder="Name of the post"/>
              <input type="text" placeholder="Post text"/>
              <MyButton>Create post</MyButton>
          </form>
          <PostList posts={posts} title={"List of posts"}/>
      </div>
  );
}

export default App;
