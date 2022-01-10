import React from 'react'
function TodoHeader({children,getLoading}){

    return (
        <header>
            {
                React.Children
                    .toArray(children)
                    .map(child => React.cloneElement(child, { getLoading }))
            }
        </header>
    );
}

export { TodoHeader }