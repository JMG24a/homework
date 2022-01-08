import React from 'react';

function WithStorageListener(Wrapped){
    return function WrappedWithStorageListener(props){
        const [getAlert , setAlert] = React.useState(false);

        
        window.addEventListener('storage',(change)=>{
            if(change.key === 'Todo_v1'){
                console.log('hola');
                setAlert(true);
            }
        });

        return(
            <Wrapped
                show={getAlert}
                toggleShow={setAlert}
            />
        );
    }
}

export { WithStorageListener }