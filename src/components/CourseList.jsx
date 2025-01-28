import React from 'react';
import useCourseStore from '../app/courseStore';

const CourseList = () => {
  const courses = useCourseStore((state) => state.courses);
  const removeCourse = useCourseStore((state) => state.removeCourse);
  const toggleCourseStatus = useCourseStore((state) => state.toggleCourseStatus);

  return (
    <ul>
      {courses.map((course, i) => (
        <li
          key={course.id} // Use `course.id` instead of index for a unique key
          className="course-item"
          style={{
            backgroundColor: course.completed ? 'green' : 'white',
          }}
        >
          <span className="course-item-col-1">
            <input
              checked={course.completed}
              type="checkbox"
              onChange={() => toggleCourseStatus(course.id)} // Pass reference correctly
            />
          </span>
          <span style={{color:"black",
                  textDecoration: course.completed ? 'line-through' : 'none',
                }}>{course?.title}</span>
          <button
            onClick={() => removeCourse(course.id)} 
            className="delete-btn"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default CourseList;
