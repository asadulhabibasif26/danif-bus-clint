import React from "react";
import dhaka from '../../../assets/dhaka.png'
import chittagong from '../../../assets/chitagong.jpeg'
import Sylhet from '../../../assets/sylhet.webp'
import CoxsBazar from '../../../assets/cox.jpeg'

const PopularRoute = () => {
  return (
    <div className="min-h-[500px] lg:w-8/12 w-10/12 bg-white/10 mt-10 mx-auto rounded-xl p-10">
      <h2 className="text-center font-bold">let’s ride together</h2>
      <h2 className="text-center text-4xl font-bold">Popular destinations</h2>
      <div className="mt-5">
        <div className="grid grid-cols-3 w-10/12 mx-auto">
          <div>
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
                <img src={dhaka} />
              </div>
            </div>
          </div>
          <div>
            <ul className="timeline">
              <li>
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end timeline-box">Dhaka</div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end timeline-box">Chittagong</div>
              </li>
            </ul>
          </div>
          <div className="">
            <div className="avatar flex justify-center">
              <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
                <img src={chittagong} />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 w-10/12 mx-auto">
          <div>
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
                <img src={dhaka} />
              </div>
            </div>
          </div>
          <div>
            <ul className="timeline">
              <li>
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end timeline-box">Dhaka</div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end timeline-box">Cox’s Bazar</div>
              </li>
            </ul>
          </div>
          <div>
            <div className="avatar flex justify-center">
              <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
                <img src={CoxsBazar} />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 w-10/12 mx-auto">
          <div>
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
                <img src={dhaka} />
              </div>
            </div>
          </div>
          <div>
            <ul className="timeline">
              <li>
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end timeline-box">Dhaka</div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end timeline-box">Sylhet</div>
              </li>
            </ul>
          </div>
          <div>
            <div className="avatar flex justify-center">
              <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
                <img src={Sylhet} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularRoute;
