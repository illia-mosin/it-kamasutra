import React from 'react';
import s from './MyPosts.module.css';

const MyPosts = () => {
    return (
        <main className={s.MyPosts}>
            <div>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <div className={s.item}>
                    post 1
                </div>
                <div className={s.item}>
                    post 2
                </div>
                <div className={s.item}>
                    post 3
                </div>
                <div className={s.item}>
                    post 4
                </div>
                <div className={s.item}>
                    post 5
                </div>

            </div>
        </main>
    );
}

export default MyPosts