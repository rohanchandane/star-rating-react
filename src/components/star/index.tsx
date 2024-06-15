import './style.css';

interface Props {
    onClick: () => void;
    starIndex: number;
    selectedStar: number;
}   

function Star(props: Props) {
    const { onClick, starIndex, selectedStar } = props;
    
    const selected = starIndex <= selectedStar;

    return (
        <div className={selected ? 'star selected' : 'star'} onClick={onClick}></div>
    );
}

export default Star;