import React from "react";
import EmptyCard from "./emptyCard";

const ReviewCard = ({ reviews: allReviews, currentItem }) => {
  const yellowStar = (
    <i
      className="fa fa-star"
      style={{
        color: "#fff600",
        fontSize: "15px",
        marginRight: "3px"
      }}
    />
  );

  const reviews = allReviews.filter(rev => rev.sauce_id === currentItem._id);

  return (
    <div style={{ fontSize: "15px" }}>
      {!reviews || (reviews.length === 0 && <EmptyCard />)}

      {reviews.map(rev =>
        <div className="card" style={{ maxWidth: "1300px" }} key={rev._id}>
          <div className="card-body">
            <div className="row row-cols-2 mb-5 ">
              <div className="col-2">
                <p
                  style={{
                    fontSize: "22px",

                    paddingLeft: "15px"
                  }}
                >
                  {rev.rating_letter}
                </p>
              </div>

              <div className="col-10">
                <p className="card-text my-2">
                  <span>
                    <span>
                      {" "}{yellowStar}
                      {rev.rating_score}
                    </span>
                    <small className="text-muted ms-3"> Antonymous</small>
                  </span>
                </p>

                <p
                  style={{
                    fontWeight: "550",
                    marginTop: "10px",
                    marginBottom: "25px"
                  }}
                >
                  {rev.overall_review}{" "}
                </p>

                <div className="row row-cols-3 gy-3 me-5">
                  <div className="col-3 col-lg-1 border-bottom">aroma</div>
                  <div className="col-9 col-lg-1 border-bottom">
                    {rev.aroma_rating}
                  </div>
                  <div className="col-12 col-lg-10 border-bottom">
                    {rev.aroma_review}
                  </div>
                  <div className="col-3 col-lg-1 border-bottom">taste</div>
                  <div className="col-9 col-lg-1 border-bottom">
                    {rev.taste_rating}
                  </div>
                  <div className="col-12 col-lg-10 border-bottom">
                    {rev.taste_review}
                  </div>
                  <div className="col-3 col-lg-1 border-bottom">heat</div>
                  <div className="col-9 col-lg-1 border-bottom">
                    {rev.heat_rating}
                  </div>
                  <div className="col-12 col-lg-10 border-bottom">
                    {rev.heat_review}
                  </div>
                  <div className="col-3 col-lg-1 border-bottom">looks</div>
                  <div className="col-9 col-lg-1 border-bottom">
                    {rev.looks_rating}
                  </div>
                  <div className="col-12 col-lg-10 border-bottom">
                    {rev.looks_review}
                  </div>
                  <div className="col-3 col-lg-1">label</div>
                  <div className="col-9 col-lg-1">
                    {rev.label_rating}
                  </div>
                  <div className="col-12 col-lg-10">
                    {rev.label_review}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewCard;
