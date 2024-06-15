import Star from "../star";
import { useState } from 'react';

function StarList() {
    const starArray = [...new Array(5)];
    const [selectedStar, setSelectedStar] = useState(0);

    function handleStarClick(index: number) {
        return () => {
            console.log(index + 1);
            setSelectedStar(index + 1);
        }
    }

    return (
        <div className="star-list">
            {
                starArray.map( (star, index) => {
                    return <Star key={index} onClick={handleStarClick(index)} starIndex={index + 1} selectedStar={selectedStar}/>
                })
            }
            <div>
            {selectedStar > 0 && <h3>Selected Rating: {selectedStar} </h3>}
            </div>
        </div>
    );
}   

export default StarList;