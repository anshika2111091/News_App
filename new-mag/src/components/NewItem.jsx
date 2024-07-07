import image from "../assets/new.webp";

const NewItem = ({title,desc,src,url}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 py-2 " style={{maxWidth:"340px",display:"flex",justifyContent:"center"}}>
    <img src={src?src:image} style={{height:'200px',width:'330px'}} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{title.slice(0,50)}</h5>
      <p className="card-text">{desc? desc.slice(0,50)+"...":"News provides timely information about current events and developments locally and globally.."}</p>
      <a href={url} className="btn btn-primary">Read More</a>
    </div>
  </div>
  )
}

export default NewItem
