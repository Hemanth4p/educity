import React, { useRef } from 'react'
import'./Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

const slideForward = ()=>{
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`

}
const slideBackward = ()=>{
    if (tx < 0) {
    tx += 25;
  }
  slider.current.style.transform = `translateX(${tx}%)`;

}
  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn'  onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn'  onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Maria Sharapova</h3>
                                <span>Edusity, Greece</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at Edusity was one of
                        the best decisions I've ever made. Thesupportive community,
                        state-of-the-art facilities, and commitment to academic excellence
                        have truly exceeded my expectations.
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>Jannik Sinner</h3>
                                <span>Edusity, Italy</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at Edusity was one of
                        the best decisions I've ever made. Thesupportive community,
                        state-of-the-art facilities, and commitment to academic excellence
                        have truly exceeded my expectations.
                        </p>
                    </div>
                </li>
                  <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>Iga Swiatek</h3>
                                <span>Edusity, Poland</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at Edusity was one of
                        the best decisions I've ever made. Thesupportive community,
                        state-of-the-art facilities, and commitment to academic excellence
                        have truly exceeded my expectations.
                        </p>
                    </div>
                </li>
                  <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>Emma Raducanu</h3>
                                <span>Edusity, England</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at Edusity was one of
                        the best decisions I've ever made. Thesupportive community,
                        state-of-the-art facilities, and commitment to academic excellence
                        have truly exceeded my expectations.
                        </p>
                    </div>
                </li>
                
            </ul>
        </div>
    </div>
  )
}

export default Testimonials
