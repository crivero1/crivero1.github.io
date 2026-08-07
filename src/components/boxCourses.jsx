function byKey(obj, boldTextColor){
    let listKeys = Object.keys(obj);
    return(
        <>
        {listKeys.map((key, index) => (
            <div key={index}>
                <p className="border-b text-left">
                    {key}
                </p>
                <div className={`text-justify mt-2 flex-1`}>
                    {listToP(obj[key], boldTextColor)}
                </div>
            </div>
        ))}
        </>
    )
}

function listToP(listToParse, bold_color){
    // console.log(listToParse);
    return (
        <>
        {listToParse.map((line, index) => (
            <div key={index} className="text-left text-body my-4">
                <div className="flex">
                    <div className="text-left text-body my-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M4.5 7.5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9Z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <p className={`pl-3`}>
                        <a className={`${bold_color} font-semibold`} href={line["link"]} >{line["title"]}</a>. At PUC Chile.
                    </p>
                </div>
            </div>
        ))}
        </>
    )
}

export default function BoxCourses( {courses, title, color, border_shape, border_color, bold_color} ) {
    // console.log(courses)
    return (
        <div className={`m-2 flex flex-col p-5 justify-start border ${color} ${border_shape} ${border_color}`}>
            <div className="pb-2 text-2xl text-left font-medium text-gray-600">
                {title}
            </div>
            {byKey(courses, bold_color)}
        </div>
    )
}