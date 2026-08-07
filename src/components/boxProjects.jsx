export default function BoxProjects( {project, color, border_shape, bold_color} ) {
    // console.log(project)
    return (
        <div className={`m-2 flex flex-col p-5 justify-start content-around ${color} ${border_shape}`}>
            <div className="pb-2 text-2xl text-left font-medium text-gray-600">
                {project["title"]}
            </div>
            <div className={`text-justify font-semibold text-lg mt-2 ${bold_color}`}>
                {project["period"]}
            </div>
            <div className='text-justify mt-2 flex-1'>
                {project["description"]}
            </div>
            <a href={project["link"]} className={`mt-2 text-right font-medium ${bold_color}`}>
                More
            </a>
        </div>
    )
}