import React, { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineLogin,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { MdOutlineLocalMovies } from "react-icons/md";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useLoginMutation } from "../../redux/api/users";
import { logout } from "../../redux/features/auth/authSlice";

const Navigation = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutApiCall] = useLoginMutation();
  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 bg-[#0f0f0f] border w-[30%] px-[4rem] rounded">
      <section className="flex justify-between items-center">
        {/*Section-1*/}
        <div className="flex justify-center items-center mb-[2rem]">
          <Link
            to="/"
            className="flex items-center transition-transform transform hover:translate-x-2"
          >
            <AiOutlineHome className="mr-2 mt-[2rem]" size={26} />
            <span className="hidden nav-item-name mt-[3rem]">Home</span>
          </Link>
          <Link className="flex items-center transition-transform transform hover:translate-x-2 ml-[1rem]">
            <MdOutlineLocalMovies className="mr-2 mt-[2rem]" size={26} />
            <span className="hidden nav-items-name mt-[3rem]">SHOP</span>
          </Link>
        </div>
        {/*Section-2*/}
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="text-grey-800 focus:outline-none"
          >
            {userInfo ? (
              <span className="text-white">{userInfo.username}</span>
            ) : (
              <></>
            )}
          </button>
        </div>
      </section>
    </div>
  );
};

export default Navigation;
