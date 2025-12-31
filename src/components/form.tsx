function Form() {
    return (
        <>
            <div className="bg-[#121723] lg:px-20 px-0  lg:py-27 py-17 text-white">
                <div className="flex lg:flex-row flex-col">
                    <div className="basis-2/3 bg-[#4a494938] lg:p-12 p-6 lg:mb-0 mb-10 lg:mr-10 mr-0">
                        <h3 className="lg:text-[1.8rem] text-[1.4rem] font-bold pb-3 lg:pt-0 pt-5">Need Help? Open a Ticket</h3>
                        <p className="text-[#788293] pb-10">Our support team will get back to you ASAP via email.</p>
                        <div className="flex pb-8">
                            <div className="flex flex-col basis-1/2 mr-15">
                                <label className="pb-4 font-medium text-[0.9rem]">Your Name</label>
                                <input type="text" placeholder="Enter your name" className="border border-transparent placeholder-[#788293] text-white focus:outline-none bg-[#2c303b] p-3 pl-6  w-full focus:border-[#0f95d0]   " />
                            </div>
                            <div className="flex flex-col basis-1/2">
                                <label className="pb-4 font-medium text-[0.9rem]">Your Email</label>
                                <input type="text" placeholder="Enter your email" className="border border-transparent placeholder-[#788293] text-white focus:outline-none bg-[#2c303b] p-3 pl-6  w-full focus:border-[#0f95d0]  " />
                            </div>
                        </div>
                        <div className="flex flex-col ">
                            <label className="pb-4 font-medium text-[0.9rem]">Your Message</label>
                            <textarea placeholder="Enter your message" className="h-40 w-full border border-transparent placeholder-[#788293] text-white focus:outline-none bg-[#2c303b] pl-6 pt-3 focus:border-[#0f95d0] "></textarea>
                        </div>
                        <div className="pt-10">
                            <button type="button" className="bg-[#4a6cf7] text-center w-45 font-semibold cursor-pointer hover:bg-[#3a6cf7] p-2  h-15">Submit Ticket</button>
                        </div>
                    </div>
                    <div className="basis-1/3 bg-[#4a494938] lg:p-10 p-5">
                        <h3 className="text-[1.4rem] font-bold pb-4 lg:pt-0 pt-5">Subscribe to receive future updates</h3>
                        <p className="text-[#788293] pb-10">Lorem ipsum dolor sited Sed ullam corper consectur adipiscing Mae ornare massa quis lectus.</p>
                        <hr className="text-[#52515196] pb-10" />
                        <div className="pb-4">
                            <input type="text" placeholder="Enter your name" className="border border-transparent placeholder-[#788293] text-white focus:outline-none bg-[#2c303b] p-3 pl-6  w-full focus:border-[#0f95d0] " />
                        </div>
                        <div className="pb-4">
                            <input type="text" placeholder="Enter your mail" className="border border-transparent placeholder-[#788293] text-white focus:outline-none bg-[#2c303b] p-3 pl-6  w-full focus:border-[#0f95d0] " />
                        </div>
                        <button type="submit" className="bg-[#4a6cf7]  text-center w-full font-semibold cursor-pointer hover:bg-[#3a6cf7] p-2  h-15">Subscribe</button>
                        <p className="text-[#788293] text-center pt-7">No spam guaranteed, So please don’t send any spam mail.</p>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Form