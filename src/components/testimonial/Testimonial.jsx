import React, { useContext } from "react";
import myContext from "../../context/data/myContext";
import pic1 from "./OnDemandpic.jpg";
import pic2 from "./image1.jpg";
import pic3 from "./image2.jpg";

function Testimonial() {
  const context = useContext(myContext);
  const { mode } = context;
  return (
    <div>
      <section className="">
        <div className=" container mx-auto px-5 py-10">
          <h1
            className=" text-center text-3xl font-bold text-black"
            style={{ color: mode === "dark" ? "white" : "" }}
          >
            Testimonial
          </h1>
          <h2
            className=" text-center text-2xl font-semibold mb-10"
            style={{ color: mode === "dark" ? "white" : "" }}
          >
            What our <span className=" text-pink-500">customers</span> are
            saying
          </h2>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-50 h-40 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src={pic1}
                />
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="leading-relaxed"
                >
                  At the heart of our on-demand business lies a commitment to
                  revolutionizing the way you experience service, where
                  intricate systems and cutting-edge technology converge to
                  create a seamless ecosystem of solutions, meticulously
                  designed to anticipate and exceed your expectations, ensuring
                  that every interaction with our platform is not just an
                  exchange, but a transformative journey towards greater
                  convenience, efficiency, and satisfaction
                </p>
                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                {/* <h2 style={{ color: mode === 'dark' ? '#ff4162' : '' }} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Kamal Nayan Upadhyay</h2>
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="text-gray-500">Senior Product Designer</p> */}
              </div>
            </div>

            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-50 h-40 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src={pic2}
                />
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="leading-relaxed"
                >
                  Join us on a journey where convenience knows no bounds, where
                  our on-demand services are tailored to fit seamlessly into
                  your busy lifestyle, providing solutions that not only save
                  you time and effort but also enhance your overall well-being,
                  leaving you feeling empowered and in control every step of the
                  way.we strive to not just meet, but exceed your expectations,
                  ensuring that every interaction leaves you inspired,
                  empowered, and eager to embrace the limitless potential of
                  tomorrow
                </p>
                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                {/* <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">React Js</h2>
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500">UI Develeoper</p> */}
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-50 h-40 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src={pic3}
                />
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="leading-relaxed"
                >
                  Welcome to a world where your satisfaction is our obsession,
                  where every aspect of our on-demand services is designed with
                  your needs and preferences in mind, ensuring that every
                  interaction leaves you feeling valued, appreciated, and eager
                  to continue exploring the endless possibilities that await
                  you.Ensuring that every interaction leaves you feeling not
                  just satisfied, but truly understood and cared for
                </p>
                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                {/* <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">React Js</h2>
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="text-gray-500">CTO</p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonial;
