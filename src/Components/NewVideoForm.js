import React, { useEffect, useState } from 'react';

function NewVideoForm({ onNewMovie }) {
    const [genres, setGenres] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:9292/genres')
          .then(r => r.json())
          .then(data => setGenres(data))
      }, [])

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
            formData.title = ""
            formData.genre_id = ""
        }
    }

    return (
        <div className="container">
            <form onSubmit={formSubmit}>
                <label>Title  
                    <input type="text" name="title" value={formData.title} onChange={handleChange}/>
                </label>
                <label> Genre 
                    <select name="genre_id" value={parseInt(formData.genre_id + 1)} onChange={handleChange}>
                        <option value="">Choose One...</option>
                        {genres.map((genre) => <option value={genre.id}>{genre.name}</option>)}
                    </select>
                </label>
                <input id="submit-button" type="submit" value="submit"/>
            </form>
        </div>
    )
}

export default NewVideoForm;