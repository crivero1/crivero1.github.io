function byKey(obj, boldTextColor){
    let listKeys = Object.keys(obj);
    listKeys.reverse();
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
                    <p className="pl-3">
                        <span className={`italic font-semibold`}>{line["title"]}</span>. Together with {line["authors"]}. In {line["type"]} {line["year"]}.
                    </p>
                </div>
            </div>
        ))}
        </>
    )
}

export default function BoxResearch( {papers, color, border_shape, bold_color, title} ) {
    // console.log(papers)
    // papers.reverse();
    return (
        <div className={`m-2 flex flex-col p-5 content-around justify-start content-between ${color} ${border_shape}`}>
            <div className="pb-2 text-2xl text-left font-medium text-gray-600">
                {title}
            </div>
            {/* <p className="border-b text-left">
                2026
            </p>
            <div className={`text-justify mt-2 flex-1 ${bold_color}`}>
                {listToP(papers)}
            </div> */}
            {/* <div> */}
            {byKey(papers, bold_color)}
            {/* </div> */}
            {/* <div className='text-justify mt-2 flex-1'>
                {papers["work"]}
            </div> */}
        </div>
    )
}