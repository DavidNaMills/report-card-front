import React, {useState} from 'react';
import {useForm} from '../CustomHooks/useForm'
import {SUPERADMIN, ADMIN, STAFF} from '../Constants/roles';
import {Button} from '../Components/Button';
import {WarningModal} from '../Components/WarningModal';

const empty = {
    name: '',
    role: null,
    wechat: '',
    username: '',
    isDisabled: false
};


export const StaffForm = ({submit})=>{
    const {val, update, clear} = useForm(empty);
    const [isOpen, setOpen] = useState(false);
    const [res, setRes] = useState(false);


    const onSubmit = (event)=>{
        event.preventDefault();
        if(val.role===SUPERADMIN){



            if (window.confirm('Are you sure you want to save this thing into the database?')) {
                // Save it!
                submit(val);
                clear();
            }
        } else {
            submit(val);
        }
    }


    // <WarningModal 
    //     Msg='Highly Inadvisable!!!! This type of user cannot be deleted. Do you wish to continue?'
    //     isOpen={isOpen}
    //     controlModal={}
    // />
    return (
        <div>
            This is the Staff form

            <form onSubmit={e=>onSubmit(e)}>    
                <div>
                    <label>Staff Name</label>
                    <input type='text' value={val.name} name='name' onChange={e=>update(e.target.name, e.target.value)}/>
                </div>

                <div>
                    <h4>Role</h4>
                        <input type='radio' onClick={e=>update('role', e.target.value)} name='role' value={SUPERADMIN} />Super Admin: NOT ADVISED<br/>
                        <input type='radio' onClick={e=>update('role', e.target.value)} name='role' value={ADMIN} />Admin<br/>
                        <input type='radio' onClick={e=>update('role', e.target.value)} name='role' value={STAFF} />Staff<br/>
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
                    <input type='checkbox' checked={val.isDisabled} onChange={e=>update('isDisabled', !val.isDisabled)} />Disable this Staff?<br/>
                </div>
                <div>
                    <Button type='confirm' label='Create Student' isFull={true}/>
                </div>
            </form>
                    <Button type='warning' onClick={()=>clear()} label='Clear'/>
            
        </div>
    )
}