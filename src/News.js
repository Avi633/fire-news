import React, { Component } from 'react'
import Newitem from './Newitem'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import WhatshotIcon from '@mui/icons-material/Whatshot'; 
import PropTypes from 'prop-types'


export default class News extends Component {
  static defaultProps={
    country:'in',
    pagesize:8,
    category:'sports'
  }
   static propTypes={
    country:PropTypes.string,
    pagesize:PropTypes.number,
    category:PropTypes.string
   }
    

      constructor(){
        super();
        this.state={
          article:[],
          page:1,
          totalResults:0,
          

      }
    }
   
  async componentDidMount(){
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d7f64e10c51441c7b706fafbbd95417f&page=${this.state.page-1}&pageSize=${this.props.pagesize}`;
    let data=await fetch(url);
    let parasedata=await data.json();
    console.log(this.props.category);
    this.setState(
      {
      article:parasedata.articles,
      totalResults:parasedata.totalResults
    }); 
    console.log(this.state.article);    
  } 
  // help=async()=>{
  //   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d7f64e10c51441c7b706fafbbd95417f&page=${this.state.page}&pageSize=${this.props.pagesize}`;
  //   let data=await fetch(url);
  //   let parasedata=await data.json();
  //   this.setState(
  //     {
  //     article:parasedata.articles,
  //     totalResults:parasedata.totalResults
  //   }); 
  //   console.log(this.props.category);
  //  }
    headback=async ()=>{
      
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d7f64e10c51441c7b706fafbbd95417f&page=${this.state.page-1}&pageSize=${this.props.pagesize}`;
      let data=await fetch(url);
      let parasedata=await data.json();
      this.setState(
        {
        article:parasedata.articles,
        page:this.state.page-1,
        loading:false
      }); 
      // this.setState({
      //   page:this.state.page-1
      // })
      // this.help(); 
        
    }
    headforward=async ()=>{
      
       
      
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d7f64e10c51441c7b706fafbbd95417f&page=${this.state.page+1}&pageSize=${this.props.pagesize}`;
      let data=await fetch(url);
      let parasedata=await data.json();
      this.setState(
        {
       article:parasedata.articles,
        page:this.state.page+1,
        loading:false
      }); 
      // this.setState({
      //   page:this.state.page+1
      // })
      // this.help();
      
    }
  render() {
    return (

      <>
      <h1 className='d-flex justify-content-center my-4'>F<WhatshotIcon style={{color:"red",width:"50px",height:"50px"}}/>reNews-Top Headlines</h1>
      
      <div className="container my-3">
        <div className="row">
          {this.state.article.map((element)=>{return <div className="col-md-3" key={element.url}><Newitem title={element.title?element.title.slice(0,45):""} discreption={element.description?element.description.slice(0,88):""} imageurl={element.urlToImage?element.urlToImage:"https://images.pexels.com/photos/794494/pexels-photo-794494.jpeg?cs=srgb&dl=pexels-anthony-%F0%9F%93%B7%F0%9F%93%B9%F0%9F%99%82-794494.jpg&fm=jpg"} todo={element.url} /></div> })}
            
            
        </div >
        <div className='container d-flex justify-content-between my-3'>
        <button className='btn btn-info ' disabled={this.state.size<=1} style={{background:"black",color:"white"}} onClick={this.headback}> <ArrowBackIosIcon /> Previous</button>
        <button  className='btn btn-info' disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pagesize)} style={{background:"black",color:"white"}} onClick={this.headforward}> Next <ArrowForwardIosIcon  /></button>  
        
        </div>
       

      </div>
      </>

    )
  }
}
