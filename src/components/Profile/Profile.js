import React from 'react';
import MyPosts from "../MyPosts/MyPosts";
import s from '../Profile/Profile.module.css';

const Profile = () => {
    return (
        <main>
            <div>
                <img
                    src="https://images.unsplash.com/photo-1524607592630-66e87afd2571?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzl8fHByb2ZpbGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                    alt=""/>
            </div>
            <div>
                ava + descriprion
            </div>
            <MyPosts/>
        </main>
    );
}

export default Profile;