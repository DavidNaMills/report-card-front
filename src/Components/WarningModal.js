import React, {useState} from 'react';
import {Button} from './Button'


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

export const WarningModal = ({Msg='', isOpen=false, controlModal})=>{
    const close=(result)=>{
        controlModal(result);
    }

    return (
        <div>
            {isOpen&&
            <div style={style.back}>
                <div style={style.modal}>
                    <p onClick={()=>close()}>Close Me X</p>
                    <div>
                        {Msg}
                        <div>
                            <Button onClick={()=>close(true)} type='confirm' label='Agree' />
                            <Button onClick={()=>close(false)} type='warning' label='Cancel' />
                        </div>
                    </div>
                </div>
            </div>
            }
        </div>
    )
}  