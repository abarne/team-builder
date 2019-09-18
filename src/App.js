import React, { useState } from 'react';
import ReactDom from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Members from './components/Members';
import MembersForm from './components/MembersForm';

function App() {
	const [ members, setMembers ] = useState([
		{
			id: 1,
			name: 'Adam Barnett',
			email: 'celius377@gmail.com',
			role: 'Front-end',
			aboutme:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, molestiae expedita. Eum quo excepturi est harum itaque voluptatibus accusamus quae, fugit quod laboriosam fuga, culpa vitae iusto praesentium qui deleniti? '
		}
	]);
	const addNewMember = (member) => {
		const newMember = {
			id: Date.now(),
			name: member.name,
			email: member.email,
			role: member.role,
			aboutme: member.aboutme
		};
		setMembers([ ...members, newMember ]);
	};

	return (
		<div className="App">
			<h1>Team Members</h1>
			<MembersForm addNewMember={addNewMember} />

			<Members member={members} />
		</div>
	);
}

export default App;
