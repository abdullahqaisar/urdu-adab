import React from "react";

function BookCard() {
  return (
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
  );
}

export default BookCard;
