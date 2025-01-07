import React, { useState, useEffect } from 'react';

const EditUserModal = ({ user, onSave, onCancel }) => {
  const [formData, setFormData] = useState(user);

  // Update form data when user prop changes
  useEffect(() => {
    setFormData(user);
  }, [user]);

  // code for set form data
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData); // Pass updated form data
  };

  return (
    <div className="modal">
      <div className="modal-content h-[300px]">
        <h2 className='font-bold '>Edit User</h2>
        <form onSubmit={handleSubmit}>
         <div className='text-center text-xl py-2 border-b'>
         <span className='font-bold'>Name : </span>
         <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
          />
         </div>
          <div className='text-center text-xl py-2 border-b'>
            <span className='font-bold'>E-Mail : </span> 
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
          </div>
          <div className='text-center text-xl py-2 border-b'>
            <span className='font-bold'>Phon : </span>
          <input
            type="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
          />
          </div>
          <div className='text-center text-xl py-2 border-b'>
           <span className='font-bold'> Website :  </span>
          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleChange}
            placeholder="Website"
          />
          </div>
          <div className='px-3 flex justify-between py-3'>
            <button type="submit " className='text-xl border py-2 text-white bg-green-500 rounded-lg px-3'>Save</button>
            <button type="button " className='text-xl border py-2 bg-red-500 text-white rounded-lg px-3' onClick={onCancel}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUserModal;