import Navbar from './navbar';

export default function Layout({children}) {
    return(
    <>
        <div className='w-screen'>
            {children}
        </div>
    </>
    )
}