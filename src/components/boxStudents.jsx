function listToP(listToParse){
    // console.log(listToParse);
    return (
        <>
        {/* {listToParse.map((line, index) => (
            <>
            <p key={index} className="text-left text-body my-1">
                {line[0]} {line[1]}
            </p>
            </>
        ))} */}
        <p className="text-left text-body my-1">
            {listToParse.map((line, index) => (
                <>
                {line[0]} {line[1]}
                </>
            ))}
        </p>
        </>
    )
}

export default function BoxStudents( {student, color, border_shape, bold_color} ) {
    // console.log(student)
    return (
        <div className={`m-2 flex flex-col p-5 content-around justify-start content-between ${color} ${border_shape}`}>
            <div className="pb-2 text-2xl text-left font-medium text-gray-600">
                {student["name"]}
            </div>
            <div className={`text-justify text-lg mt-2 flex-1 ${bold_color}`}>
                {listToP(student["period"])}
            </div>
            <div className='text-justify mt-2 flex-1'>
                {student["work"]}
            </div>
            <a href={student["link"]} className={`mt-2 text-right font-medium ${bold_color}`}>
                More
            </a>
        </div>
    )
}