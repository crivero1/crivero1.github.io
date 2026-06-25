import Projects from '../information/projects.json';
import BoxProjects from '../components/boxProjects';

function listToBoxes(listOfParams){
    // console.log(listOfParams);
    return (
        <>
            {listOfParams.map((elem, i) => 
            {   
                // console.log(elem); 
                let color = elem['active']=='No' ? 'bg-gray-1' : 'bg-blue-3';
                let bold_color = elem['active']=='No' ? 'text-blue-1' : 'text-gray-1';
                return (
                <BoxProjects key={i} student={elem} color={color} bold_color={bold_color} border_shape=''/>
                )
            }
            )}
        </>
    )
}

export default function ProjectsPage() {
    // console.log(Projects);
    return(
        <>
        <div className="mt-10">
            <div className="md:grid md:grid-cols-2 ">
                {/* <BoxProjects student={Projects['phd'][0]} color='bg-gray-1'/> */}
                {listToBoxes(Projects['projects'])}
                {/* {listToBoxes(Projects['master'])} */}
            </div>
        </div>
        </>
    )
}