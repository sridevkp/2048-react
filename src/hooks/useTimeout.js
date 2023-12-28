import { useEffect, useRef } from "react";

const useTimeout = (callback, delay) => { 
    // Creating a ref  
    const savedCallback = useRef(); 
  
    // To remember the latest callback . 
    useEffect(() => { 
        savedCallback.current = callback; 
    }, [callback]); 
  
    // Setting and clearing up a timeout 
    useEffect(() => { 
        const func = () => { 
            savedCallback.current(); 
        } 
        if (delay !== null) { 
            let id = setTimeout(func, delay); 
            return () => clearTimeout(id); 
        } 
    }, [delay]); 
}; 

export default useTimeout