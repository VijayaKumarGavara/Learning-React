import { useLocation } from "react-router";
import { useState } from "react";
export default function ProductInfo() {
  const location = useLocation();
  const { item } = location.state;
  const [openReviewIndex, setOpenReviewIndex] = useState(0);
  function handleOpenReview(index) {
    if (openReviewIndex === index) setOpenReviewIndex(null);
    else setOpenReviewIndex(index);
  }
  return (
    <>
      <div className="w-6/12 my-4 m-auto text-center">
        <h1 className="text-xl font-bold">{item.title}</h1>
        <div className="w-72 h-56 mx-auto">
          {/* {item.images.map((imageUrl, index) => {
          return (
            <img
              className="flex flex-row flex-wrap w-8 "
              key={index}
              src={imageUrl}
            />
          );
        })} */}
          <img src={item.images[0]}></img>
        </div>

        <div className="my-24 ">
          <h2 className="text-lg font-semibold">Reviews</h2>
          <div className="mx-auto flex flex-col items-center gap-y-2">
            {item.reviews.map((review, index) => {
              return (
                <div
                  key={index}
                  className="w-full border-2 flex flex-col gap-y-1"
                >
                  <div className="font-medium text-lg">
                    <button
                      className="hover:cursor-pointer flex justify-around w-full"
                      onClick={() => {
                        handleOpenReview(index);
                      }}
                    >
                      <span>
                        {review.reviewerName} - {review.rating}⭐
                      </span>
                      <span>{openReviewIndex === index ? "⬆" : "⬇"}</span>
                    </button>
                  </div>
                  {openReviewIndex === index && (
                    <div className="border-2 border-b-blue-800">
                      {review.comment}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
