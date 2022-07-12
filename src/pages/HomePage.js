import React from "react";
import "./Home.css";
import bannerImg from "../images/banner-img.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="">
      <div className="header">
        <img src={bannerImg} alt="" className="banner" />
        <div className="header-text">
          <h1 className="heading1">اردو</h1>
          <h2>/ˈʊəduː,ˈəːduː/</h2>
          <h2>noun</h2>
          <div className="defination">
            <p>
              An Indic language closely related to Hindi but written in the
              Persian script
            </p>
          </div>
        </div>
      </div>
      <div className="m-4">
        <h1>مشہور شعراء</h1>
        <div className="row">
          <div className="col-md-4">
            <div className="card bg-secondary m-2 ">
              <img
                className="card-img-top"
                src="https://sm.mashable.com/mashable_pk/photo/default/faiz_sj29.png"
                alt="img"
              />
              <div className="card-body bg-secondary">
                <h5 className="card-title text-light">فیض احمد فیض</h5>
                <p className="card-text text-light">
                  گلوں میں رنگ بھرے باد نوبہار چلے
                </p>
                <p className="card-text text-light">
                  چلے بھی آؤ کہ گلشن کا کاروبار چلے
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-secondary m-2 ">
              <img
                className="card-img-top"
                src="https://akm-img-a-in.tosshub.com/sites/dailyo/fb_feed_images/story_image/201712/mirza-ghalib-fb_120117035039.jpg"
                alt="img"
              />
              <div className="card-body bg-secondary">
                <h5 className="card-title text-light">مرزا غالب</h5>
                <p className="card-text text-light">
                  یاد ہے شادی میں بھی ہنگامۂ یا رب مجھے{" "}
                </p>
                <p className="card-text text-light">
                  سبحۂ زاہد ہوا ہے خندہ زیر لب مجھے
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-secondary m-2 ">
              <img
                className="card-img-top"
                src="https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2021/01/11/909874-naseer-turabi-death.jpg"
                alt="img"
              />
              <div className="card-body bg-secondary">
                <h5 className="card-title text-light">نصیر ترابی</h5>
                <p className="card-text text-light">
                  وہ ہم سفر تھا مگر اس سے ہم نوائی نہ تھی
                </p>
                <p className="card-text text-light">
                  کہ دھوپ چھاؤں کا عالم رہا جدائی نہ تھی
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-secondary m-2 ">
              <img
                className="card-img-top"
                src="https://sm.mashable.com/mashable_pk/photo/default/faiz_sj29.png"
                alt="img"
              />
              <div className="card-body bg-secondary">
                <h5 className="card-title text-light">فیض احمد فیض</h5>
                <p className="card-text text-light">
                  گلوں میں رنگ بھرے باد نوبہار چلے
                </p>
                <p className="card-text text-light">
                  چلے بھی آؤ کہ گلشن کا کاروبار چلے
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-secondary m-2 ">
              <img
                className="card-img-top"
                src="https://akm-img-a-in.tosshub.com/sites/dailyo/fb_feed_images/story_image/201712/mirza-ghalib-fb_120117035039.jpg"
                alt="img"
              />
              <div className="card-body bg-secondary">
                <h5 className="card-title text-light">مرزا غالب</h5>
                <p className="card-text text-light">
                  یاد ہے شادی میں بھی ہنگامۂ یا رب مجھے{" "}
                </p>
                <p className="card-text text-light">
                  سبحۂ زاہد ہوا ہے خندہ زیر لب مجھے
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card bg-secondary m-2 ">
              <img
                className="card-img-top"
                src="https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2021/01/11/909874-naseer-turabi-death.jpg"
                alt="img"
              />
              <div className="card-body bg-secondary">
                <h5 className="card-title text-light">نصیر ترابی</h5>
                <p className="card-text text-light">
                  وہ ہم سفر تھا مگر اس سے ہم نوائی نہ تھی
                </p>
                <p className="card-text text-light">
                  کہ دھوپ چھاؤں کا عالم رہا جدائی نہ تھی
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
