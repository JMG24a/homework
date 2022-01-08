import React from 'react';
import { WithStorageListener } from './withStorageListener';

function ListenerNotification({show,toggleShow}){
    if(show){
        return (
            <p>hola mundo</p>
        );
    }else{
        return (null)
    }
}

const ListenerNotificationWithStorageListener = WithStorageListener(ListenerNotification);

export { ListenerNotificationWithStorageListener }