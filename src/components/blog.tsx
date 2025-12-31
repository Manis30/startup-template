import blog1 from '../images/blog-01.jpg'
import blog2 from '../images/blog-02.jpg'
import blog3 from '../images/blog-03.jpg'
import author1 from '../images/author-01.png'
import author2 from '../images/author-02.png'
import author3 from '../images/author-03.png'
function Blog() {
    return (
        <>
            <div className="bg-[#1e232e]">
                <div className="lg:mx-20 mx-5">
                    <div className=" flex justify-center lg:flex-row flex-col text-white items-center lg:px-80 px-0 py-20 ">
                        <div className="flex lg:px-20 px-0   pb-5">
                            <div>
                                <h1 className="lg:text-[2.7rem] text-[1.7rem] font-extrabold text-center pb-4">Our Latest Blogs</h1>
                                <h6 className="text-center text-[#788293] text-[1.1rem] leading-[2rem] ">There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</h6>
                            </div>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 pb-20">
                        <div className="flex group flex-col relative bg-[#4a494938] transition ease-in duration-200 hover:shadow-[0_0_12px_2px_rgba(255,255,255,0.2)]">
                            <div className='w-full'>
                                <img src={blog1} className='w-full rounded' />
                                <button className='rounded-[18px] absolute top-7 left-80 p-1.5 font-semibold text-[0.9rem] p-1 w-22 bg-[#4a6cf7] text-white cursor-pointer'>Creative</button>
                            </div>
                            <div className="text-white w-full p-8">
                                <h3 className='text-[1.5rem] font-bold transition ease-in duration-200 pb-4 group-hover:text-[#4a6cf7] leading-[1.8rem] transition ease-in  duration-200 '>Best UI components for modern websites</h3>
                                <p className='text-[#788293] font-medium text-[1rem] pb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.</p>
                                <hr className='text-[#52515196] my-4' />
                                <div className='flex justify-start'>
                                    <div className='pr-5'>
                                        <img src={author1} />
                                    </div>
                                    <div className='pr-8'>
                                        <h6 className='text-[0.9rem] font-semibold'>By Samuyl Joshi</h6>
                                        <p className='text-[#788293] text-[0.7rem]'>Graphic Designer</p>
                                    </div>
                                    <div className=' border-l border-[#52515196]'>
                                        <h6 className='pl-5 text-[0.8rem]'>Date</h6>
                                        <p className='pl-5 text-[#788293] text-[0.7rem]'>2025</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex group flex-col relative bg-[#4a494938] transition ease-in duration-200 hover:shadow-[0_0_12px_2px_rgba(255,255,255,0.2)]">
                            <div className='w-full'>
                                <img src={blog2} className='w-full rounded' />
                                <button className='rounded-[18px] absolute top-7 left-80 p-1.5 font-semibold text-[0.9rem] p-1 w-22 bg-[#4a6cf7] text-white cursor-pointer'>Computer</button>
                            </div>
                            <div className="text-white w-full p-8">
                                <h3 className='text-[1.5rem] font-bold transition ease-in duration-200 pb-4 group-hover:text-[#4a6cf7] leading-[1.8rem] transition ease-in  duration-200 '>9 ways to improve your design skills</h3>
                                <p className='text-[#788293] font-medium text-[1rem] pb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.</p>
                                <hr className='text-[#52515196] my-4' />
                                <div className='flex justify-start'>
                                    <div className='pr-5'>
                                        <img src={author1} />
                                    </div>
                                    <div className='pr-8'>
                                        <h6 className='text-[0.9rem] font-semibold'>By Musharof Chy</h6>
                                        <p className='text-[#788293] text-[0.7rem]'>Content Writer</p>
                                    </div>
                                    <div className=' border-l border-[#52515196]'>
                                        <h6 className='pl-5 text-[0.8rem]'>Date</h6>
                                        <p className='pl-5 text-[#788293] text-[0.7rem]'>2025</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex group flex-col relative bg-[#4a494938] transition ease-in duration-200 hover:shadow-[0_0_12px_2px_rgba(255,255,255,0.2)]">
                            <div className='w-full'>
                                <img src={blog3} className='w-full rounded' />
                                <button className='rounded-[18px] absolute top-7 left-80 p-1.5 font-semibold text-[0.9rem] p-1 w-22 bg-[#4a6cf7] text-white cursor-pointer'>Design</button>
                            </div>
                            <div className="text-white w-full p-8">
                                <h3 className='text-[1.5rem] font-bold transition ease-in duration-200 pb-4 group-hover:text-[#4a6cf7] leading-[1.8rem] transition ease-in  duration-200 '>Tips to quickly improve your coding speed.</h3>
                                <p className='text-[#788293] font-medium text-[1rem] pb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.</p>
                                <hr className='text-[#52515196] my-4' />
                                <div className='flex justify-start'>
                                    <div className='pr-5'>
                                        <img src={author1} />
                                    </div>
                                    <div className='pr-8'>
                                        <h6 className='text-[0.9rem] font-semibold'>By Lethium Deo</h6>
                                        <p className='text-[#788293] text-[0.7rem]'>Graphic Designer</p>
                                    </div>
                                    <div className=' border-l border-[#52515196]'>
                                        <h6 className='pl-5 text-[0.8rem]'>Date</h6>
                                        <p className='pl-5 text-[#788293] text-[0.7rem]'>2025</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Blog