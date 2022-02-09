import React, { useState } from 'react';

function NewVideoForm({ onNewMovie }) {
    const [formData, setFormData] = useState({
        title: "",
        genre_id: "",
        rented: false
    })

    function handleChange(e) {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function formSubmit(e) {
        e.preventDefault()
        if (formData.genre_id === "") {
            alert("Please choose a genre for your movie.")
        } else {
        fetch(`http://localhost:9292/movies`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: formData.title,
                genre_id: formData.genre_id,
                rented: formData.rented
            }),
        })
            .then(r => r.json())
            .then((newMovie) => onNewMovie(newMovie))
        }
    }

    return (
        <div className="container">
            <form onSubmit={formSubmit}>
                <label>Title  
                    <input type="text" name="title" value={formData.title} onChange={handleChange}/>
                </label>
                <label> Genre 
                    <select name="genre_id" value={parseInt(formData.genre_id)} onChange={handleChange}>
                        <option value="">Choose One...</option>
                        <option value="1">Action</option>
                        <option value="2">Comedy</option>
                        <option value="3">Drama</option>
                        <option value="4">Sci-Fi</option>
                    </select>
                </label>
                <input id="submit-button" type="submit" value="submit"/>
            </form>
        </div>
    )
}

export default NewVideoForm;