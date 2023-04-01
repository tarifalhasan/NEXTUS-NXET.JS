import React from 'react';
import { Discord, GitBook, Medium, Telegram, Twitter } from './Icon';
import { FaTelegramPlane, FaTwitter } from 'react-icons/fa';
const Contact = () => {
  return (
    <section className="container gap-5 grid grid-cols-1 lg:grid-cols-2">
      <div className="card_3">
        <div className="text-center p-5 lg:p-24 space-y-4">
          <h2 className="text-3xl text-skin-purple font-IBM font-medium">
            Follow us on social media
          </h2>
          <p className="text-base font-PLUS font-normal text-[#44414C]">
            to stay informed about project launches, platform updates, Website
            XL 3 and exclusive events. Engage with the Xcel Pad community and be
            a part of the conversation.
          </p>
          <div className="grid place-items-center grid-cols-3 lg:grid-cols-5">
            <a
              className=" flex justify-center items-center"
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Telegram />
            </a>
            <a
              className=" flex justify-center items-center"
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter />
            </a>
            <a
              className=" flex justify-center items-center"
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Discord />
            </a>
            <a
              className=" flex justify-center items-center"
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Medium />
            </a>
            <a
              className=" flex justify-center items-center"
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitBook />
            </a>
          </div>
        </div>
      </div>
      <div className="card_3">
        <div className="text-center p-5 lg:p-24 space-y-4">
          <h2 className="text-3xl text-skin-purple font-IBM font-medium">
            Get in Touch with Xcel Pad
          </h2>
          <p className="text-base font-PLUS font-normal text-[#44414C]">
            Do you have questions, suggestions, or feedback? Our dedicated team
            is here to help.
          </p>
          <p className="text-xs font-PLUS font-normal text-[#44414C]">
            Contact us through our support channels, and we&apos;ll get back to
            you as soon as possible.
          </p>
          <button className="btn-primary">Contact Us</button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
