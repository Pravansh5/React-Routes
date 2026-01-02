import React, { useEffect, useState } from 'react'

const FilterFuncationality = ({students}) => {
    const [filteredStudents,setFilteredStudents]=useState([...students]);
    const [status,setStatus]=useState("all");
    useEffect(() => {
  setFilteredStudents(students);
  setStatus("all")
}, [students]);
useEffect(() => {
    function handleFilter(status){
        setFilteredStudents(students.filter(student=>status=="all"?true:status=="present"?student.present:!student.present))
    }
    handleFilter(status);
}, [status]);
  return (
    <div>

    <div>FilterFuncationality</div>
    <div>
        <p>Select Attendence Status</p>
        <select name="Select Attendence Status" value={status}  onChange={(e)=>setStatus(e.target.value)}>
            <option value="all">All</option>
            <option value="present" >Present</option>
            <option value="absent">Absent</option>

        </select>
    </div>
    <div>
        {filteredStudents.map((student,ind)=>(
            <div key={ind}>
                <p>
                    Student's Name: {student.name}
                </p>
                Attendence Status: 
              {student.present ? "Present" : "Absent"}  
            </div>
        ))}
    </div>
    </div>
  )
}

export default FilterFuncationality