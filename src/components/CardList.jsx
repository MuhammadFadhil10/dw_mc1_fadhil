import React from 'react';
import { useNavigate } from 'react-router-dom';
import { userData } from '../data/UserData';

import Style from './CardList.module.css';

const CardList = () => {
	const navigate = useNavigate();
	return userData?.map((item) => {
		return (
			<div
				key={item.id}
				className={Style.container}
				onClick={() => navigate(`/profile/${item.id}`)}
			>
				<div>
					<img src={item.image} alt='profile' className={Style.profile}></img>
				</div>
				<div>
					<h3>{item.username}</h3>
					<h3>Followers: {item.follower}</h3>
				</div>
			</div>
		);
	});
};
export default CardList;
