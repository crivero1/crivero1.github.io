export default function BoxCourses( {course, color, border_shape, bold_color} ) {
    console.log(course)
    return (
        <div className={`m-2 flex flex-col p-5 content-around justify-start content-between ${color} ${border_shape}`}>
            <div className="pb-2 text-2xl text-left font-medium text-gray-600">
                {course["title"]}
            </div>
            <div className={`text-justify text-lg mt-2 flex-1 ${bold_color}`}>
                {course["period"]}
            </div>
            <div className='text-justify mt-2 flex-1'>
                {course["description"]}
            </div>
        </div>
    )
}