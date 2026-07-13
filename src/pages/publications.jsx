import Publications from '../information/papers.json';
import BoxPapers from '../components/boxPapers';

export default function PublicationsPage() {
    // console.log(Publications);
    return(
        <>
        <div className="mt-10">
            <div className='border-b text-left text-5xl mb-2 text-gray-600'>
                Publications
            </div>
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