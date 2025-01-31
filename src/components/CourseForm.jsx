import React, { useState } from 'react'
import useCourseStore from '../app/courseStore'


const CourseForm = () => {
  const addCourse = useCourseStore((state) => state.addCourse)
  const [courseTitle, setCourseTitle] = useState('')

  const handleCourseSubmit = () => {
    if (!courseTitle) return alert('Please add a course title')
    const newCourse = {
      id: Math.ceil(Math.random() * 10000),
      title: courseTitle,
      completed: false,
    }
    addCourse(newCourse)
    setCourseTitle("")
  }

  return (
    <div>
      <input
        type="text"
        value={courseTitle}
        onChange={(e) => setCourseTitle(e.target.value)}
      />
      <button onClick={handleCourseSubmit}>Add TO-DO</button>
    </div>
  )
}

export default CourseForm