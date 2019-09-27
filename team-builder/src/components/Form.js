import React, { useState } from "react";


function Form({ team, addTeam }) {

    const [member, setMember] = useState({ name:"", email:"", role: "" });

    const handleChange = event => {

        const updateMember = {...member, [event.target.name]: event.target.value};
        setMember(updateMember)
    }



    const handleSubmit = event => {
        event.preventDefault();
        console.log("team member", member);
        addTeam([...team, member]);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                name
                <input type="text" name="name" value={member.name}
                onChange={handleChange} required />
            </label>
            <label>
                Email
                <input type="email" name="email" value={member.email}
                onChange={handleChange}/>
            </label>
            <label>
                Role 
                <input type="text" name="role" value={member.role}
                onChange={handleChange}/>
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

export default Form;