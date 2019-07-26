import React from 'react';
import {role} from '../Constants/roles';


export const Teacher = ({staff, courses})=>{

    const findCourses=(id)=>{
        const temp = courses.filter(x=>x.teacher.teacherId===id);
        if(temp.length>0){
            return temp.map(c=><p>{c.code} {c.name}</p>);
        } else {
            return (<p>No Courses</p>)
        }
    }

    return (
        <div>
            <div>Create new Teacher form</div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Disabled staff?</th>
                            <th>Courses</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            staff.map(x=><tr key={x._id}>
                                <td>{x.name}</td>
                                <td>{x.role}</td>
                                <td>{x.isDisabled?'True':'False'}</td>
                                <td>{findCourses(x._id)}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}