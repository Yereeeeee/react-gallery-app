import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LazyImage from './LazyImage';


const ImageGallery = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            const response = await axios.get('https://api.unsplash.com/photos', {
                params: {
                    client_id: 'D4Qr2_q_6tozBMJKNX7Au4Q6ALYxsZ6VxJuRGcPvMqQ',
                    per_page:10,
                },
            });
            setImages(response.data);
        };

        fetchImages();
    }, []);

    return (
        <div className="image-gallery">
            {images.map((image) => (
                <LazyImage key={image.id} src={image.urls.regular} alt={image.alt_description} />
            ))}
        </div>
    );
};

export default ImageGallery;
