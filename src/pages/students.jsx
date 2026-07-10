import Students from '../information/students.json';
import BoxStudents from '../components/boxStudents';

function isActive (a, b) {
    if (a['active'] == 'Yes') {
        return -1;
    } else if (b['active'] == 'Yes') {
        return 1;
    } else { return 0 }
}

function listToBoxes(listOfParams){
    // console.log(listOfParams);
    listOfParams.sort(isActive);
    // console.log(listOfParams);
    return (
        <>
            {listOfParams.map((elem, i) => 
            {   
                // console.log(elem); 
                let color = elem['active']=='No' ? 'bg-gray-1' : 'bg-blue-3';
                let bold_color = elem['active']=='No' ? 'text-blue-1' : 'text-gray-1';
                return (
                <BoxStudents key={i} student={elem} color={color} bold_color={bold_color} border_shape=''/>
                )
            }
            )}
        </>
    )
}

export default function StudentsPage() {
    // console.log(Students);
    return(
        <>
        <div className="mt-10">
            <div className='border-b text-left text-5xl mb-2 text-gray-600'>
                Students
            </div>
            <div className="md:grid md:grid-cols-2 ">
                {/* <BoxStudents student={Students['phd'][0]} color='bg-gray-1'/> */}
                {listToBoxes(Students['students'])}
                {/* {listToBoxes(Students['phd'])} */}
                {/* {listToBoxes(Students['master'])} */}
            </div>
        </div>
        </>
    )
}