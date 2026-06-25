import Publications from '../information/papers.json';
import BoxPapers from '../components/boxPapers';

// function listToBoxes(listOfParams){
//     // console.log(listOfParams);
//     return (
//         <>
//             {listOfParams.map((elem, i) => 
//             {   
//                 // console.log(elem); 
//                 let color = elem['active']=='No' ? 'bg-gray-1' : 'bg-blue-3';
//                 let bold_color = elem['active']=='No' ? 'text-blue-1' : 'text-gray-1';
//                 return (
//                 <BoxPapers key={i} papers={elem} color={color} bold_color={bold_color} border_shape=''/>
//                 )
//             }
//             )}
//         </>
//     )
// }

export default function PublicationsPage() {
    // console.log(Publications);
    return(
        <>
        <div className="mt-10">
            <div className="md:grid md:grid-cols-2 ">
                <BoxPapers papers={Publications['conferences']} color='bg-gray-1' title="Conferences" />
                <BoxPapers papers={Publications['journal']} color='bg-gray-1' title="Journal" />
                {/* {listToBoxes(Publications['conferences'])} */}
                {/* {listToBoxes(Publications['journal'])} */}
            </div>
        </div>
        </>
    )
}