import React from 'react';

function WithStorageListener(Wrapped){
    return function WrappedWithStorageListener(props){
        const [getAlert , setAlert] = React.useState(false);

        
        window.addEventListener('storage',(change)=>{
            if(change.key === 'Todo_v1'){
                setAlert(true);
            }
        });



        return(
            <Wrapped
                show={getAlert}
                toggleShow={setAlert}
                sincronized={props.sincronized}
            />
        );
    }
}

export { WithStorageListener }