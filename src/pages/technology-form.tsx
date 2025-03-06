import React, { useState } from 'react';

const TechnologyForm = () => {
    const [technology, setTechnology] = useState('');
    const [tags, setTags] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Technology:', technology);
        console.log('Tags:', tags);

        fetch("https://hook.eu2.make.com/p8xp4r3e4rd7jfh938yi33vzk5bb3e21", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                tech: technology,
                tags: tags
            })
        })
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="technology">Technology Name:</label>
                <input
                    type="text"
                    id="technology"
                    value={technology}
                    onChange={(e) => setTechnology(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="tags">Tags:</label>
                <input
                    type="text"
                    id="tags"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default TechnologyForm;