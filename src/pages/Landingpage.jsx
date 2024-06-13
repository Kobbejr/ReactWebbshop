import React from "react";
import Fishy from "../assets/Icon-dace.jpg";
import Hook from "../assets/hook.svg";
import '../App.css'

const Landingpage = () => {
  return (
    <div>
      {/* Main container for the hero section */}
      <div className="relative overflow-hidden bg-sky-100">
        <section className="absolute h-[40vh] w-screen bg-gradient-to-b from-teal-400/30 via-transparent to-transparent"></section>
        {/* Padding for the top and bottom of the hero section */}
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          {/* Centering content with max-width and horizontal padding */}
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            {/* Container for heading and paragraph */}
            <div className="sm:max-w-lg text-left gap-10">
              <h1 className="text-4xl tracking-tight text-stone-700 sm:text-6xl">
                TODAY'S FRESH CATCH IS HERE!
              </h1>
              <p className="mt-12 text-xl font-medium text-stone-700">
                Our boats have just returned with the freshest seafood from the
                ocean. From plump scallops to mouthwatering fish, today's catch
                promises the highest quality and unbeatable flavor.
              </p>
              {/* Increase margin-bottom for the paragraph */}
              <p className="mt-8">
                <a
                  href="/products"
                  className="inline-block rounded bg-teal-500 px-8 py-3 text-center font-semibold text-white hover:bg-teal-400 shadow-inner-custom"
                >
                  See the products
                </a>
              </p>
            </div>
            <img
              src={Hook}
              className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-3"
            />
            <div>
              {/* Container for decorative image grid */}
              <div className="mt-10">
                {/* Hidden from screen readers, for decorative purposes */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  {/* Positioning and centering the grid */}
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    {/* Flexbox for spacing between image columns */}
                    <div className="flex items-center space-x-4 lg:space-x-4">
                      {/* First column of images */}
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-4 lg:gap-y-4">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            src={Fishy}
                            style={{ width: "11rem", height: "auto" }}
                            className="object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 rounded-lg">
                          <img
                            src={Fishy}
                            style={{ width: "11rem", height: "auto" }}
                            className="object-cover object-center"
                          />
                        </div>
                      </div>
                      {/* Second column of images */}
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={Fishy}
                            style={{ width: "11rem", height: "auto" }}
                            className="object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={Fishy}
                            style={{ width: "11rem", height: "auto" }}
                            className="object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={Fishy}
                            style={{ width: "11rem", height: "auto" }}
                            className="object-cover object-center"
                          />
                        </div>
                      </div>
                      {/* Third column of images */}
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={Fishy}
                            style={{ width: "11rem", height: "auto" }}
                            className="object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src={Fishy}
                            style={{ width: "11rem", height: "auto" }}
                            className="object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
