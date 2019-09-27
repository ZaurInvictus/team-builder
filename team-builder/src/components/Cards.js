import React from 'react'

function Cards({ name, email, role }) {

    return(
        <div className="card-border">
            <h1>{name}</h1>
            <h3>{role}</h3>
            <p>{email}</p>
        </div>
    )
}

export default Cards;