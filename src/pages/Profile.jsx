import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { userData } from '../data/UserData';

const Profile = () => {
	const id = useParams();
	const profile = userData.filter((p) => p.id == id.id);
	const navigate = useNavigate();

	return (
		<div>
			<img src={profile[0].image}></img>
			<h3>{profile[0].username}</h3>
			<div>
				<p>{profile[0].follower}</p>
				<p>{profile[0].following}</p>
			</div>
			<p onClick={() => navigate(-1)} style={{ cursor: 'pointer' }}>
				Back
			</p>
		</div>
	);
};

export default Profile;
