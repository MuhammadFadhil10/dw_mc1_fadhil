import React from 'react';
import { Container, Image } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { userData } from '../data/UserData';

const Profile = () => {
	const id = useParams();
	const profile = userData.filter((p) => p.id == id.id);
	const navigate = useNavigate();
	return (
		<Container className='d-flex flex-column '>
			<Image
				src={profile[0].image}
				width='200px'
				height='200px'
				className='rounded-pill shadow border border-danger'
			></Image>
			<h3>{profile[0].username}</h3>
			<div>
				<p>{profile[0].follower}</p>
				<p>{profile[0].following}</p>
			</div>
			<p onClick={() => navigate(-1)} style={{ cursor: 'pointer' }}>
				Back
			</p>
		</Container>
	);
};

export default Profile;
