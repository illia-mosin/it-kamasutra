import React from 'react';
import s from './MyPosts.module.css';
import Post from "../../Post/Post";

const MyPosts = () => {
    let posts = [
        {id: 1, message: 'Hello, world!', likesCount: 20},
        {id: 2, message: 'my second props on this project))', likesCount: 18},
        {id: 3, message: 'it`s not so hard)', likesCount: 15},
        {id: 4, message: 'fast learning react)', likesCount: 11},
        {id: 5, message: 'Learning react)', likesCount: 11}
    ]
    let postsElements = posts.map( p => <Post message = {p.message} likeCounter ={p.likesCount}/>)
    return (
        <main className={s.MyPosts}>
            <div className={s.postsBlock}>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>

        </main>
    );
}

export default MyPosts;