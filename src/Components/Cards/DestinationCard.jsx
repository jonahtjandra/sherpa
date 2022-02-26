import './DestinationCard.css'

export const DestinationCard = (props) => {
  return (
    <div style={{backgroundColor:props.bgcolor}} className="card-container">
        <img src={props.img} alt="" className="img" />
        <div className="title-card">{props.dest}</div>
    </div>
  )
}
