import React from 'react';


// const test={
//     schoolId,
//     name,
//     code,
//     notes
//     teachers: [{}]
// }

export const Courses = ({courses, onEdit})=>{


    return (
        <div>
            <div>Create new course form</div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>Code</td>
                            <td>Name</td>
                            <td>Teachers</td>
                            <td>Notes</td>
                            <td></td>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            courses.sort((a, b)=>{return (a.code > b.code) ? 1 : ((b.code > a.code) ? -1 : 0)}).map(x=><tr key={x._id}>
                                <td>{x.code}</td>
                                <td>{x.name}</td>
                                <td>{x.teacher.name}</td>
                                <td>{x.notes}</td>
                                <td onClick={()=>onEdit('courses', x._id)}>Edit</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}