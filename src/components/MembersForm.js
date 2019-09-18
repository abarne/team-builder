import React, { useState } from 'react';

const MembersForm = (props) => {
	const [ member, setMember ] = useState({
		name: '',
		email: '',
		role: ''
	});

	const handleChanges = (event) => {
		setMember({ ...member, [event.target.name]: event.target.value });
	};
	const submitForm = (event) => {
		event.preventDefault();
		props.addNewMember(member);
		setMember({ name: '', email: '', role: '' });
	};

	return (
		<form onSubmit={submitForm}>
			<label htmlFor="name">Name: </label>
			<input id="name" type="text" name="name" onChange={handleChanges} value={member.name} />

			<label htmlFor="email">Email: </label>
			<input id="email" type="text" name="email" onChange={handleChanges} value={member.email} />

			<label htmlFor="role">Role: </label>
			<input id="role" type="text" name="role" onChange={handleChanges} value={member.role} />

			<label htmlFor="aboutme">About Me: </label>
			<textarea id="aboutme" type="text" name="aboutme" onChange={handleChanges} value={member.aboutme} />

			<button type="submit">Add Member</button>
		</form>
	);
};

export default MembersForm;
