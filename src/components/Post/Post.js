import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <main className={s.Post}>
            <div className={s.post}>
                <div className={s.item}>
                    <img src="https://html5css.ru/w3css/img_avatar3.png" alt=""/>
                    {props.message }
                    <button>like({props.likeCounter})</button>
                </div>
            </div>
        </main>
    );
}

export default Post;