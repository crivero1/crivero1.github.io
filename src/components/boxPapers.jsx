function listToP(listToParse){
    // console.log(listToParse);
    return (
        <>
        {listToParse.map((line, index) => (
            <div key={index} className="text-left text-body my-1">
                {/* <div className="pb-2 text-2xl text-left font-medium text-gray-600">
                    {line["title"]}
                </div> */}
                <div className="text-left text-body my-2">
                    <div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 10" fill="currentColor" className="size-4">
                        <path fillRule="evenodd" d="M4.5 7.5a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9Z" clipRule="evenodd" />
                        </svg>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                        <path d="M160 96L480 96C515.3 96 544 124.7 544 160L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 160C96 124.7 124.7 96 160 96z"/>
                        </svg> */}
                        {/* <SquareIcon></SquareIcon> */}
                        {line["authors"]}
                    </div>
                </div>
                <div className="text-left text-body my-2">
                    <p className="pl-4">
                        <span className="italic">{line["title"]}</span>. {line["type"]}, {line["year"]}
                    </p>
                </div>
            </div>
        ))}
        </>
    )
}

export default function BoxResearch( {papers, color, border_shape, bold_color, title} ) {
    // console.log(papers)
    return (
        <div className={`m-2 flex flex-col p-5 content-around justify-start content-between ${color} ${border_shape}`}>
            <div className="pb-2 text-2xl text-left font-medium text-gray-600">
                {title}
            </div>
            <div className={`text-justify mt-2 flex-1 ${bold_color}`}>
                {listToP(papers)}
            </div>
            {/* <div className='text-justify mt-2 flex-1'>
                {papers["work"]}
            </div> */}
        </div>
    )
}