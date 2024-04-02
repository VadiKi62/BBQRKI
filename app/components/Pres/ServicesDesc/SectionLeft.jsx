import React from "react";

function SectionLeft() {
  return (
    <div className="row">
      <div className="col-lg-5">
        <div className="serv-img md-mb50">
          <img src="/assets/pres/2.jpg" width={200} height={300} alt="" />
        </div>
      </div>
      <div className="col-lg-6 offset-lg-1 valign">
        <div className="content">
          {/* <h6 className="stit mb-30">
            <span className="left"></span> Custimize Application
          </h6> */}
          <h2 className="mb-30">We Tackle Your Most Ambitious Goals</h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accus
            antium doloremque laudantium, totam rem aperiam, eaque ipsa quae
            abillo inventore veritatis et quasi architecto beatae vitae dicta
            ecabo. Nemo enim ipsam voluptatem quia voluptas aspernatur
          </p>

          <div className="butons mt-40">
            <a href="#0" className="butn-gr rounded buton">
              <span>Get Free 7 Days Trial</span>
            </a>
          </div>

          <div className="list-feat mt-40">
            <ul>
              <li className="mb-20">
                <i className="icon">
                  {" "}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" />
                  </svg>
                </i>{" "}
                Unique Design & Development
              </li>
              <li className="mb-20">
                <i className="icon">
                  {" "}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" />
                  </svg>
                </i>{" "}
                Experience Team Members
              </li>
              <li>
                <i className="icon">
                  {" "}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z" />
                  </svg>
                </i>{" "}
                Powerfull Applications
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionLeft;
