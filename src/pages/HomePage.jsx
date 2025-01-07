import React, { useState, useEffect } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';
import UserCard from '../components/UserCard';
import EditUserModal from '../components/EditUserModal';

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null); // Track the user being edited
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  // Function to handle deletion of a user
  const handleDeleteUser = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  // Function to handle the updated user info
  const handleEditUser = (updatedUser) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
    setEditingUser(null); // Close the modal after saving
  };

  // Function to open the Edit Modal
  const handleEdit = (user) => {
    console.log('Editing user:', user);
    setEditingUser(user);
  };
   // Function to handle favoriting users
   const handleFavorite = (id) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(id)) {
        return prevFavorites.filter((userId) => userId !== id); // Remove from favorites
      }
      return [...prevFavorites, id]; // Add to favorites
    });
  };
  ; // User being edited
  console.log('Editing user:', editingUser);


  return (
    <div>
     <div className='fixed w-full'> <h1 className='text-center p-3 text-2xl bg-blue-500 text-white font-bold '>Users Profiles</h1></div>
    <div className="user-grid row">
      {users.length === 0 ? (
        <LoadingSpinner />
      ) : (
        users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onEdit={handleEdit}
            onDelete={handleDeleteUser}
            onFavorite={handleFavorite}
            isFavorite={favorites.includes(user.id)}
          />
        ))
      )}
      {editingUser && (
        <EditUserModal
          user={editingUser}
          onSave={handleEditUser}
          onCancel={() => setEditingUser(null)}
        />
      )}
      
    </div>
    </div>
  );
};

export default HomePage;