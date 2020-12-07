import React from 'react';
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

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
    return (
      <section>
          <div className={s.dialogs}>
              <div className={s.dialogsItems}>
                  <DialogItem name="Dimych" id="1"/>
                  <DialogItem name="Nastya" id="2"/>
                  <DialogItem name="Stasyan" id="3"/>
                  <DialogItem name="Misha" id="4"/>

              </div>
              <div className={s.messages}>
                  <Message message="Hi"/>
                  <Message message="How are you?)"/>
                  <Message message="How is your IT-KAMASUTRA?)"/>
              </div>
          </div>
      </section>
    );
}

export default Dialogs;