import './carousel.css'

import { useEffect, useState } from 'react'


const Carousel = ({ data }) => {
    const [current, setCurrent] = useState(0);
    const [autoPlay, setAutoPlay] = useState(true);

    let timeOut = null;


    useEffect(() => {
        timeOut = autoPlay && setTimeout(() => {
            slideRight();
        }, 2500)
    })

    const slideRight = () => {
        setCurrent(current === data.length - 1 ? 0 : current + 1);
    };

    const slideLeft = () => {
        setCurrent(current === 0 ? data.length - 1 : current - 1);
    }

    return (
        <div className="carousel"
            onMouseEnter={() => {
                setAutoPlay(false);
                clearTimeout(timeOut);
            }}
            onMouseLeave={() => {
                setAutoPlay(true);
            }}>
            <div className="carouselWraper">
                {data.map((image, index) =>
                    <div key={index}
                        className={index === current
                            ? 'carouselCard carouselCard-active'
                            : 'carouselCard'}>
                        <img className='carouselImage' src={image} />
                        <div className="left" onClick={slideLeft}>&lsaquo;</div>
                        <div className="right" onClick={slideRight}>&rsaquo;</div>
                    </div>
                )}
                <div className="carouselPagination">
                    {data.map((_, index) =>
                        <div key={index}
                            className={index === current
                                ? 'pagination pagination-active'
                                : 'pagination'}
                            onClick={() => setCurrent(index)}
                        ></div>
                    )}
                </div>
            </div>
        </div>
    )

}

export default Carousel;