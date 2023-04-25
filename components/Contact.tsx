import React from 'react';
import { Discord, GitBook, Medium, Telegram, Twitter } from './Icon';
import { FaTelegramPlane, FaTwitter, FaDiscord } from 'react-icons/fa';
import { SiMedium, SiGitbook } from 'react-icons/si';
const Contact = () => {
  return (
    <section className="container gap-5 grid grid-cols-1 lg:grid-cols-2">
      <div className="card_3  grid place-items-center  h-[490px]  md:h-[460px]">
        <div className="text-center p-3 lg:p-24 space-y-5">
          <h2 className="text-2xl lg:text-3xl text-skin-purple font-IBM font-medium">
            Follow us on social media
          </h2>
          <p className="text-base font-PLUS font-normal text-[#44414C]">
            to stay informed about project launches, platform updates, Website
            XL 3 and exclusive events. Engage with the Xcel Pad community and be
            a part of the conversation.
          </p>
          <div className=" grid grid-cols-2 md:grid-cols-4 place-items-center  space-y-5 mt-3 ">
            <div>
              <a
                className=" flex justify-center items-center"
                href="https://t.me/XcelPadCommunity"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="social_link text-[#667AFF] flex justify-center items-center">
                  <FaTelegramPlane size={32} />
                </div>
              </a>
              <p className="text-base text-center pt-2 font-normal text-[#6F6781]">
                Telegram
              </p>
            </div>

            <div>
              <a
                className=" flex justify-center items-center"
                href="https://twitter.com/XcelPad"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="social_link text-[#667AFF] flex justify-center items-center">
                  <FaTwitter size={32} />
                </div>
              </a>
              <p className="text-base text-center pt-2 font-normal text-[#6F6781]">
                Twitter
              </p>
            </div>
            <div>
              <a
                className=" flex justify-center items-center"
                href="https://discord.com/invite/EqYPBZBaRJ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="social_link text-[#667AFF] flex justify-center items-center">
                  <FaDiscord size={32} />
                </div>
              </a>
              <p className="text-base text-center pt-2 font-normal text-[#6F6781]">
                Discord
              </p>
            </div>
            <div>
              <a
                className=" flex justify-center items-center"
                href="https://medium.com/@XcelPad"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="social_link text-[#667AFF] flex justify-center items-center">
                  <SiMedium size={32} />
                </div>
              </a>
              <p className="text-base text-center pt-2 font-normal text-[#6F6781]">
                Medium
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card_3  grid place-items-center h-[422px] md:h-[460px]">
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
          <a
            href="https://t.me/XcelPadCommunity"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="py-3  h-[54px] w-full text-base font-IBM text-white mx-auto hover:bg-white hover:text-[#EF4AF0] md:w-[146px] hover:border hover:border-[#EF4AF0]  bg-[#EF4AF0] font-medium px-7  ">
              Contact Us
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
