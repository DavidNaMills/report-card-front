import React from 'react';
import {useForm} from '../CustomHooks/useForm'

const empty = {
    studentId: '',
    name: '',
    name2: '',
    wechat: '',
    username: '',
    password: ''
};


export const StudentForm = ({submit, data=empty, classId=null, id})=>{
    const {val, update, clear} = useForm(data);

    const onSubmit = (event)=>{
        event.preventDefault();
        submit(id, {
            ...val,
            classId
        });
        clear();
    }


    return (
        <div>
            This is the student form
            <form onSubmit={e=>onSubmit(e)}>    
                <div>
                    <label>Student Code</label>
                    <input type='text' value={val.studentId} name='studentId' onChange={e=>update(e.target.name, e.target.value)}/>
                </div>
                <div>
                    <label>Student Name</label>
                    <input type='text' value={val.name} name='name' onChange={e=>update(e.target.name, e.target.value)}/>
                </div>
                <div>
                    <label>Student Name 2 (optional)</label>
                    <input type='text' value={val.name2} name='name2' onChange={e=>update(e.target.name, e.target.value)}/>
                </div>
                <div>
                    <label>Wechat</label>
                    <input type='text' value={val.wechat} name='wechat' onChange={e=>update(e.target.name, e.target.value)}/>
                </div>
                <div>
                    <label>Username</label>
                    <input type='text' value={val.username} name='username' onChange={e=>update(e.target.name, e.target.value)}/>
                </div>
                <div>
                    //have button for autogenerate
                </div>
                <div>
                    <button type='submit'>Save Student</button>
                    <button type='button' onClick={()=>clear()}>Clear</button>
                </div>
            </form>
            
        </div>
    )
}