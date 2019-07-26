import React, {useState, useEffect} from 'react';

import {StudentForm} from '../Forms/StudentForm';
import {Modal} from '../Components/Modal';
import {Button} from '../Components/Button';

const emptyState ={
    selectedRange: null,    //either a classGroup or search results
    selectedStd: null,      
    selectedCG: null        //for reference
};

export const StudentsContainer=({classGroups, students, isOpen, controlModal, modId, remove, create, update})=>{
    const [state, setValue] = useState(emptyState);

    useEffect(()=>{
        changeClassGroup('all');
    }, [])

    useEffect(()=>{
        if(state.selectedCG){
            changeClassGroup(state.selectedCG);
        }
    }, [students])

    const setItem = (id, val)=>{    //keep single point of state change
        setValue({...state, [id]:val});
    }

    const changeClassGroup=(val)=>{
        let temp=[];
        
        if(val==='all'){
            temp=students;
        }else {
            temp=students.filter(x=>x.classId===val);
        }
        setValue({
            ...state,
            selectedStd: null,
            selectedRange: temp,
            selectedCG: val
        });
    }


    const changeSelectedStudent=(val)=>{
        const temp=students.filter(x=>x._id===val)[0];
        setItem('selectedStd', temp);
    }


    


    const buildSeletedTable=()=>{
        if(!state.selectedRange){
            return (
                <h3>No Class selected</h3>
            )
        } else {
            return (
                <table>
                    <thead>
                        <tr>
                            <td>Student ID</td>
                            <td>Name</td>
                            <td>Name 2</td>
                        </tr>
                    </thead>
                    <tbody>
                        {state.selectedRange.map(x=>
                            <tr key={x._id}>
                                <td onClick={()=>changeSelectedStudent(x._id)}>{x.studentId}</td>
                                <td onClick={()=>changeSelectedStudent(x._id)}>{x.name}</td>
                                <td>{x.name2}</td>
                            </tr>    
                        )}
                    </tbody>
                </table>
            )
        }
    }

    
    const allStudentDetails=()=>{
        if(!state.selectedStd){
            return (
                <h3>No Student Selected</h3>
                )
            } else {
                return (
                    <div>
                    <h3>{state.selectedStd.name} {state.selectedStd.name2}</h3>
                    <p><b>Wechat</b>: {state.selectedStd.wechat}</p>
                    <Button onClick={()=>controlModal(modId)} type='confirm' label='Edit'/>
                 </div>
                )
        }
    }

    const buildModal=()=>{
    // change to separate component
    // add extra functionality to allow for select to change classId
        return(
            <div>
                <StudentForm data={state.selectedStd} submit={update} classId={state.selectedStd.classId} id={'students'}/>
                <Button onClick={()=>remove ('students', state.selectedStd._id)} type='error' label='Delete Student?'/>
            </div>
        )
    }


    return (
        <div>
            <Modal 
                Component={()=>buildModal()}
                isOpen={isOpen}
                controlModal={controlModal}
                id={modId}/>
            <div>
                <h1>Student Management</h1>
            </div>
            
        <br/>
            
            <div>
                Current Period is: TEST TEST TEST
            </div>
            
        <br/>
            
            <div>
                <div>
                    <label>Change Class</label>
                    <select onChange={e=>changeClassGroup(e.target.value)}>
                    <option value='all'>Select Class</option>
                        {classGroups.map(x=><option key={x._id} value={x._id}>{x.startYear} {x.className} {x.classNo}</option>)}
                    </select>
                </div>
        <br/>
                <h3>add student form</h3>
                <StudentForm submit={create} classId={state.selectedCG?state.selectedCG:null} id={'students'}/>

                <div>
                    <label>Search Students</label>
                    <input type='text' label='Search Student'/>                
                </div>
            </div>

        <br/>

            <div>
                {buildSeletedTable()}
            </div>

            <div>
                {allStudentDetails()}

                <div>
                    a table with the students grades and the classes
                </div>

                <div>
                    table with all reports for the Students
                    when click on one, show modal with the actual report where can change
                </div>
            </div>
        </div>
    )
}