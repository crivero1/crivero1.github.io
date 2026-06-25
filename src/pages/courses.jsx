import Courses from '../information/courses.json';
import BoxCourses from '../components/boxCourses';

function listToBoxes(listOfParams){
    console.log(listOfParams);
    return (
        <>
            {listOfParams.map((elem, i) => 
            {   
                // console.log(elem); 
                // let color = elem['active']=='No' ? 'bg-gray-1' : 'bg-blue-3';
                // let bold_color = elem['active']=='No' ? 'text-blue-1' : 'text-gray-1';
                return (
                <BoxCourses key={i} course={elem} 
                color='bg-blue-3'
                // bold_color={bold_color}
                 border_shape=''/>
                )
            }
            )}
        </>
    )
}

export default function CoursesPage() {
    // console.log(Courses);
    return(
        <>
        <div className="mt-10">
            <div className="md:grid md:grid-cols-2 ">
                {/* <BoxCourses student={Courses['phd'][0]} color='bg-gray-1'/> */}
                {listToBoxes(Courses['courses'])}
                {/* {listToBoxes(Courses['master'])} */}
            </div>
        </div>
        </>
    )
}