import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import './Products.css';

const Products = () => {
    const [isVisible, setIsVisible] = useState(false); // State to control animation

    const productArr = [
        { id: 1, name: "Deluxe Icecream", imageUrl: "https://images.pexels.com/photos/3625371/pexels-photo-3625371.jpeg" },
        { id: 2, name: "Rainbow Icecream", imageUrl: "https://images.pexels.com/photos/3625373/pexels-photo-3625373.jpeg" },
        { id: 3, name: "Strawberry Shake", imageUrl: "https://images.pexels.com/photos/3625372/pexels-photo-3625372.jpeg" },
        { id: 4, name: "Sponge Cake", imageUrl: "https://images.pexels.com/photos/3611496/pexels-photo-3611496.jpeg" },
        { id: 5, name: "Salmon Gourmet", imageUrl: "https://images.pexels.com/photos/3655916/pexels-photo-3655916.jpeg" },
        { id: 6, name: "Clam Delight", imageUrl: "https://images.pexels.com/photos/3645126/pexels-photo-3645126.jpeg" },
        { id: 7, name: "Seafood Elegance", imageUrl: "https://images.pexels.com/photos/3611532/pexels-photo-3611532.jpeg" },
        { id: 8, name: "Savory Symphony", imageUrl: "https://images.pexels.com/photos/3649534/pexels-photo-3649534.jpeg" },
    ];

    // Add animation effect when component mounts
    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className='products-page-container container-fluid d-flex flex-column pb-5 justify-content-center align-items-center gap-3'>
            <div className='container'>
                <div className='row'>
                    {productArr.map((product, index) => (
                        <div key={product.id} className={`col-6 col-lg-3 my-2 ${isVisible ? 'animate-card' : ''}`} style={{ animationDelay: `${index * 80}ms` }}>
                            <Card>
                                <Card.Img variant="top" src={product.imageUrl} />
                                <Card.Body>
                                    <Card.Title className='product-name text-center'>{product.name}</Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Products;