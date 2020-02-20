import React from 'react';

function ChangeName( props ){

    function handleSubmit (event) {
        event.preventDefault();
        props.handleName( event.target.newName.value );
    }

    return(
        <form onSubmit= {(event) => handleSubmit(event)}>
            <label> Enter your name :</label>
            <input name="newName" type="text" />

            <button type="submit">
                Change name
            </button>
        </form>
    )
}

export default ChangeName;