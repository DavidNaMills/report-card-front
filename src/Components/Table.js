import React from 'react';


const style={
    table:{
        backgroundColor: 'yellow',
        padding: '10px',
        collapsed: 'true'
    },
    header:{
        fontWeight: '500',
        fontSize: '16px',
        backgroundColor: 'blue',
        color: 'white'
    },
    center:{
        textAlign: 'center'
    },
    full:{
        width: '100%'
    }
}


export const Table=({data, keys, isFull=false})=>{    //data as array, keys as array of objects: key, label

    const getStyle=()=>{
        if(isFull){
            return {...style.table, ...style.full}
        } else{
            return {...style.table}
        }
    }


    const createHeaders=()=>(
        <tr style={{...style.center}}>
            {keys.map(x=><td key={x.key}>{x.label}</td>)}
        </tr>
    )

    const addRows=()=>{
        
        //need to check if property is an arry,
        //if yes, render as a list
        //apply expand
        return data.map((x, cnt)=>
            <tr key={cnt}>
                {keys.map((c, v)=><td key={`${cnt}${v}`}>{x[c.key]}</td>, 0)}
            </tr>
        , 0);

        // return temp;
    }

    return (
        <table style={getStyle()}>
            <thead style={style.header}>
                {createHeaders()}       
            </thead>
            <tbody>
                {addRows()}
            </tbody>
        </table>
    )
}