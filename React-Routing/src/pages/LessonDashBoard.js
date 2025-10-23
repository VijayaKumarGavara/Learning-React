import { useParams } from "react-router";
import { useLocation } from "react-router";
import coursDetails from "../../utils/mockData";

export default function LessonDashBoard() {
//   const params = useParams();
// //   console.log(params)
//   const course= coursDetails.find((course) => {
//     return course.id === params.courseId;
//   });
//   const lesson = course.lessons.find((lesson) => {
//     return ( lesson.id === params.lessonId)
//   });
  const {state}=useLocation();
  const lesson=state?.lesson;
  return(
    <>
        <h3>{lesson.title}</h3>
        <p>{lesson.content}</p>
    </>
  )
}
