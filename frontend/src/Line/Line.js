import React, { Component }  from 'react';
import { Link } from 'react-router-dom';
import Logo from '../image/KrD_log2.svg';
import SearchComponent from './search';
import fu from '../image/fu.png'
import all from '../image/all.svg'
import kao from '../image/Kao.png'
import arty from '../image/Art.png'
import Pun from '../image/Pun.png'
import tt from '../image/tt.png'
import liff from '@line/liff/dist/lib';

class Line extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      userLineID: '',
      pictureUrl: ''
    };
  }

  componentDidMount = async() => {
    await liff.init({ liffId: `1657442367-op7nlxeV` }).catch(err=>{throw err});
    if (liff.isLoggedIn()) {
      let getProfile = await liff.getProfile();
      this.setState({
        name: getProfile.displayName,
        userLineID: getProfile.userId,
        pictureUrl: getProfile.pictureUrl,
      });
    }else{
      liff.login();
    }
  }

render() {
  // Make sure that the path is redirect to the new one properly
  console.log(this.state.userLineID)
  
  return (
    <div >
    <div className='overflow-y-auto h-[400px] lg:h-[650px]' >
        <div className='justify-center pb-4' >

            <img  src={Logo} className=' h-[30px] w-35 mx-8 mt-10  ' alt={Logo}/>
          
            <p className='font-semibold text-[36px] ml-8 pb-4 text-lblack mt-2'>ใครจะเล่นเกมบ้าง~?</p>
            <SearchComponent/>
    

            
            <div className="flex items-center mb-4 mt-4">

            <input type="checkbox" className="w-6 h-6 rounded-full bg-G text-krd mx-5" checked />

              <img  src={all}  className='h-[43px] inline-flex rounded-[300px] mr-3'></img>
              <p className='mr-10  text-[16px]'>All</p>
   
             </div>

             <hr className='w-[70%] ml-[20%]'/>
            
             <div className="flex items-center mb-4 mt-4">

              <input type="checkbox" className="w-6 h-6 rounded-full bg-G text-krd mx-5"  checked/>

                <img  src={this.state.pictureUrl}  className='h-[43px] inline-flex rounded-[300px] mr-3'></img>
                <p className='mr-10  text-[16px]'>{this.state.name}</p>
              </div>

              <hr className='w-[70%] ml-[20%]'/>

            <div className="flex items-center mb-4 mt-4">

            <input type="checkbox" className="w-6 h-6 rounded-full bg-G text-krd mx-5" checked />

              <img  src={fu}  className='h-[43px] inline-flex rounded-[300px] mr-3'></img>
              <p className='mr-10  text-[16px]'>Fu</p>
             </div>

             <hr className='w-[70%] ml-[20%]'/>

             <div className="flex items-center mb-4 mt-4">

              <input type="checkbox" className="w-6 h-6 rounded-full bg-G text-krd mx-5" checked />

                <img  src={Pun}  className='h-[43px] inline-flex rounded-[300px] mr-3'></img>
                <p className='mr-10  text-[16px]'>Pun</p>
              </div>

              <hr className='w-[70%] ml-[20%]'/>


              <div className="flex items-center mb-4 mt-4">

                <input type="checkbox" className="w-6 h-6 rounded-full bg-G text-krd mx-5" checked />

                  <img  src={arty}  className='h-[43px] inline-flex rounded-[300px] mr-3'></img>
                  <p className='mr-10  text-[16px]'>Arty</p>
                </div>

                <hr className='w-[70%] ml-[20%]'/>

                <div className="flex items-center mb-4 mt-4">

                  <input type="checkbox" className="w-6 h-6 rounded-full bg-G text-krd mx-5" checked />

                    <img  src={tt}  className='h-[43px] inline-flex rounded-[300px] mr-3'></img>
                    <p className='mr-10  text-[16px]'>Tt</p>
                  </div>

                  <hr className='w-[70%] ml-[20%]'/>

                  </div>






            <div className="absolute bottom-0 w-full">
            <div className="relative shadow-3t p-4 rounded-t-[30px] h-[150px]">

            <div className="relative inline-block ml-4">
              <img src={this.state.pictureUrl} className="h-12 w-12 rounded-full" alt="Profile" />
              <button type="button" className="absolute top-0 right-0 mb-5 ml-4 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset">
                <svg className="h-3 w-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="relative inline-block ml-4">
              <img src={fu} className="h-12 w-12 rounded-full" alt="Profile" />
              <button type="button" className="absolute top-0 right-0 mb-5 ml-4 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset">
                <svg className="h-3 w-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

           
            <div className="relative inline-block ml-4">
              <img src={Pun} className="h-12 w-12 rounded-full" alt="Profile" />
              <button type="button" className="absolute top-0 right-0 mb-5 ml-4 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset">
                <svg className="h-3 w-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

           
            <div className="relative inline-block ml-4">
              <img src={arty} className="h-12 w-12 rounded-full" alt="Profile" />
              <button type="button" className="absolute top-0 right-0 mb-5 ml-4 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset">
                <svg className="h-3 w-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

           
            <div className="relative inline-block ml-4">
              <img src={tt} className="h-12 w-12 rounded-full" alt="Profile" />
              <button type="button" className="absolute top-0 right-0 mb-5 ml-4 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset">
                <svg className="h-3 w-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

           
          



              <Link to="/userinput" className="bg-krd hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4
               rounded-[12px] w-full h-[50px] inline-flex items-center justify-center mt-[20px]">
                <p className='text-white text-center'>สร้างเกมโหมดทันใจ</p>
              </Link>
            </div>
          </div>




        </div>
 

     

   
        </div>
  )
}
}


export default Line;