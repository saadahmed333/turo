import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faUser,
  faCar,
  faKey,
  faHeadphones,
  faLegal,
  faTools,
  faCalculator,
  faPortrait,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./header.css";
import Dropdown from "react-bootstrap/Dropdown";
function Profile() {
  return (
    <>
    <Dropdown className="dropdowns">
      <Dropdown.Toggle
        variant="success"
        className="options"
        id="dropdown-basic"
      >
        <FontAwesomeIcon icon={faBars} className="logos" />
        <FontAwesomeIcon icon={faUser} className="logos" />
      </Dropdown.Toggle>

      <Dropdown.Menu className="menu">
        <Dropdown.Item href="#/action-1" className="items">
        <button type="button"
        className=" text-[#414143] text-[16px] flex justify-start w-[100%]  rounded  focus:outline-none  transition duration-150 ease-in-out"
        data-bs-toggle="modal" data-bs-target="#exampleModalScrollable">
        Login
      </button>
        </Dropdown.Item>
        <Dropdown.Item href="#/action-2" className="items">
          SignUp
        </Dropdown.Item>
        <Dropdown.Item href="#/action-3" className="becomeHr items">
          <FontAwesomeIcon icon={faCar} className="logos" />
          Become a host
        </Dropdown.Item>
        <Dropdown.Item href="#/action-4" className="items">
          <FontAwesomeIcon icon={faKey} className="logos" />
          How Turo Works
        </Dropdown.Item>
        <Dropdown.Item href="#/action-5" className="items">
          <FontAwesomeIcon icon={faHeadphones} className="logos" />
          Contact supports
        </Dropdown.Item>
        <Dropdown.Item href="#/action-6" className="items">
          <FontAwesomeIcon icon={faLegal} className="logos" />
          Legals
        </Dropdown.Item>
        <Dropdown.Item href="#/action-7" className="items">
          <FontAwesomeIcon icon={faPortrait} className="logos" />
          Insurance & protection
        </Dropdown.Item>
        <Dropdown.Item href="#/action-8" className="items">
          <FontAwesomeIcon icon={faTools} className="logos" />
          Host tools
        </Dropdown.Item>
        <Dropdown.Item href="#/action-8" className="items">
          <FontAwesomeIcon icon={faCalculator} className="logos" />
          Carculator
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>


    <div>
      <div className="modal fade fixed top-0 left-0 hidden w-full h-full pb-[100px] outline-none overflow-x-hidden overflow-y-auto"
        id="exampleModalScrollable" tabindex="-1" aria-labelledby="exampleModalScrollableLabel" aria-hidden="false">
        <div className="modal-dialog modal-dialog-scrollable relative w-auto pointer-events-none">
          <div
            className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div
              className="modal-header flex flex-shrink-0 items-center justify-between p-4">
              <h5 className="text-[30px] mt-[20px] text-center flex justify-center w-[100%] leading-normal text-gray-800" id="exampleModalScrollableLabel">
                Welcome Back
              </h5>
            </div>
            <div className="pb-[50px] flex flex-col pl-[30px] pr-[30px]">
                <label htmlFor="" className="border-0">Email</label>
                <input type="email" className="border h-[30px] " />
                <div className="flex justify-between items-center">
                <label htmlFor="" className="mt-[10px]">Password</label>
                <span className="text-[12px] mt-[10px] text-[#593cfb] cursor-pointer">Forgot your password?</span> 
                </div>
                <input type="password" className="border h-[30px] "/>
                <button className="bg-[#593cfb] mt-[20px] h-[50px] text-[white] font-bold text-[20px]">Log in</button>
             </div>
          </div>
        </div>
      </div>
      </div>
        </>
    
  );
}

export { Profile };



// function Modal() {
//     return (
//       <div>
//       <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
//         id="exampleModalScrollable" tabindex="-1" aria-labelledby="exampleModalScrollableLabel" aria-hidden="true">
//         <div className="modal-dialog modal-dialog-scrollable relative w-auto pointer-events-none">
//           <div
//             className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
//             <div
//               className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
//               <h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalScrollableLabel">
//                 Modal title
//               </h5>
//               <button type="button"
//                 className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
//                 data-bs-dismiss="modal" aria-label="Close"></button>
//             </div>
//             <div className="modal-body relative p-4">
//               <p>This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the predefined max-height of modal, content will be cropped and scrollable within the modal.</p>
//               <p>This content should appear at the bottom after you scroll.</p>
//             </div>
//             <div
//               className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
//               <button type="button"
//                 className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
//                 data-bs-dismiss="modal">
//                 Close
//               </button>
//               <button type="button"
//                 className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1">
//                 Save changes
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       </div>
//     )
// }