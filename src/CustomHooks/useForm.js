import {useState} from 'react';

export const useForm= (empty)=>{
    const [val, setVal]=useState(empty);

    const update=(name, value)=>{
        setVal(prev=>({...prev, [name]:value}));
    }

    const clear=()=>{
        setVal(empty);
    }

    return {val, update, clear};

}