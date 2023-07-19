import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import './Exercise.css';

function ExerciseVideoList() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        axios.get('https://wger.de/api/v2/exercise/')
            .then((response) => {
                const exerciseNames = response.data.results.reduce((names, exercise) => {
                    names[exercise.id] = exercise.name;
                    return names;
                }, {});
                axios.get('https://wger.de/api/v2/video/')
                    .then((response) => {
                        const videos = response.data.results.map(video => ({
                            ...video,
                            name: exerciseNames[video.exercise_base]
                        }));
                        setVideos(videos);
                    });
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
            });
    }, []);

    return (
        <div className="container mt-5">
            <h1 className="mb-5 text-center">Exercise Library</h1>
            <div className="row">
                {videos.map((video) => (
                    <div className="col-sm-12 col-md-6 col-lg-4 d-flex align-items-stretch" key={video.id}>
                        <Card className="mb-4">
                            <Card.Body>
                                <Card.Title>{video.name}</Card.Title>
                                <video src={video.video} className="embed-responsive-item small-video" controls />
                                <p className="mt-2">{`Author: ${video.license_author}`}</p>

                                <Button variant="primary" href={video.video}>Go to video</Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ExerciseVideoList;




