import React from 'react';

const style={
    back:{
        backgroundColor: 'rgba(234, 24, 100, 0.5)',
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        top: '0',
        display: 'flex',
        alignContent: 'center'
    },
    modal:{
        backgroundColor: 'white',
        width: '70vw',
        height: '70vh',
        display: 'flex',
        margin: 'auto'

    }
}

export const Modal = ({Component, isOpen=false, controlModal, id})=>{

    return (
        <div>
            {isOpen&&
            <div style={style.back}>
                <div style={style.modal}>
                    <p onClick={()=>controlModal(id)}>Close Me X</p>
                    <div>
            {<Component />}
                    </div>
                </div>
            </div>
            }
        </div>
    )
}