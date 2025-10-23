import { Link } from "react-router";
import coursDetails from "../../utils/mockData";
import CourseCard from "./CourseCard";
import "../Style.css";
const Courses = () => {
  return (
    <>
      <h2>All Courses</h2>
      <div className="course-display-container">
        {coursDetails.map((course) => {
          return  <CourseCard  key={course.id} cd={course} />;
        })}
      </div>
    </>
  );
};

export default Courses;
