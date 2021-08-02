import React from "react";

import  {FacebookShareButton, TwitterShareButton, WhatsappShareButton} from "react-share";

const ShareOnSocialMedia = props => (
  <div className="row animated animatedFadeInUp fadeInUp social-btns text-right">
    <div className="social-btn">
      <FacebookShareButton url={props.url} quote={props.text}>
        <button className="btn btn-sm btn-facebook">
          <i className="fa fa-facebook" /> 
        </button>
      </FacebookShareButton>
    </div>
    <div className="social-btn">
      <TwitterShareButton url={props.url} title={props.text}>
        <button className="btn btn-sm twt-btn">
          <i class="fa fa-twitter" /> 
        </button>
      </TwitterShareButton>
    </div>
    <div className="social-btn">
      <WhatsappShareButton url={props.url} title={props.text}>
        <button className="btn btn-sm whtsp-btn">
          <i class="fa fa-whatsapp" /> 
        </button>
      </WhatsappShareButton>
    </div>
  </div>
);

export default ShareOnSocialMedia;
