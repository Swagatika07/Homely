import React from "react";
import "./Contact.css";
import { MdCall, MdChatBubble } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";
// import { MdCall } from 'react-icons/md'

const Contact = () => {
  return (
    <section className="c-wrapper" id="contact">
      <div className="paddings innerWidth flexCenter c-container">
        {/*left side*/}
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contacts</span>
          <span className="primaryText">Easy to Contact us</span>
          <span className="secondaryText">
            We always ready to help by providing the best servicex for you. We
            believe a good place to live can make your life better.
          </span>
          <div className="flexColStart contactModes">
            <div className="flexStart row">

            {/*first mode*/}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>

                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">+91 6754123098</span>
                  </div>
                </div>
                <div className="flexCenter button">Call Now</div>
              </div>

              {/*second mode*/}
              <div className="flexColCenter mode">
              <div className="flexStart">
                <div className="flexCenter icon">
                  <HiChatBubbleBottomCenter size={25} />
                </div>

                <div className="flexColStart detail">
                  <span className="primaryText">Chat</span>
                  <span className="secondaryText">+91 6754123098</span>
                </div>
              </div>
              <div className="flexCenter button">Chat Now</div>
            </div>
            </div>

            {/*second row*/}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>

                  <div className="flexColStart detail">
                    <span className="primaryText">Video</span>
                    <span className="secondaryText">+91 6754123098</span>
                  </div>
                </div>
                <div className="flexCenter button">VideoCall Now</div>
              </div>

              {/*second*/}
              <div className="flexColCenter mode">
              <div className="flexStart">
                <div className="flexCenter icon">
                  <MdChatBubble size={25} />
                </div>

                <div className="flexColStart detail">
                  <span className="primaryText">Message</span>
                  <span className="secondaryText">+91 6754123098</span>
                </div>
              </div>
              <div className="flexCenter button">Message Now</div>
            </div>
            </div>
          </div>
        </div>

        {/*right side*/}
        <div className="c-right">
          <div className="image-container">
            <img src="./interior2.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
