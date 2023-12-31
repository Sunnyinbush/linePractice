import React from 'react'
import liff from "@line/liff";
import Img from '../image/img.svg'
import './main.css';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import Toppage from './toppage';
import Foot from './foot'

class Userinput2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      userLineID: '',
      pictureUrl: ''
    };
  }

  componentDidMount = async() => {
    await liff.init({ liffId: '1657442367-JL8n6BYl' }).catch(err=>{throw err});
    if (liff.isLoggedIn()) {
      let getProfile = await liff.getProfile();
      this.setState({
        name: getProfile.displayName,
        userLineID: getProfile.userId,
        pictureUrl: getProfile.pictureUrl,
      });
    }
    else{
      liff.login();
    }
  }

  render() {
    console.log(this.state.userLineID)
    return (
      <div >
        <Toppage/>

        <div className="flex flex-col justify-center items-center ">
          <div className="relative bg-box p-4 rounded-xl w-[350px] h-68 justify-center items-center  ">
            <img  src={Img} className='h-20 w-20 mt-5 ml-[120px] ' alt={Img}/>
            <p className='justify-center font-md text-center text-blue text-[30px] mt-6'>เลือกรูปภาพที่คุณถูกใจที่สุด</p>
          </div>

          <Link to="/game" className="bg-krd hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4
             rounded-[24.5px] w-[50%] h-[50px] inline-flex items-center justify-center mt-[30px] ">
            <p className='text-white text-center'>เริ่มเลย</p>
          </Link>
        </div>

        <Foot/>
   
      </div>
    );
  }
}

export default Userinput2;
