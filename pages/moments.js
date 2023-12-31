import React, { useEffect, useState } from 'react';
import { getMoments } from '../api/momentData';
import { useAuth } from '../utils/context/authContext';
import MomentCard from '../components/cards/MomentCard';
import MomentSearchBar from '../components/searchbars/MomentSearchBar';

function ShowMoments() {
  const [moments, setMoments] = useState([]);

  const { user } = useAuth();

  const getAllTheMoments = () => {
    getMoments(user.uid).then(setMoments);
  };

  useEffect(() => {
    getAllTheMoments();
  }, []);

  return (
    <>
      <div className="text-center my-4">
        <MomentSearchBar className="navSearch" />
        <div className="d-flex flex-wrap">
          {moments.map((moment) => (
            <MomentCard key={moment.firebaseKey} momentObj={moment} onUpdate={getAllTheMoments} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ShowMoments;
