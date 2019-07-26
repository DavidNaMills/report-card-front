import React from 'react';
import {useForm} from '../CustomHooks/useForm'


const empty = {
    name: '',
    code: '',
    notes: '',
};


export const CourseForm = ({submit, data=empty, id})=>{
    const {val, update, clear} = useForm(data);


    const onSubmit = (event)=>{
        event.preventDefault();
            submit(id, val);
            clear();
    }

    const test=(e)=>{
        console.log(e.target.value)
    }


    return (
        <div>
            This is the Course form
            <form onSubmit={e=>onSubmit(e)}>    
                <div>
                    <label>Course Code</label>
                    <input type='text' value={val.code} name='code' onChange={e=>update(e.target.name, e.target.value)}/>
                </div>


                <div>
                    <label>Course Name</label>
                    <input type='text' value={val.name} name='name' onChange={e=>update(e.target.name, e.target.value)}/>
                </div>

                <div>
                    <label>Notes</label>
                    <textarea rows='10' cols='30'  type='text' value={val.notes} name='notes' onChange={e=>update(e.target.name, e.target.value)}/>
                    <p>Count: {val.notes.length}/200</p>
                </div>


                <div>
                    <button type='submit'>Save Course</button>
                    <button type='button' onClick={()=>clear()}>Clear</button>
                </div>
            </form>
            
        </div>
    )
}