import {useState, useEffect} from 'react'

const getWindowDimension = () => {
    const {innerWidth: browserWidth, innerHeight: browserHeight} = window;
    return {browserHeight, browserWidth}
}

const useWindowDimension = () => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimension());
    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimension());
          }
          window.addEventListener('resize', handleResize);
          return () => window.removeEventListener('resize', handleResize);
    },[windowDimensions, setWindowDimensions]);

    return windowDimensions;
}

export default useWindowDimension;