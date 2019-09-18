import React, { useState } from 'react';

const Members = (props) => {
	const [ show, setShow ] = useState(true);

	return (
		<div className="member-list">
			{props.member.map((member) => (
				<div className="member" key={member.id}>
					<h1>{member.name}</h1>
					<h3>{member.email}</h3>
					<h3>{member.role}</h3>
					<h3>About me:</h3>
					<h3>{member.aboutme}</h3>
					<button>Remove</button>
				</div>
			))}
		</div>
	);
};

export default Members;
