import "./about.css"
import Award from "../img/Award.jpg"

const   About = () => {
  return (
    <div className='a'> 
        <div className="a-left">
            <div className="a-card" bg></div>
            <div className="a-card">
                <img src="https://www.pexels.com/photo/crop-person-with-analog-photo-camera-7162526/" alt="" className="" />
            </div>
        </div>
        <div className="a-right">
            <h1 className="a-title">About Me</h1>
            <p className="a-sub">
                it is a long established fact.....
            </p>
            <p className="a-desc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt quos quidem blanditiis recusandae odit dolores?
            </p>
            <div className="a-award">
                <img src={Award} alt="" className="a-award-img" />
                <div className="a-award-texts">
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default About;  