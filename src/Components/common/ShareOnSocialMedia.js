import React from "react";

import  {FacebookShareButton, TwitterShareButton, WhatsappShareButton} from "react-share";

const ShareOnSocialMedia = props => (
  <div className="row animated animatedFadeInUp fadeInUp social-btns">
    <div className="col-md-4 col-sm-4 col-xs-4 social-btn">
      <FacebookShareButton url={props.url} quote={props.text}>
        <button className="btn btn-sm btn-facebook">
          <i className="fa fa-facebook" /> <span>Share</span>
        </button>
      </FacebookShareButton>
    </div>
    <div className="col-md-4 col-sm-4 col-xs-4 social-btn">
      <TwitterShareButton url={props.url} title={props.text}>
        <button className="btn btn-sm twt-btn">
          <i class="fa fa-twitter-square" /> <span>Tweet</span>
        </button>
      </TwitterShareButton>
    </div>
    <div className="col-md-4 col-sm-4 col-xs-4 social-btn">
      <WhatsappShareButton url={props.url} title={props.text}>
        <button className="btn btn-sm whtsp-btn">
          <i class="fab fa-whatsapp" /> <span>Share</span>
        </button>
      </WhatsappShareButton>
    </div>
  </div>
);

export default ShareOnSocialMedia;
