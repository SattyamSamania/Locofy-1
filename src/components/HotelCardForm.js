import { useMemo } from "react";

const HotelCardForm = ({
  unsplashHhRfsdWxXus,
  entireBungalow,
  matterhornSuites,
  night,
  reviews,
  prop,
  propBorder,
}) => {
  const moreDetailsButtonStyle = useMemo(() => {
    return {
      border: propBorder,
    };
  }, [propBorder]);

  return (
    <div className="self-stretch flex-1 flex flex-row items-start justify-center py-0 px-[8.970474243164062px] box-border w-3/12 text-left text-[11.96px] text-darkslategray-300 font-components-button-large md:w-[33.33%] sm:w-full sm:flex-[unset] sm:self-stretch">
      <a className="[text-decoration:none] self-stretch flex-1 rounded-[7.48px] bg-primary-contrast box-border flex flex-col items-start justify-start py-[11.213094711303711px] px-[9.71801471710205px] gap-[17.19px] w-3/12 text-[inherit] border-[0.7px] border-solid border-whitesmoke hover:bg-gainsboro-200 lg:w-[25%!important] md:w-full sm:w-[100%!important] sm:mb-5">
        <img
          className="self-stretch relative rounded-[7.48px] max-w-full overflow-hidden h-[149.5px] shrink-0 object-cover"
          alt=""
          src={unsplashHhRfsdWxXus}
        />
        <div className="self-stretch flex flex-row items-start justify-start gap-[8.22px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[4.49px]">
            <div className="self-stretch relative tracking-[0.02em] text-gray-100">
              {entireBungalow}
            </div>
            <b className="self-stretch relative text-[16.45px] tracking-[0.04em] capitalize sm:text-xl">
              {matterhornSuites}
            </b>
            <div className="self-stretch relative text-[13.46px] tracking-[0.04em]">
              {night}
            </div>
          </div>
          <img
            className="relative w-[18.7px] h-[18.7px] overflow-hidden shrink-0"
            alt=""
            src="/video.svg"
          />
        </div>
        <div className="self-stretch relative h-[14.2px] text-cornflowerblue-200">
          <div className="absolute top-[0px] left-[40.1px] tracking-[0.04em] inline-block w-[161.7px] h-[14.2px]">
            {reviews}
          </div>
          <div className="absolute top-[0px] left-[0px] w-[33.1px] h-[14.2px] text-darkslategray-300">
            <div className="absolute top-[0px] left-[15.2px] tracking-[0.04em] font-medium inline-block w-[17.9px] h-[14.2px]">
              {prop}
            </div>
            <img
              className="absolute h-[90.14%] w-[37.46%] top-[0%] right-[62.54%] bottom-[9.86%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector3.svg"
            />
          </div>
        </div>
        <button
          className="cursor-pointer p-0 bg-[transparent] self-stretch rounded-[2.99px] box-border h-[34.4px] overflow-hidden shrink-0 flex flex-col items-center justify-center border-[0.7px] border-solid border-lavender-200 sm:w-[100%!important]"
          style={moreDetailsButtonStyle}
        >
          <div className="relative text-[11.21px] tracking-[0.34px] leading-[19.44px] uppercase font-medium font-components-button-large text-cornflowerblue-200 text-left inline-block w-[81.5px] h-[19.4px] shrink-0">
            More details
          </div>
        </button>
      </a>
    </div>
  );
};

export default HotelCardForm;
