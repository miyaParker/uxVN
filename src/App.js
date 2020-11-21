import { useState, useEffect } from 'react'
import LeftNavBar from './components/LeftNavBar/LeftNavBar'
import Slide from './components/Slides/Slide'
import TopNavBar from './components/TopNavBar/TopNavBar'
import './App.css'
const bgColorArray = ["#22184E", "#8300A3", "#BD490F", "#DC8904"]
const colorArray = ["#BBB1E7","#C370FF", "#F18955",  "#FFC547"]

function App() {
    const [bgColor, setBgColor] = useState(bgColorArray[0])
    const [color, setColor] = useState(colorArray[0])
    const handleSlide = (color) => {
        setBgColor(bgColorArray[color])
        setColor(colorArray[color])
    }
    return (
        <div className="app-root">
            <div className="overlay-text"><p className="small-text">What makes a</p>
                <p className="highlighted-text" style={{ color: `${color}` }}>great</p>
                <p>product design team?</p>
            </div>
            <TopNavBar/>
            <LeftNavBar bgColor={bgColor} />
            <Slide handleSlide={handleSlide} />
        </div>)
}
export default App;
