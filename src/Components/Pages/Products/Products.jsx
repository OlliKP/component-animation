import React, { useState, useEffect, useContext } from 'react';
import Card from 'react-bootstrap/Card';
import '../../Animations.css';
import './Products.css';
import { useLocation } from 'react-router-dom';
import { ThemeContext } from '../../../ThemeContext';

const Products = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const location = useLocation();
    const comingFromLeft = ['/'];
    const theme = useContext(ThemeContext);

    const productArr = [
        { id: 1, name: "Deluxe Icecream", imageUrl: "/images/deluxe-icecream.webp" },
        { id: 2, name: "Rainbow Icecream", imageUrl: "/images/rainbow-icecream.webp" },
        { id: 3, name: "Strawberry Shake", imageUrl: "/images/strawberry-shake.webp" },
        { id: 4, name: "Sponge Cake", imageUrl: "/images/sponge-cake.webp" },
        { id: 5, name: "Salmon Gourmet", imageUrl: "/images/salmon-gourmet.webp" },
        { id: 6, name: "Clam Delight", imageUrl: "/images/clam-delight.webp" },
        // { id: 7, name: "Seafood Elegance", imageUrl: "/images/seafood-elegance.webp" },
        // { id: 8, name: "Savory Symphony", imageUrl: "/images/savory-symphony.webp" },
    ];

    useEffect(() => {
        const preloadImages = async () => {
            const promises = productArr.map(product => {
                return new Promise((resolve, reject) => {
                    const img = new Image();
                    img.src = product.imageUrl;
                    img.onload = resolve;
                    img.onerror = reject;
                });
            });

            await Promise.all(promises);
            setImagesLoaded(true);
        };

        preloadImages();
    }, [productArr]);

    useEffect(() => {
        if (imagesLoaded) {
            setIsVisible(true);
        }
    }, [imagesLoaded]);

    return (
        <div className='products-page-container container-fluid d-flex flex-column pb-5 justify-content-center align-items-center gap-3'>
            {!isVisible && (
                <div className="spinner-border" role="status">
                    <span className="sr-only"></span>
                </div>
            )}
            {isVisible && (
                <div className={`container box-shadow container bg-white p-4 m-5 ${
                    !comingFromLeft.includes(location.state?.prevLocation)
                        ? 'slideFromLeft'
                        : 'slideFromRight'
                }`}>
                    <h1 className='text-center' style={{ color: theme.themeColor }}>Products</h1>
                    <div className='row'>
                        {productArr.map((product, index) => (
                            <div key={product.id} className={`col-6 col-lg-4 my-2 animate-card`} style={{ animationDelay: `${index * 120}ms` }}>
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
            )}
        </div>
    );
}

export default Products;
