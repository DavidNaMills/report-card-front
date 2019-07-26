import React from 'react';
import {useForm} from '../CustomHooks/useForm'

const empty = {
    startYear: '',
    className: '',
    classNo:'',
    //courses
};


export const ClassGroupForm = ({submit})=>{
    const {val, update, clear} = useForm(empty);

    const onSubmit = (event)=>{
        event.preventDefault();
        submit(val)
        clear();
    }


    return (
        <div>
            This is the classGroupForm form
            <form onSubmit={e=>onSubmit(e)}>    
                <div>
                    <label>Start Year</label>
                    <input type='number' min='2015' max='2030' value={val.startYear} name='startYear' onChange={e=>update(e.target.name, e.target.value)}/>
                </div>
                <div>
                    <label>Class Name</label>
                    <input type='text' value={val.className} name='className' onChange={e=>update(e.target.name, e.target.value)}/>
                </div>
                <div>
                    <label>classNo</label>
                    <input type='text' value={val.classNo} name='classNo' onChange={e=>update(e.target.name, e.target.value)}/>
                </div>
                <div>
                    <h5>//need to be able to add courses to the classgroup</h5>
                </div>
                <div>
                    <button type='submit'>Create Class</button>
                    <button type='button' onClick={()=>clear()}>Clear</button>
                </div>
            </form>
            
        </div>
    )
}