import React from "react";

export default class Cardbody extends React.Component {
  render() {  let {carttitle,carddis,cardimg,newsurl,publishdate,author, sursename} = this.props

    return (
      <div >
        <div id="cardbody" className="card mt-5  position-flex" style={{width:"25rem", height:"auto"}}>
  <img src={cardimg} className="card-img-top" alt="..."/>
  <div className="card-body ">
    <h5 className="card-title">{carttitle}</h5>
    <p className="card-text">{carddis}</p>
    
    <p className="card-text"><small class="text-muted">By{author} On {new Date(publishdate).toDateString()}</small></p>
    <a href={newsurl} className="btn btn-primary position-relative " style={{float:"left"}} id="cardbutton">Read More</a>
    <p><span className="badge bg-danger mt-3" style={{float:"right",position:"relative"}}>{sursename}</span></p>
  </div>
</div>
      </div>
    )
  }
}
