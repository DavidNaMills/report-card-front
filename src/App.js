import React, {useState} from 'react'

/**
 *  ONLY FOR TESTING PURPOSES
 */

import uuid from 'uuid';


import {StudentsContainer} from './Containers/StudentsContainer';
import {TeacherCoursesContainer} from './Containers/TeacherCoursesContainer';


import {dummyStaff} from './dummyData/dummyStaff';
import {dummyStudent} from './dummyData/dummyStudent';
import {dummyClassGroup} from './dummyData/dummyClassGroup';
import {dummyCourses} from './dummyData/dummyCourses';

const style = {
    main :{
        width: '75vw',
        border: 'solid 2px black',
    },
    testModal: {
        backgroundColor: 'lightgray',
        height: '100vh',
        width: '100vw'

    }
};


const modalState = {
    addStudentModal: false,
    editCourse: false
};

const dataState = {
    staff: dummyStaff,
    students: dummyStudent,
    classGroups: dummyClassGroup,
    courses: dummyCourses
};


export default ()=>{
    const [modal, setModal] = useState(modalState);
    const [data, setData] = useState(dataState);


    const controlModal=(id)=>{
        console.log(id)
        setModal({...modal, [id]:!modal[id]});
    }

console.log(modal);
console.log(data);

    const removeRecord=(id, val)=>{
        // console.log(id)
        // console.log(val)
        setData({...data, [id]:data[id].filter(x=>x._id!==val)});
        setModal(modalState);
    }
    
    const addRecord=(id, record)=>{
        const temp = {_id: uuid(), ...record};
        setData({...data, [id]:[...data[id], temp]});
    }

    const updateRecord=(id, updateR)=>{
        const t1 = data[id].filter(x=>x._id===updateR._id)[0];  //get the record to update
        const t2 = data[id].filter(x=>x._id!==updateR._id); //remove the original record
        const tempU = {...t1, ...updateR}

        setData({...data, [id]:[...t2, tempU]});
        setModal(modalState);
    }

    return (
        <div style={style.testModal}>
            <TeacherCoursesContainer 
                staff={data.staff} 
                courses={data.courses}
                controlModal={controlModal}
                isOpen={{editCourse:modal.editCourse}}
                modId={'editCourse'}
                remove={removeRecord}
                create={addRecord}
                update={updateRecord}
            />


            {/* <StudentsContainer 
                classGroups={data.classGroups} 
                students={data.students} 
                isOpen={modal.addStudentModal}
                controlModal={controlModal}
                modId={'addStudentModal'}
                remove={removeRecord}
                create={addRecord}
                update={updateRecord}
            /> */}
        </div>
    )
}

            // <Modal Component={()=><StaffForm submit={tempSubmit}/>} isOpen={isOpen.staff} controlModal={controlModal} id={IDS.staff}/>
            // <Modal Component={()=><StudentForm submit={tempSubmit}/>} isOpen={isOpen.std} controlModal={controlModal} id={IDS.std}/>
            // <Button onClick={()=>alert('you just clicked me fool!!!')} type='default' label='Click Me!!!' />
            // <Button onClick={()=>alert('you just clicked me fool!!!')} type='error' label='Click Me!!!' />
            // <Button onClick={()=>controlModal(IDS.staff)} type='modal' label='Open Staff Modal' />
            // <Button onClick={()=>controlModal(IDS.std)} type='modal' label='Open Student Modal' />

            // <div>
            //     <Table data={dummyStaff} keys={testKeys} isFull={true}/>
            // </div>

                // const testKeys=[
    //     {key: 'name', label: 'Name'},
    //     {key: 'wechat', label: 'Wechat'},
    //     {key: 'role', label: 'Role'},
    // ]

    // const openModal=(id)=>{
    //     const temp= !modal.[id];
    //     // const temp= !modal.addStudentModal;
    //     controlModal('addModalOpen', temp);
    // }