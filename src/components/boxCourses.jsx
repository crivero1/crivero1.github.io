function byKey(obj, boldTextColor){
    let listKeys = Object.keys(obj);
    listKeys.reverse();
    // console.log(listKeys)
    return(
        <>
        {listKeys.map((key, index) => (
            <div key={index}>
                <p className="border-b text-left">
                    {key}
                </p>
                <div className={`text-justify mt-2 flex-1 ${boldTextColor}`}>
                    {listToP(obj[key])}
                </div>
            </div>
        ))}
        </>
    )
}

function listToP(listToParse){
    // console.log(listToParse);
    return (
        <>
        {listToParse.map((line, index) => (
            // <div key={index} className="text-left text-body my-4">
            //     <div className="pb-2 text-2xl text-left font-medium text-gray-600">
            //     {line["title"]}
            //     </div>
            //     <div className={`text-justify text-lg mt-2 flex-1`}>
            //         {line["period"]}
            //     </div>
            //     <div className='text-justify mt-2 flex-1'>
            //         {line["description"]}
            //     </div>
            // </div>
            <div key={index} className="text-left text-body my-4">
                <div className="flex">
                    <div className="text-left text-body my-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M4.5 7.5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9Z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <p className="pl-3">
                        {line["title"]}
                    </p>
                </div>
            </div>
        ))}
        </>
    )
}

export default function BoxCourses( {courses, color, border_shape, bold_color} ) {
    // console.log(courses)
    return (
        <div className={`m-2 flex flex-col p-5 justify-start min-w-xl ${color} ${border_shape}`}>
            {/* <div className="pb-2 text-2xl text-left font-medium text-gray-600">
                {course["title"]}
            </div>
            <div className={`text-justify text-lg mt-2 flex-1 ${bold_color}`}>
                {course["period"]}
            </div>
            <div className='text-justify mt-2 flex-1'>
                {course["description"]}
            </div> */}
            {byKey(courses, bold_color)}
        </div>
    )
}