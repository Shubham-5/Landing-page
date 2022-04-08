import "./WhyUs.css";
const WhyUs = () => {
  return (
    <>
      <section className='section ' style={{ backgroundColor: "#fafafa" }}>
        <div className='container'>
          <div className='row justify-content-between'>
            <div className='col-lg-5'>
              <h2 className='heading'>Why You Should Choose Us</h2>
              <div className='feature'>
                <div className='icon'>
                  <img
                    className='fluid'
                    src='https://untree.co/demos/impact/images/svg/24-hours-support.svg'
                    alt='image'
                  />
                </div>
                <div>
                  {" "}
                  <h3>Professional</h3>
                  <p>
                    Sapiente, assumenda suscipit autem ab expedita dignissimos,
                    corrupti iusto nobis ex aperiam cumque reprehenderit, saepe
                    culpa qui eos ullam minima quo, consequuntur.
                  </p>
                </div>
              </div>
              <div className='feature'>
                <div className='icon'>
                  <img
                    className='fluid'
                    src='https://untree.co/demos/impact/images/svg/good-review.svg'
                    alt='image'
                  />
                </div>
                <div>
                  {" "}
                  <h3>Good Review</h3>
                  <p>
                    Sapiente, assumenda suscipit autem ab expedita dignissimos,
                    corrupti iusto nobis ex aperiam cumque reprehenderit, saepe
                    culpa qui eos ullam minima quo, consequuntur.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <p>
                <img
                  className='img-fluid'
                  src='https://untree.co/demos/impact/images/about-us-min.png'
                  alt='image'
                />
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='bg3'>
        <div className='container'>
          <div className='row justify-content-between align-items-center mb-5 pb-5'>
            <div className='col-lg-4'>
              <h2 className='heading mb-4 text-black'>
                Why Growing Your Business is Important
              </h2>
              <p>
                Labore id odit sit optio, voluptas sequi nobis aliquid
                dignissimos iure recusandae vitae nam facere hic quis voluptate
                cum quae. Deserunt, harum, incidunt ex nesciunt est temporibus
                ipsum, vel rem eveniet facere et velit sunt aspernatur eaque
                quis, dolorem magnam quisquam? Facere?
              </p>
              <p className='mt-4'>
                {" "}
                <div className=' learn-more-btn '>
                  <button className='btn text-white'>Learn More</button>
                </div>
              </p>
            </div>
            <div className='col-lg-7'>
              <img
                src='https://untree.co/demos/impact/images/illustration-1.jpg'
                alt='Image'
                className='img-fluid'
              />
            </div>
          </div>

          <div className='row '>
            <div className='col-lg-4'>
              <div className='feature'>
                <div className='icon'>
                  <img
                    className='fluid'
                    src='https://untree.co/demos/impact/images/svg/24-hours-support.svg'
                    alt='image'
                  />
                </div>
                <div>
                  {" "}
                  <h3>Professional</h3>
                  <p>
                    Sapiente, assumenda suscipit autem ab expedita dignissimos,
                    corrupti iusto nobis ex aperiam cumque reprehenderit, saepe
                    culpa qui eos ullam minima quo, consequuntur.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='feature'>
                <div className='icon'>
                  <img
                    className='fluid'
                    src='https://untree.co/demos/impact/images/svg/good-review.svg'
                    alt='image'
                  />
                </div>
                <div>
                  {" "}
                  <h3>Good Review</h3>
                  <p>
                    Sapiente, assumenda suscipit autem ab expedita dignissimos,
                    corrupti iusto nobis ex aperiam cumque reprehenderit, saepe
                    culpa qui eos ullam minima quo, consequuntur.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='feature'>
                <div className='icon'>
                  <img
                    className='fluid'
                    src='https://untree.co/demos/impact/images/svg/quotation.svg'
                    alt='image'
                  />
                </div>
                <div>
                  <h3>24/7 Support</h3>
                  <p>
                    Sapiente, assumenda suscipit autem ab expedita dignissimos,
                    corrupti iusto nobis ex aperiam cumque reprehenderit, saepe
                    culpa qui eos ullam minima quo, consequuntur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyUs;
