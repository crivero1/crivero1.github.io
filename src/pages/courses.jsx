import Courses from '../information/courses.json';
import BoxCourses from '../components/boxCourses';

export default function CoursesPage() {
    // console.log(Courses);
    return(
        <>
        <div className="mt-10 w-auto">
            <div className='border-b text-left text-5xl mb-2 text-gray-600 w-9/10'>
                Courses
            </div>
            <div className="flex">
                <BoxCourses courses={Courses} color='' bold_color='gray-1' border_shape='rounded-xl' border_color='border-gray-300' />
            </div>
        </div>
        </>
    )
}