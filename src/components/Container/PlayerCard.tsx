import "./PlayerCard.css";
const PlayerCard = (props: any) => {
  return <div className="player-card">{props.children}</div>;
};

export default PlayerCard;
