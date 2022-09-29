import React,  { Component, Fragment } from "react";
import LazyLoadingWrapper from "./components";


function App(props){
    const images = [{
        url: 'https://www.albertjuhe.com/images/01.jpg',
        thumbnailURL: 'https://www.albertjuhe.com/images/01.jpg'

    },
    {
        url: 'https://www.albertjuhe.com/images/01.jpg',
        thumbnailURL: 'https://www.albertjuhe.com/images/01.jpg'

    },{
        url: 'https://www.albertjuhe.com/images/01.jpg',
        thumbnailURL: 'https://www.albertjuhe.com/images/01.jpg'

    },{
        url: 'https://www.albertjuhe.com/images/01.jpg',
        thumbnailURL: 'https://www.albertjuhe.com/images/01.jpg'

    },{
        url: 'https://www.albertjuhe.com/images/01.jpg',
        thumbnailURL: 'https://www.albertjuhe.com/images/01.jpg'

    },{
        url: 'https://www.albertjuhe.com/images/01.jpg',
        thumbnailURL: 'https://www.albertjuhe.com/images/01.jpg'

    },{
        url: 'https://www.albertjuhe.com/images/01.jpg',
        thumbnailURL: 'https://www.albertjuhe.com/images/01.jpg'

    },]
    return (
       <div style={{width:'300px', margin:'auto'}}>
        {images.map((image, index) => {
          const newRef = React.createRef()
          return(
          <LazyLoadingWrapper 
              refElem={newRef}
              render={(inViewPort)=>{
                return(
                  <div ref={newRef} style={{display:'block', margin:'10px' }}>
                  {
                    inViewPort == true ? 
                
                      <img src={image.url} alt="" style={{height: 'auto', width: '400px', margin: '5px', borderRadius:'10px'}}/>
               
                    :
                    <div style={{height:'300px', width:'300px'}}><p>Loading...</p></div>
                  }
                  </div>
                
                )
              }}>
          </LazyLoadingWrapper>
        
        )})}
      </div>
    )
}
export default App;