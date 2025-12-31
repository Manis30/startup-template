import logo from '../images/logo.svg'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <>
            <div className="bg-[#1e232e]">
                <div className="lg:mx-20 mx-5  pt-20 lg:pb-15 pb-10 text-white">
                    <div className="flex lg:flex-row flex-col lg:pb-10 pb-2">
                        <div className="basis-2/5 lg:mr-40 mr-0  lg:pr-30 pr-0 lg:pb-0 pb-10">
                            <div className='pb-8'>
                                <img src={logo} />
                            </div>
                            <p className='text-[#788293] pb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lobortis.</p>
                            <div className='flex'>
                                <FaFacebookF className='text-[#788293] mr-5 text-[1.1rem] hover:text-[#0069c0] cursor-pointer' />
                                <FaXTwitter className='text-[#788293] mr-5 text-[1.1rem] hover:text-[#0069c0] cursor-pointer' />
                                <FaYoutube className='text-[#788293] mr-5 text-[1.1rem] hover:text-[#0069c0] cursor-pointer' />
                                <FaLinkedin className='text-[#788293] text-[1.1rem] hover:text-[#0069c0] cursor-pointer' />
                            </div>
                        </div>
                        <div className="basis-1/5 lg:pb-0 pb-10">
                            <h3 className='text-[1.3rem] font-bold pb-7'>Useful Links</h3>
                            <ul className='text-[#788293]'>

                                <li className='pb-4 hover:text-[#0069c0] cursor-pointer'><Link to="/">Home</Link></li>
                                <li className='pb-4 hover:text-[#0069c0] cursor-pointer'>Pricing</li>
                                <li className=' hover:text-[#0069c0] cursor-pointer'>About</li>
                            </ul>
                        </div>
                        <div className="basis-1/5 lg:pb-0 pb-10">
                            <h3 className='text-[1.3rem] font-bold pb-7'>Terms</h3>
                            <ul className='text-[#788293]'>
                                <li className='pb-4 hover:text-[#0069c0] cursor-pointer'>TOS</li>
                                <li className='pb-4 hover:text-[#0069c0] cursor-pointer'>Privacy Policy</li>
                                <li className=' hover:text-[#0069c0] cursor-pointer'>Refund Policy</li>
                            </ul>
                        </div>
                        <div className="basis-1/5 lg:pb-0 pb-10">
                            <h3 className='text-[1.3rem] font-bold pb-7'>Support & Help</h3>
                            <ul className='text-[#788293]'>
                                <li className='pb-4 hover:text-[#0069c0] cursor-pointer'>Open Support Ticket</li>
                                <li className='pb-4 hover:text-[#0069c0] cursor-pointer'>Terms of Use</li>
                                <li className=' hover:text-[#0069c0] cursor-pointer'>About</li>
                            </ul>
                        </div>
                    </div>
                    <hr className='lg:my-10 my-5 text-[#52515196]' />
                    <p className='text-center'>Finished by <span className='hover:text-[#0069c0] cursor-pointer'>Unknown</span></p>
                </div>
            </div>
        </>
    );
}
export default Footer