import React from "react";

const Home = ({ students, setStudents }) => {
  function handleAttendence(id) {
    setStudents((prev) =>
      prev.map((student) =>
        student.id == id
          ? { ...student, present: student.present ? false : true }
          : student
      )
    );
  }

  return (
    <div>
      {students.map((student,ind) => (
        <div key={ind}>
          <div>
            <p>Student's Name: {student.name}</p>
            <p>Attendence Status: {student.present ? "Present" : "Absent"}</p>
          </div>
          <div>
            <button onClick={()=>handleAttendence(student.id)}>Change Status</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
