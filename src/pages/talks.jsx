import Talks from '../information/talks.json';
import BoxTalk from '../components/boxTalk';

function listToBoxes(listOfParams){
    // console.log(listOfParams);
    return (
        <>
            {listOfParams.map((elem, i) => 
            {   
                // console.log(elem); 
                // let color = elem['active']=='No' ? 'bg-gray-1' : 'bg-blue-3';
                // let bold_color = elem['active']=='No' ? 'text-blue-1' : 'text-gray-1';
                return (
                <BoxTalk key={i} talk={elem} 
                color='bg-blue-3'
                // bold_color={bold_color} 
                border_shape=''/>
                )
            }
            )}
        </>
    )
}

export default function TalksPage() {
    // console.log(Talks);
    return(
        <>
        <div className="mt-10">
            <div className='border-b text-left text-5xl mb-2 text-gray-600'>
                Talks
            </div>
            <div className="md:grid md:grid-cols-2 ">
                {/* <BoxTalks student={Talks['phd'][0]} color='bg-gray-1'/> */}
                {listToBoxes(Talks['talks'])}
                {/* {listToBoxes(Talks['master'])} */}
            </div>
        </div>
        </>
    )
}