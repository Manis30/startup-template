function About() {
    return (
        <>
            <div className="bg-[#1e232e] text-white flex justify-center items-center lg:px-80  lg:py-40 py-20">
                <div className="px-5">
                    <h1 className="font-extrabold  text-[1.9rem] leading-tight lg:text-[2.9rem]  text-center pb-5">Free and Open-Source Next.js Template for Startup & SaaS</h1>
                    <h6 className="text-center text-[#788293] leading-[2rem] text-[1.1rem]">Startup is free Next.js template for startups and SaaS business websites comes with all the essential pages, components, and sections you need to launch a complete business website, built-with Next 13.x and Tailwind CSS.</h6>
                    <div className="pt-20 flex justify-center">
                        <button className="flex bg-[#4a6cf7] h-15 rounded text-[white] hover:bg-[#2b5cf6] cursor-pointer font-semibold w-38 justify-center items-center">🔥
                            Get Pro</button>
                        <button className="ml-5 flex bg-[#353943] h-15 rounded text-white font-semibold cursor-pointer w-45 justify-center items-center hover:bg-[#333543]">Start on GitHub</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default About
