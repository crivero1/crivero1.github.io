import Courses from '../information/courses.json';
import BoxCourses from '../components/boxCourses';

// function listToBoxes(listOfParams){
//     console.log(listOfParams);
//     return (
//         <>
//             {listOfParams.map((elem, i) => 
//             {   
//                 // console.log(elem); 
//                 // let color = elem['active']=='No' ? 'bg-gray-1' : 'bg-blue-3';
//                 // let bold_color = elem['active']=='No' ? 'text-blue-1' : 'text-gray-1';
//                 return (
//                 <BoxCourses key={i} course={elem} 
//                 color='bg-blue-3'
//                 // bold_color={bold_color}
//                 border_shape=''/>
//                 )
//             }
//             )}
//         </>
//     )
// }

export default function CoursesPage() {
    // console.log(Courses);
    return(
        <>
        <div className="mt-10 w-full flex flex-col">
            <div className='border-b text-left text-5xl mb-2 text-gray-600'>
                Courses
            </div>
            <div className="flex">
                <BoxCourses courses={Courses} color='bg-blue-3' bold_color='gray-1'/>
                {/* {listToBoxes(Courses['courses'])} */}
                {/* {listToBoxes(Courses['master'])} */}
            </div>
        </div>
        </>
    )
}