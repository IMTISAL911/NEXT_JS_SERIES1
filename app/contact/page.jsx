"use client";
export default function Contact() {
    return (
        <div className=" h-screen bg-purple-500">
            <div className="flex justify-end gap-[2%]  mr-[5%] flex-wrap">
                <a className="text-white hover:text-gray-200 transition-colors duration-200 font-sans font-bold text-lg mt-[2%]" href="#home">Home</a>
                <a className="text-white hover:text-gray-200 transition-colors duration-200 font-sans font-bold text-lg mt-[2%]" href="#about">About</a>
                <a className="text-white hover:text-gray-200 transition-colors duration-200 font-sans font-bold text-lg mt-[2%]" href="#contact">Contact</a>
                <a className="text-white hover:text-gray-200 transition-colors duration-200 font-sans font-bold text-lg mt-[2%]" href="#services">Services</a>
            </div>
        </div>
    )
}
