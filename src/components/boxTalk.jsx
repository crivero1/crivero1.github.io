export default function BoxTalk( {talk, color, border_shape, bold_color} ) {
    console.log(talk)
    return (
        <div className={`m-2 flex flex-col p-5 content-around justify-start content-between ${color} ${border_shape}`}>
            <div className="pb-2 text-2xl text-left font-medium text-gray-600">
                {talk["title"]}
            </div>
            <div className={`text-justify text-lg mt-2 flex-1 ${bold_color}`}>
                {talk["date"]}
            </div>
            <div className='text-justify mt-2 flex-1'>
                {talk["description"]}
            </div>
        </div>
    )
}