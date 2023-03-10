import { URL } from 'next/dist/compiled/@edge-runtime/primitives/url';
import React from 'react';

const JoinUs = () => {
  return (
    <div id="join_us" className="my-5 text-white relative h-full">
      <div className="container">
        <div className="h-full main-container -z-10">
          <div
            className="absolute   inset-0 bg-no-repeat bg-cover bg-right"
            style={{ backgroundImage: `url(${'/img/joinus/leftside.png'})` }}
          ></div>
          <div
            className="absolute inset-0 bg-cover bg-left"
            style={{ backgroundImage: `url(${'/img/joinus/rightside.png'})` }}
          ></div>
        </div>

        <div className="content py-[10rem] md:py-64 text-center z-50 ">
          <div className="absolute flex justify-center items-center inset-0">
            <div className="space-y-2 md:space-y-4">
              <h2 className="text-large">Join the AI Nexus community</h2>
              <p className="sub-heading text-slate-100 text-center">
                and experience the full potential of your project.{' '}
              </p>
              <div className="flex justify-center">
                <button className="btn-secondary">
                  Unleash Your Projects Potential
                </button>
              </div>
              <p className="text-sm font-PLUS w-full md:w-[50%] mx-auto font-light text-center pt-2 md:pt-11">
                Unleash the power of decentralized innovation with our advanced
                launchpad tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
