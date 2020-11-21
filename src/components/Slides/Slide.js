import React, { useEffect, useRef, useState } from 'react'
import './Slide.css'
import TopNavBar from '../TopNavBar/TopNavBar'
const Slide = ({ handleSlide }) => {
    const [counter, setCounter] = useState(1)
    const btn1Ref = useRef()
    const btn2Ref = useRef()
    const btn3Ref = useRef()
    const btn4Ref = useRef()
    const handleClick = (e) => {
        switch (e.target.id) {
            case 'btn-1':
                setCounter(2)
                handleSlide(0)
                break
            case 'btn-2':
                setCounter(3)
                handleSlide(1)
                break
            case 'btn-3':
                setCounter(4)
                handleSlide(2)
                break
            case 'btn-4':
                setCounter(5)
                handleSlide(3)
                    break
        }
    }
    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(counter + 1)
            switch (counter) {
                case 1:
                    btn1Ref.current.checked = true
                    break;
                case 2:
                    btn2Ref.current.checked = true
                    break;
                case 3:
                    btn3Ref.current.checked = true
                    break;
                case 4:
                    btn4Ref.current.checked = true
                        break;
            }
            if (counter > 5) {
                clearInterval(interval)
            }
        }, 3000);
        handleSlide(counter - 2)
        return () => { clearInterval(interval) }
    })
    return (
        <>
            <div className="slider-root">
                <div className="slider">
                    
                    <div className="slides">
                        <input type="radio" name="radio-btn" id="btn-1" ref={btn1Ref} onClick={handleClick} />
                        <input type="radio" name="radio-btn" id="btn-2" ref={btn2Ref} onClick={handleClick} />
                        <input type="radio" name="radio-btn" id="btn-3" ref={btn3Ref} onClick={handleClick} />
                        <input type="radio" name="radio-btn" id="btn-4" ref={btn4Ref} onClick={handleClick} />

                        <div className="first-slide slide first"></div>
                        <div className="second-slide slide"></div>
                        <div className="third-slide slide"></div>
                        <div className="fourth-slide slide"></div>
                        
                        <div className="nav-auto">
                            <div className="auto-btn1"></div>
                            <div className="auto-btn2"></div>
                            <div className="auto-btn3"></div>
                            <div className="auto-btn4"></div>
                        </div>
                        <div className="nav-manual">
                            <label htmlFor="btn-1" className="manual-btn"></label>
                            <label htmlFor="btn-2" className="manual-btn"></label>
                            <label htmlFor="btn-3" className="manual-btn"></label>
                            <label htmlFor="btn-4" className="manual-btn"></label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Slide