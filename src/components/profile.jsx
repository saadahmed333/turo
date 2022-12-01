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
  faXmark,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./header.css";
import Dropdown from "react-bootstrap/Dropdown";
import { ThemeButton } from "./button";
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
            <button
              type="button"
              className=" text-[#414143] text-[16px] flex justify-start w-[100%]  rounded  focus:outline-none  transition duration-150 ease-in-out"
              data-bs-toggle="modal"
              data-bs-target="#exampleModalScrollable"
            >
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

    {/* Start modal one */}
      <div id="modall">
        <div
          className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
          id="exampleModalScrollable"
          tabindex="-1"
          aria-labelledby="exampleModalScrollableLabel"
          aria-hidden="false"
        >
          <div className="modal-dialog modal-dialog-scrollable relative w-auto pointer-events-none">
            <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
              <div className="text-end pr-[40px] pt-[10px] cursor-pointer">
                <button
                  type="button"
                  class="inline-block font-medium text-xs transition duration-150 ease-in-out"
                  data-bs-dismiss="modal"
                >
                <FontAwesomeIcon icon={faXmark} className="h-[30px] font-bold" />
                </button>
              </div>
              <div className="modal-header flex flex-shrink-0 items-center justify-between  border-b border-gray-200 rounded-t-md">
                <h5
                  className="text-[30px]  leading-normal font-semibold w-[100%] flex justify-center text-gray-800"
                  id="exampleModalScrollableLabel"
                >
                  Welcome Back
                </h5>
              </div>
              <div className="modal-body relative p-4">
                <div className="p-[20px]">
                  <label htmlFor="">Email</label>
                  <br />
                  <input type="email" className="border w-[100%] h-[35px]" />
                  <br />
                  <div className="flex justify-between items-center ">
                    <label htmlFor="" className="mt-[10px]">
                      Password
                    </label>
                    <span className="mt-[10px] text-[12px] text-[#593cfb]">
                      Forgot your Password
                    </span>
                  </div>
                  <input type="password" className="border w-[100%] h-[35px]" />
                  <button className="bg-[#593cfb] mt-[20px] h-[50px] w-[100%] text-[white] font-bold text-[20px]">
                    Log in
                  </button>
                </div>
                <div className="p-[30px]">
                  <span className="flex justify-center mb-[10px]">or</span>
                  <div>
                    <ThemeButton title="Continue with Apple" />
                    <ThemeButton title="Continue with Google" />
                    <ThemeButton title="Continue with Facebook" />
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <span>Don’t have an account?</span>
                  <button className="ml-[10px] font-semibold border-[1px] border-black px-[10px] py-[5px]">
                    Sign up
                  </button>
                </div>
                <div className="text-[12px] p-[30px] flex justify-center">
                  <span>
                    This site is protected by reCAPTCHA and the Google{" "}
                    <a href="#" className="text-[#593cfb]">
                      Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-[#593cfb]">
                      Terms of Service
                    </a>{" "}
                    apply.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    {/* End modal one */}

    </>
  );
}

export { Profile };
