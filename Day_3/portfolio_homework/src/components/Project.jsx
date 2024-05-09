import React from 'react';
import '../App.css';

function projectTile ({img, imgAlt, projectName, projectDescription}) {
    return (
        <div className="project-card">
            <img src={img} alt={imgAlt} />
            <h3>{projectName}</h3>
            <p>{projectDescription}</p>
        </div>
    );
}

export default projectTile;