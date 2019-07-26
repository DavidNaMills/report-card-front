import React from 'react';

const styles={
    base:{
        border: 'none',
        borderRadius: '5px',
        padding: '15px',
        fontSize: '16px',
        fontWeight: '550'
    },
    default:{
        backgroundColor: 'cyan'
    },
    error:{
        backgroundColor: 'orangered',
        color: 'white'
    },
    confirm:{
        backgroundColor: 'green',
        color: 'white'
    },
    warning:{
        backgroundColor: 'orange',
        color: 'white'
    },
    modal:{
        backgroundColor: 'purple',
        color: 'white'
    },
    isFull:{
        width: '100%'
    }
}

export const Button=({type='default', onClick, label, isFull=false})=>{

    const getStyles=()=>{
        if(isFull){
            return {...styles.base, ...styles[type], ...styles.isFull}
        } else {
            return {...styles.base, ...styles[type]}
        }
    }

    return (
        <button style={getStyles()} onClick={onClick}>{label}</button>
    )
}