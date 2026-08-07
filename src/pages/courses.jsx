import Courses from '../information/courses.json';
import BoxCourses from '../components/boxCourses';

import Talks from '../information/talks.json';
import BoxTalks from '../components/boxTalk';

export default function CoursesPage() {
    // console.log(Courses);
    return(
        <>
        <div className="mt-10 w-auto">
            <div className='border-b text-left text-5xl mb-2 text-gray-600'>
                Courses and Talks
            </div>
            <div className="md:grid md:grid-cols-2 ">
                <BoxCourses courses={Courses} title="Courses (in spanish)" color='' bold_color='text-blue-1' border_shape='rounded-xl' border_color='border-gray-300' />
                <BoxTalks talks={Talks} title="Talks" color='' bold_color='text-blue-1' border_shape='rounded-xl' border_color='border-gray-300' />                
            </div>
        </div>
        </>
    )
}