import React from 'react';
import { WithStorageListener } from './withStorageListener';
import './listenerNotification.css'

function ListenerNotification({show,toggleShow,sincronized}){

    const timer = () =>{
           
        const time = 3000;

        setTimeout(()=>{
            toggleShow(false);
            sincronized();
        },time)
    }

    if(show){
        return (
            <div
                className="card__notification"
                onClick={timer()}
            >
                <h4>La información fue actualizada</h4>
                <p>la paguina se recargara en 3 segundos</p>
            </div>
        );
    }else{
        return (null)
    }
}

const ListenerNotificationWithStorageListener = WithStorageListener(ListenerNotification);

export { ListenerNotificationWithStorageListener }