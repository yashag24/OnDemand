import React, { useState, useEffect } from 'react';
import { fireDB } from '../../fireabase/FirebaseConfig';

function Profile() {
  const [profile, setProfile] = useState({
    name: '',
    phoneNumber: '',
    address: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const profileRef = fireDB.collection('profiles').doc('profileId'); // Adjust this according to your database structure
        const doc = await profileRef.get();
        if (doc.exists) {
          setProfile(doc.data());
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error getting document:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run effect only once on component mount

  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {profile.name}</p>
      <p>Phone Number: {profile.phoneNumber}</p>
      <p>Address: {profile.address}</p>
    </div>
  );
}

export default Profile;