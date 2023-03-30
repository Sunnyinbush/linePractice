import React from 'react'
import mainLogo from'../image/KrD_log.svg';
import topimg from '../image/top_image.png';
import { Link } from 'react-router-dom';


import './main.css';
export default function Urchoice2() {
  return (
    <div>
            <div className='flex flex-col justify-center items-center h-screen'>
            
                <div className='justify-center max-w-screen-lg   mx-auto pb-4' >
                    <img src={topimg} className='absolute top-42 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-35 w-50 ' alt={topimg}/>

                    <img  src={mainLogo} className='h-40 w-35 mt-10 ' alt={mainLogo}/>

                <h1 className='font-medium text-2xl relative -mt-5 text-center'>โหมดตามใจ</h1>
                </div>

              
                <div className="relative bg-box p-4 rounded-[30px] w-[100%]  h-[100%]">

                        <div>
                            <p className='text-blue ml-3'>ประเภทอาหาร</p>
                        </div>

                            <div className='mt-4'>
                                <div className='grid flex-col grid-cols-2 gap-4'>
                            
                                        <div className="flex items-center ">
                                            <input type="checkbox" className="w-5 h-5 rounded bg-box text-krd mx-5"  />
                                            <p>อาหารญี่ปุ่น</p>
                                        </div>
                                        <div className="flex items-center  ">
                                            <input type="checkbox" className="w-5 h-5 rounded bg-box text-krd mx-5"  />
                                            <p>อาหารจานด่วน</p>
                                        </div>
                                        <div className="flex items-center  ">
                                            <input type="checkbox" className="w-5 h-5 rounded bg-box text-krd mx-5"  />
                                            <p>อาหารไทย</p>
                                        </div>
                                        <div className="flex items-center  ">
                                            <input type="checkbox" className="w-5 h-5 rounded bg-box text-krd mx-5"  />
                                            <p>Omakase</p>
                                        </div>
                                        <div className="flex items-center  ">
                                            <input type="checkbox" className="w-5 h-5 rounded bg-box text-krd mx-5"  />
                                            <p>อาหารฝรั่ง</p>
                                        </div>
                                        <div className="flex items-center  ">
                                            <input type="checkbox" className="w-5 h-5 rounded bg-box text-krd mx-5"  />
                                            <p>อาหารคลีน</p>
                                        </div>
                                        <div className="flex items-center  ">
                                            <input type="checkbox" className="w-5 h-5 rounded bg-box text-krd mx-5"  />
                                            <p>บุฟเฟ่ต์</p>
                                        </div>
                                        <div className="flex items-center  ">
                                            <input type="checkbox" className="w-5 h-5 rounded bg-box text-krd mx-5"  />
                                            <p>เครื่องดื่ม</p>
                                        </div>
                                        <div className="flex items-center  ">
                                            <input type="checkbox" className="w-5 h-5 rounded bg-box text-krd mx-5"  />
                                            <p>อาหารจีน</p>
                                        </div>
                                        
                                        <div className="flex items-center  ">
                                            <input type="checkbox" className="w-5 h-5 rounded bg-box text-krd mx-5"  />
                                            <p>ของหวาน</p>
                                        </div>
                                        <div className="flex items-center  ">
                                            <input type="checkbox" className="w-5 h-5 rounded bg-box text-krd mx-5"  />
                                            <p>ได้ทุกอย่าง</p>
                                        </div>
                                        
                                </div>

                            </div>
                   
                        <div className='mt-6'>
                            <p className='text-blue ml-3'>บรรยากาศร้านอาหาร</p>
                                <div className='mt-4'>
                                    <div className='grid flex-col grid-cols-2 gap-4'>

                                        <div className="flex items-center ">
                                            <input type="checkbox" className="w-5 h-5 rounded bg-box text-krd mx-5"  />
                                            <p>ร้านออกเดท</p>
                                        </div>
                                    
                                        
                                        <div className="flex items-center ">
                                            <input type="checkbox" className="w-5 h-5 rounded bg-box text-krd mx-5"  />
                                            <p>ร้านครอบครัว</p>
                                        </div>
                                    
                                    </div>
                                </div>
                        </div>
                    <div className='mt-[10px] justify-center text-center'>   
                    <Link to="/" className="bg-krd hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4
                        rounded-[24.5px] w-[50%] h-[50px] inline-flex items-center justify-center mt-[30px] ">
                            <p className='text-white text-center'>เริ่มเลย</p>
                    </Link>


                    </div>
   
                </div>




            </div>
       
    </div>
  )
}
