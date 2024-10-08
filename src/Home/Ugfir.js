import React from 'react'
import Navbar from '../Components/Navbar'
import { FaArrowAltCircleRight } from 'react-icons/fa'
import { FaGraduationCap, FaRegClock } from 'react-icons/fa6'
import Footer from '../Components/Footer'
function Ugfir() {
  return (
    <div>
        <Navbar />
        <div className="mt-[88px] font-dmsans">
                <div className="bg-green-100">
                        <div className="p-5 flex"><span><a href="/" className="text-green-600 font-semibold hover:underline">Home</a></span> <span className="p-2 text-gray-500"><FaArrowAltCircleRight size={12}/></span> <a className="text-black font-semibold" href="/scholarship">Scholarship</a> <span className="p-2 text-gray-500"><FaArrowAltCircleRight size={12}/></span> <span className="text-black font-semibold">UGFIR</span></div>
                        <h2 className="md:text-5xl pb-4 font-semibold text-green-600 pt-8 text-center sm:text-3xl">Undergraduate Founder in Residence </h2>
                        
                </div> 
                <div className="mt-10 px-20 text-justify" id="content">
                           <div>Starting a business while juggling college life and preparing for post-graduation can be incredibly challenging. That’s where Nirmaan’s Founder In Residence (FIR) program steps in. This innovative initiative offers students not just a place to live but also a monthly stipend, freeing them to fully immerse themselves in their startup ventures. With this support, UG–FIR fellows can focus on their entrepreneurial dreams without the constant worry of financial constraints. Backed by our alumni and the A&CR office, the FIR program is designed to help aspiring founders thrive.</div>
                           <div className="mt-14">    
                                    <h2 className="md:text-2xl font-semibold text-green-600 text-center sm:text-3xl">Students supported by UGFIR</h2>
                                    {/* grid */}
                                    <div className="md:grid md:grid-cols-4 gap-10 mt-7 mb-2">
                                            <div className="border border-t-4 border-green-400">
                                                    <div className="px-3 py-2">
                                                            <div className="m-1 text-sm">Year: 2024</div>   
                                                            <div className="text-5xl flex justify-center items-center text-gray-500 font-semibold py-5">16</div>
                                                            <div className="text-sm font-semibold text-gray-500">
                                                                            
                                                            </div>
                                                    </div>
                                            </div>
                                    </div>
                                    {/* jhdk */}

                                    <div className="mt-20 mb-10" id="ugfir">
                                                <h2 className="md:text-2xl font-semibold text-green-600 text-center sm:text-3xl">Stipend Details & Duration</h2>
                                                <div className="md:grid md:grid-cols-2 gap-5 mt-10">
                                                    <center>
                                                            <div className="">
                                                                <div className="border h-[140px] w-[140px] rounded-full bg-gray-100">
                                                                        <div className="flex justify-center items-center pt-[33px]" style={{color: '#66bb6a'}}><FaGraduationCap size={70}/></div>
                                                                </div>
                                                                <div className="pt-2 text-xl font-semibold">Monthly Stipend</div>
                                                                <div className="text-md">₹20,000</div>
                                                        </div>
                                                    </center>
                                                    <center>
                                                            <div className="">
                                                                <div className="border h-[140px] w-[140px] rounded-full bg-gray-100 ">
                                                                        <div className="flex justify-center items-center pt-[33px]" style={{color: '#66bb6a'}}><FaRegClock size={70}/></div>
                                                                </div>
                                                                <div className="text-xl pt-2 font-semibold">Period</div>
                                                                <div className="text-md">6 Months</div>
                                                        </div>
                                                    </center>
                                                </div>
                                    </div>
                           </div>
                </div>

        </div>
        <Footer />
    </div>
  )
}

export default Ugfir;
