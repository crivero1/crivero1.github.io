import { useState } from 'react';
import { NavLink, Link } from "react-router";
import Links from '../information/links.json';

export default function Navbar () {
    const [hideMenu, setHideMenu] = useState(true);
    return (
    <>
        <nav className='fixed w-full z-20 top-0 start-0 bg-gray-1 mx-0 border-default'>
            <div className="flex flex-wrap justify-end mx-0 p-0">
                <button  
                    className="inline-flex px-2 pt-2 w-10 h-12 justify-center" 
                    onClick={() => {
                        setHideMenu(!hideMenu);
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                        <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" style={{strokeLinecap:"round", strokeLinejoin:"round"}}/>
                    </svg>
                </button>
            </div>
            <div className={'fixed z-20 top-10 bg-gray-1 justify-self-end h-full w-1/2 md:w-1/4 lg:w-3/16' + (hideMenu ? ' hidden' : '')}
            // md:w-2/16 xl:w-2/16
            >
                <ul className={'bg-gray-1 w-3/16 flex flex-col font-medium m-2 pt-0 space-y-2 ml-4' + (hideMenu ? ' hidden' : '')}>
                    <li>
                        {/* <a href={links['home']} className="block py-2 px-3 hover:text-white bg-brand rounded ">Home</a> */}
                        <Link to={Links['home']} className="block py-2 px-3 hover:text-white bg-brand rounded ">Home</Link>
                    </li>
                    <li>
                        <a href={Links['publications']} className="block py-2 px-3 text-heading rounded hover:text-white ">Publications</a>
                    </li>
                    <li>
                        <a href={Links['students']} className="block py-2 px-3 text-heading rounded hover:text-white ">Students</a>
                    </li>
                    <li>
                        <a href={Links['projects']} className="block py-2 px-3 text-heading rounded hover:text-white ">Projects</a>
                    </li>
                    <li>
                        <a href={Links['courses']} className="block py-2 px-3 text-heading rounded hover:text-white ">Courses</a>
                    </li>
                    <li>
                        <a href={Links['talks']} className="block py-2 pb-4 px-3 text-heading rounded hover:text-white ">Talks</a>
                    </li>
                </ul>
            </div>
        </nav>   
    </>
    )
}