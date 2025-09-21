import React from 'react';
import Navbar from '../navbar/Navbar';

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <section className="mt-[5rem] h-[150vh] text-xl">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
            {/* You can add a heading or description here */}
          </div>

          <div className="mb-6 lg:mb-16">
            <div
              className="items-center rounded-xl shadow sm:flex dark:border-gray-700 mb-6"
              style={{
                background:
                  'linear-gradient(to right, #D1D5DB, #E5E7EB, #F3F4F6)',
              }}
            >
              <a href="#">
                <img
                  className="w-full h-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src="#"
                  alt="jatin"
                />
              </a>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900">
                  <a href="#">Jatin Pathak</a>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">
                  MITS
                </span>
                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                  Computer Science Engineering (CSE)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
