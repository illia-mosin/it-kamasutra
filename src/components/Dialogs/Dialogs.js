import React from 'react';
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import Post from "../Post/Post";

const DialogItem =(props)=> {
    let path = "/dialogs/" + props.id;
    return (
    <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}


const Dialogs = (props) => {
    let dialogs = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Nastya'},
        {id: 3, name: 'Stasyan'},
        {id: 4, name: 'Misha'},
        {id: 5, name: 'hello'}
    ]
    let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id}/> )

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are your courses?'},
        {id: 3, message: 'It-kamasutra best?'},
        {id: 4, message: 'cool!)'}
    ]
    let messageElements = messages.map( m => <Message message={m.message} id={m.id}/>)

    return (
      <section>
          <div className={s.dialogs}>
              <div className={s.dialogsItems}>
                  { dialogsElements }
                  {/*
                  <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                  <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                  <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>*/}

              </div>
              <div className={s.messages}>
                  { messageElements }
              </div>
          </div>
      </section>
    );
}

export default Dialogs;