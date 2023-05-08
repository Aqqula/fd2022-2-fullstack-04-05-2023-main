import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getOneUser } from '../../store/usersSlice';

const UserProfile = () => {
  const dispatch = useDispatch();
  const { idUser } = useParams();
  useEffect(() => {
    dispatch(getOneUser(Number(idUser)));
  }, [idUser, dispatch]);
  const { currentUser, error, isFetching } = useSelector(
    (state) => state.users
  );
  return (
    <>
    {isFetching && <p>Loading...</p>}
    {error && <p>{error}</p>}
      {currentUser && (
        <div>
          Profile:<h2>{currentUser.email}</h2> <h3>{currentUser.firstName}</h3>{' '}
        </div>
      )}
    </>
  );
};

export default UserProfile;
