import {useState} from "react"
import "./MediaPlayer.css"
import {MdOutlineClose} from 'react-icons/md'
import {BsPlayCircleFill} from 'react-icons/bs'

const MediaPlayer = () => {
const [modal, setModal] = useState(false);

 const openModal = () => {
    setModal(!modal);
  };
  
    return (
        <div className="pb-5 bg-white">
      <div className="container media">
        <div className="pb-4">
          <div className="pb-5">
            <div className="row d-flex">
              <div className="col-lg-7 order-lg-1 order-2 ">
                <div className="modals position-relative " onClick={openModal}>
                  <button className="cls_button position-absolute "><BsPlayCircleFill/ ></button>
                  <img src="https://untree.co/demos/impact/images/hero-min.jpg" className="w-100 h-100" alt=""  onClick={openModal}  />
                </div>
                {modal? 
                <div className="video-outer ">
                  <div className='video'>
                  <iframe  src="https://www.youtube.com/embed/KI2lsdXJQ40?start=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  </div>
           <div className="position-absolute top-0 end-0 p-4 modal-cls-button"  onClick={openModal}><MdOutlineClose color='white' size={60} /></div>
                </div>
                :null}
                
              </div>
              <div className="col-lg-5 order-lg-2 order-1 text-start">
                <div className="ps-0 ps-lg-5 py-3 ms-lg-5 ms-0"  >
                  <h2 className="fw-bold">Get Started with Impact</h2>
                  <p>
                    Labore id odit sit optio, voluptas sequi nobis aliquid
                    dignissimos iure recusandae.
                  </p>
                  <ul className="list-unstyled growing-section-list">
                    <li>Deserunt harum incidunt</li>
                    <li>Ex nesciunt est temporibus ipsum</li>
                    <li>Vel rem eveniet facere et velit sunt</li>
                    <li>Aspernatur eaque quis</li>
                    <li>Dolorem magnam quisquam? Facere</li>
                  </ul>
                  <div className="pb-4 learn-more-btn ">
                    <button className="btn text-white">Learn More</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default MediaPlayer;
