import { Link } from "react-router";
import "../Style.css"
export default function CourseCard(props){
    // console.log(props)
    const {title, description, id}=props?.cd;
    return(
        <>
            <div className="course-card">
                <h2>{title}</h2>
                <p>{description}</p>
                <Link to={"/courses/"+id} state={{course:props?.cd}}><button>View More</button></Link>
            </div>
        </>
    )
}