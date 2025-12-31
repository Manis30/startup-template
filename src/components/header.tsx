import logo from '../images/logo.svg'
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <nav className="bg-[#121723] px-2 py-3 sticky top-0 left-0 z-999 w-full border-b border-[#555555a1] ">
        <div className="mx-auto  px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center px-8">
                <img className="h-8 w-auto" src={logo} alt="Your Company" />
              </div>
              <div className="hidden   flex pt-2 sm:ml-6 sm:block items-center">
                <div className="flex space-x-4 ">
                  <Link to="/" className="rounded-md px-4 py-2   text-gray-300  hover:text-white">Home</Link>
                  <a href="#" className="rounded-md px-4 py-2   text-gray-300  hover:text-white">About</a>
                  <a href="#" className="rounded-md px-4 py-2   text-gray-300  hover:text-white">Blog</a>
                  <a href="#" className="rounded-md px-4 py-2  text-gray-300  hover:text-white">Support</a>
                  <div className="relative group">
                    <a
                      href="#"
                      className="inline-flex items-center px-3  py-2 text-[1rem] text-gray-300 hover:text-white"
                    >
                      Pages
                      <svg
                        className=" ml-3 w-6 h-6 text-gray-300 group-hover:text-white transition"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.25 4.39a.75.75 0 01-1.08 0L5.23 8.25a.75.75 0 01.01-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>

                    {/* Dropdown - visible on hover */}
                    <div className="absolute left-0 top-8 z-10 mt-2 w-60 origin-top-left rounded-md bg-[#1d2430]  shadow-lg ring-1 ring-black/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200">
                      <div className="py-1">
                        <a
                          href="#"
                          className="block px-7 text-[1rem] py-2 text-gray-300 hover:text-white"
                        >
                          About Page
                        </a>
                        <a
                          href="#"
                          className="block px-7 text-[1rem] py-2 text-gray-300 hover:text-white"
                        >
                          Contact Page
                        </a>
                        <a
                          href="#"
                          className="block px-7 text-[1rem] py-2 text-gray-300 hover:text-white"
                        >
                          Blog Grid Page
                        </a>
                        <a
                          href="#"
                          className="block px-7 text-[1rem] py-2 text-gray-300 hover:text-white"
                        >
                          Blog Sidebar Page
                        </a>
                        <a
                          href="#"
                          className="block px-7 text-[1rem] py-2 text-gray-300 hover:text-white"
                        >
                          Blog Details Page
                        </a>
                        <a
                          href="#"
                          className="block px-7 text-[1rem] py-2 text-gray-300 hover:text-white"
                        >

                          Sign In Page
                        </a>
                        <a
                          href="#"
                          className="block px-7 text-[1rem] py-2 text-gray-300 hover:text-white"
                        >
                          Sign Up Page
                        </a>
                        <a
                          href="#"
                          className="block px-7 text-[1rem] py-2 text-gray-300 hover:text-white"
                        >
                          Error Page
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex flex-1 items-center justify-end'>
                <Link to="/signin" className="rounded-md lg:px-4 px-0 py-2    text-gray-300  hover:text-white lg:pr-[25px] pr-0">Sign In</Link>
                <Link to="/signup"><button type='button' className='bg-[#4a6cf7] w-30 h-14 text-[white] font-medium mx-3 hover:bg-[#4b6ad6] rounded'>Sign Up</button></Link>
              </div>
            </div>
            <div className="hidden" id="mobile-menu">
              <div className="space-y-1 px-2 pt-2 pb-3">
                <a href="#" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Dashboard</a>
                <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Team</a>
                <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
                <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Header;