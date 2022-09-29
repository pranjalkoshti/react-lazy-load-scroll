import React, { useState, useEffect, useRef } from 'react';


import Observer from './observer';

const LazyLoadingWrapper = (props) =>{
    const elemRef = useRef(null);
    const [inViewPort, setinViewPort] = useState(false)
  const listenInViewportExternal = () =>{
        // console.log("in listener");
        setinViewPort(true)
    }

    const [observerInstance, setobserverInstance] = useState('')

 useEffect(() => {
  if(props.refElem){
      setobserverInstance(new Observer({element: props.refElem && props.refElem.current, listenInViewportExternal: listenInViewportExternal}))
  }
 }, [props.refElem])
// console.log(observerInstance);
    // observerInstance.listenInViewportExternal = listenInViewportExternal;



    return (
        <div>
            {
                props.render(inViewPort)
            }
        </div>
    )
}

export default LazyLoadingWrapper;