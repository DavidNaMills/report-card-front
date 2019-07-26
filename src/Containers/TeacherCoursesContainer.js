import React, {useState} from 'react';

import {Teacher} from './Teacher';
import {Courses} from './Courses';
import {Modal} from '../Components/Modal';
import {Button} from '../Components/Button';
import {CourseForm} from '../Forms/CourseForm';

const TEACHER = 1;
const COURSES = 2;

const defaultState={
    selected: null
}


export const TeacherCoursesContainer = ({staff, courses, controlModal, isOpen, modId, remove, create, update})=>{
    const [which, setWhich] = useState(1);
    const [data, setData] = useState(defaultState);


    const buildCourseModal=()=>{
        const temp = courses.filter(x=>x._id===data.selected)[0];
        return(
            <div>
                <CourseForm data={temp} submit={update} id={'courses'}/>
                <Button type={'error'} onClick={()=>remove('courses', data.selected)} label='Delete Course'/>
            </div>
        )
    }

    const selected=(id, val)=>{
        setData({
            selected: val,
        });
        controlModal(modId);
    }

    const decoratedCreate=(id, data)=>{
        create(id, 
            {
            ...data,
            teacher:[]
        });
    }

    const displayWhich=()=>{
        if(which===TEACHER){
            return (
                <div>
                    <Modal 
                        isOpen={isOpen.editCourse} 
                        controlModal={controlModal} 
                        Component={()=>buildCourseModal()} 
                        modId={'editCourse'}
                    />
                    <Teacher staff={staff} courses={courses}/>
                </div>
            );
        } else if(which===COURSES){
            return (
                <div>
                    <Modal 
                        isOpen={isOpen.editCourse} 
                        controlModal={controlModal} 
                        Component={()=>buildCourseModal()} 
                        id={modId}
                    />
                    <CourseForm submit={decoratedCreate} id={'courses'}/>
                    <Courses courses={courses} onEdit={selected}/>
                </div>
            );
        }
    }

    const changeBanner=()=>(
        <div>
            Sort by <span onClick={()=>setWhich(TEACHER)}>Teachers</span> || <span onClick={()=>setWhich(COURSES)}>Courses</span>
        </div>
    )

    return (
        <div>
            {changeBanner()}
            {displayWhich()}
        </div>
    )
};