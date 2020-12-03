import React from 'react';
import s from './MyPosts.module.css';
import Post from "../Post/Post";

const MyPosts = () => {
    return (
        <main className={s.MyPosts}>
            <div>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>Add post</button>
            </div>
            <Post message = "Hello, world!" likeCounter ="20"/>
            <Post message = "my second props on this project))" likeCounter = "18"/>
            <Post message = "it`s not so hard)" likeCounter = "15"/>
            <Post message = "fast learning react)" likeCounter = "11"/>
        </main>
    );
}

export default MyPosts;