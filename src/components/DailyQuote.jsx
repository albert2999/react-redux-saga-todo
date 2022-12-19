import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuote } from "../redux/ducks/quote";
import ClipLoader from "react-spinners/ClipLoader";

const DailyQuote = () => {
  const dispatch = useDispatch();
  const quote = useSelector((state) => state.quote.quote);

  useEffect(() => {
    dispatch(getQuote());

    return () => {};
  }, [dispatch]);



  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
        <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
        </symbol>
      </svg>

      <div
        className="alert alert-primary d-flex align-items-center"
        role="alert"
      >
        <svg
          className="bi flex-shrink-0 me-2"
          width="24"
          height="24"
          role="img"
          aria-label="Info:"
        >
          <use xlinkHref="#info-fill" />
        </svg>

        {quote ? (
          <div className="ms-3">
            "{quote.content}" <br />
            <small>~ {quote.author}</small>

          </div>
            
        ) : <ClipLoader
        color={"#09094f"}
        loading={!quote}
        className="ms-auto me-auto mx-2"
      //   cssOverride={override}
        size={70}
        aria-label="Loading Spinner"
        data-testid="loader"
      />}

      </div>
    </div>
  );
};

export default DailyQuote;
