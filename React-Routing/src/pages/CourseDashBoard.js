import "../Style.css"
import coursDetails from "../../utils/mockData"
import { useParams, useLocation } from "react-router";
import { Link } from "react-router";
export default function CourseDashBoard(){
    // const params=useParams();
    // let course=coursDetails.find((c)=> c.id===params.courseId);
    const {state}=useLocation();
    const course=state?.course;
    return(
        <>
            <div className="course-container">
                <h1>I am CourseDashBoard</h1>
                <h3>{course.title}</h3>
                <h4>{course.description}</h4>
                <ol>
                    {course.lessons.map((lesson)=>{
                        return (
                        <li key={lesson.id}>
                            <Link to={`/courses/${course.id}/lessons/${lesson.id}`} state={{lesson}} >{lesson.title}</Link>
                        </li>
                    )
                    })}
                </ol>
            </div>
        </>
    )
}