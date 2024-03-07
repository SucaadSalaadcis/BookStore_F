
import React from 'react';
import img from "../assets/banner/47.jpg"
import img2 from "../assets/banner/48.jpg"
import img3 from "../assets/banner/49.jpg"
import img4 from "../assets/banner/16.webp"
import img5 from "../assets/banner/54.jpg"
import img6 from "../assets/banner/58.jpg"
const About = () => {
  return (
    <div className="rounded bg-gray-60 ">
      <div className="max-w-6xl mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Team Section */}
          <div className="mb-8 md:mb-0 ">
            <h1 className="text-3xl font-bold mb-6 mt-24">Meet Our Team</h1>
            <div className="flex flex-wrap">
              {/* Team Member 1 */}
              <div className="w-full md:w-1/2 lg:w-1/3 mb-8 ">
                <img
                  className="rounded-full h-48 w-48 mx-auto mb-4 object-cover"
                  src={img5}
                  alt="Team Member 1"
                />
                <h2 className="text-xl font-semibold mb-2">Puja Doe</h2>
                <p className="text-gray-700">Co-founder and CEO</p>
              </div>
              {/* Team Member 2 */}
              <div className="w-full md:w-1/2 lg:w-1/3 mb-8 ">
                <img
                  className="rounded-full h-48 w-48 mx-auto mb-4 object-cover"
                  src={img}
                  alt="Team Member 2"
                />
                <h2 className="text-xl font-semibold mb-2">Jane Smith</h2>
                <p className="text-gray-700">Co-founder and COO</p>
              </div>
              {/* Add more team members as needed */}
            </div>
          </div>

          {/* Store Information Section */}
          <div className=''>
            <h1 className="text-3xl font-bold mb-6 mt-20 ">Our Book Store</h1>
            <img
              className="rounded-lg shadow-lg mb-4 object-cover w-[400px] "
              src={img6}
              alt="Book Store"
            />
            <p className="text-gray-900 mb-4">
              Welcome to our book store! We are passionate about literature and
              dedicated to providing a wide selection of books for all readers.
            </p>
            <p className="text-gray-700 mb-4">
              Our store is located at 123 Main Street, Cityville. Visit us
              during our business hours to explore the world of books!
            </p>
            <p className="text-gray-900">Contact us at: info@bookstore.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;