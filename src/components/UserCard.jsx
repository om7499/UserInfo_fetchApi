import React from 'react';


import { FaRegHeart } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { MdDelete, MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { FaHeart } from "react-icons/fa";


const UserCard = ({ user, onEdit, onDelete ,onFavorite,isFavorite}) => {
    const avatarUrl = `https://api.dicebear.com/6.x/avataaars/svg?seed=${encodeURIComponent(user.name + user.id)}`
    
console.log(user.name)
  return (
    <div className="user-card text-start px-4 py-5 shadow-xl mt-12">
      <img src={avatarUrl} alt={`${user.name}'s avatar`} />
      <div className="py-3">
        <h3 className="text-lg font-bold">{user.name}</h3>
        <div className="flex items-center">
         <p className='p-2'> <MdEmail /> </p>{user.email}
        </div>
        <div className="flex items-center">
         <p className='p-2'> <FaPhoneAlt /></p> {user.phone}
        </div>
        <div className="flex items-center" ><p className='p-2'><TbWorld /></p>
          <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">
            {user.website}
          </a>
        </div>
      </div>
      <div className="text-2xl flex justify-around border p-3 shadow-sm">
        
         <div>
          <button
            className="btn text-red-700"
            onClick={() => onFavorite(user.id)} // Call the onFavorite handler
          >
            {isFavorite ? <FaHeart /> : <FaRegHeart />} {/* Show filled or empty heart */}
          </button>
        </div>
        <div>
            <button className="btn"
            onClick={() => onEdit(user)}>
            <CiEdit />
           </button>
        </div>
        <div>
         <button
          className="btn text-gray-600"
          onClick={() => onDelete(user.id)}>
          <MdDelete />
          </button>
          </div>
      </div>
    </div>
  );
};

export default UserCard;