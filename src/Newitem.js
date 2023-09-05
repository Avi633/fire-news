import React, { Component } from 'react'

export default class Newitem extends Component {
    
  render() {
    let {title,discreption,imageurl,todo}=this.props;
    return (
      <div><div className="card mx-1" style={ {width:"18rem"}}>
      <img src={imageurl} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title}..</h5>
        <p className="card-text">{discreption}...</p>
        <a  target="_blank" href={todo} className="btn btn-sm btn-primary">Read more</a>
      </div>
    </div></div>
    )
  }
}
