import './style.css';

interface Props {
    onClick: () => void;
    starIndex: number;
    selectedStar: number;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    hoverStar: number;
}   

function Star(props: Props) {
    const { onClick, starIndex, selectedStar, onMouseEnter, onMouseLeave, hoverStar } = props;
    
    const selected = starIndex <= selectedStar;
    const hovered = starIndex <= hoverStar;

    return (
        <div className={selected || hovered ? 'star selected' : 'star'} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}></div>
    );
}

export default Star;