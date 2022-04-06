
import "./SectionHero.css"
import { MdLayers, MdPhonelink, MdLocalMall } from "react-icons/md";
const HeroSection = () => {

    return (     
    <div className="hero">
      <div className="container-fluid container-xl position-relative">
        <div className="py-5">
          <div className="py-4 d-flex"></div>
              <div className="text-white pt-5 px-mx-3 px-4 text-center div" style={{ maxWidth: 500, margin: '0 auto' }}>
                <h1 className="fw-bold px-md-3 px-0">Let's growth your business with us</h1>
                <p className="px-md-5 px-5 mx-3 pt-2">
                  Sapiente, assumenda suscipit autem ab expedita dignissimos,
                  corrupti iusto nobis ex aperiam cumque reprehenderit, saepe
                  culpa qui eos ullam minima quo, consequuntur.
                </p>
                <div className="pt-5 get-in-touch-btn">
                  <button className="btn text-white">Get In Touch</button>
                </div>
            <div className="w-100 pb-5 hero-image1-outer">
              <div className="hero-image1" >
                  <div className="person-1">
                      <img className="img-fluid" src="https://untree.co/demos/impact/images/persons-group-1.png" alt="person-art" />
                      </div>
                </div>
            </div>
            <div className="w-100 pb-5 hero-image2-outer">
              <div className="hero-image2" ><div className="person-2"><img className="img-fluid" src="https://untree.co/demos/impact/images/persons-group-2.png" alt="person-art" /></div></div>
            </div>
          </div>
        </div>

        <div className="pt-5">
          <div className="hero-box py-5 px-5 rounded-top">
            <div className="row">
              <div className="col-lg-4 text-white d-flex">
                <div>
                  <MdLayers size={50} />
                </div>
                <div className="ps-4">
                  <h5 className="fw-bold">Design</h5>
                  <p className="m-0 pb-2">
                    Sapiente, assumenda suscipit autem ab expedita dignissimos,
                    corrupti iusto nobis ex aperiam cumque reprehenderit, saepe
                    culpa qui eos ullam minima quo, consequuntur.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 text-white d-flex">
                <div>
                  <MdPhonelink size={50} />
                </div>
                <div className="ps-4">
                  <h5 className="fw-bold">Applications</h5>
                  <p className="m-0">
                    Sapiente, assumenda suscipit autem ab expedita dignissimos,
                    corrupti iusto nobis ex aperiam cumque reprehenderit, saepe
                    culpa qui eos ullam minima quo, consequuntur.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 text-white d-flex">
                <div>
                  <MdLocalMall size={50} />
                </div>
                <div className="ps-4 ms-1">
                  <h5 className="fw-bold">eCommerce</h5>
                  <p className="m-0">
                    Sapiente, assumenda suscipit autem ab expedita dignissimos,
                    corrupti iusto nobis ex aperiam cumque reprehenderit, saepe
                    culpa qui eos ullam minima quo, consequuntur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
     
    )
}

export default HeroSection

