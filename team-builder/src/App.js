import  React, { useState } from 'react';
import './App.css';
import Form from './components/Form.js';

const data = [
  {
    name: 'Jeremy Brady',
    email: 'jeremy.brady702@gmail.com',
    role: 'TL',
    id: 1
},
{
    name: 'Benita',
    email: 'Benita@nomail.com',
    role: 'student',
    id: 2
}
]

const App = () => {

  const [team, updateTeam] = useState(data);

  const removeTeamMember = (overboardMem) => {
    const newTeam = team.filter(member => {
      if (member.email !== overboardMem.email){
        return member;
      }
    });
    updateTeam(newTeam);
  }

  return (


    <div className = "App">
      <Form addTeam={updateTeam} team={team}/>

      {team.map((member) =>  <div className = "member-card">
                              
        <h3>Name: {member.name}  </h3>
        <p>Email: {member.email} </p>
        <p>Role:  {member.role}  </p>
        <button onClick={() => removeTeamMember(member)}> Remove </button>
      </div>)}
    </div>   
  );
}

export default App;