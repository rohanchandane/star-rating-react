import Star from "../star";
import { useState } from 'react';

function StarList() {
    const starArray = [...new Array(5)];
    const [selectedStar, setSelectedStar] = useState(0);
    const [hoverStar, setHoverStar] = useState(0);

    function handleStarClick(index: number) {
        return () => {
            setSelectedStar(index + 1);
        }
    }

    function handleMouseEnter(index: number) {
        console.log("mouse entered");
        return () => {
            setHoverStar(index + 1);
        }
    }
    function handleMouseLeave() {
        console.log("mouse left");
        setHoverStar(0);
    }

    return (
        <div className="star-list">
            {
                starArray.map( (star, index) => {
                    return <Star 
                                key={index}
                                onClick={handleStarClick(index)}
                                starIndex={index + 1} 
                                selectedStar={selectedStar} 
                                onMouseEnter={handleMouseEnter(index)} 
                                onMouseLeave={handleMouseLeave} 
                                hoverStar={hoverStar}
                            />
                })
            }
            <div>
            {selectedStar > 0 && <h3>Selected Rating: {selectedStar} </h3>}
            </div>
        </div>
    );
}   

export default StarList;