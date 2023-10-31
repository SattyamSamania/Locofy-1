import { useState } from "react";
import {
  Autocomplete,
  TextField,
  Icon,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import RecommendedHolidaysCard from "../components/RecommendedHolidaysCard";
import HotelCardForm from "../components/HotelCardForm";
import HotelCardForm1 from "../components/HotelCardForm1";

const CoverFrame = () => {
  const [dateFieldDateTimePickerValue, setDateFieldDateTimePickerValue] =
    useState(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="relative bg-primary-contrast w-full h-[960px] overflow-hidden text-left text-xl text-primary-contrast font-components-button-large">
        <div className="absolute top-[0px] left-[0px] bg-whitesmoke w-[1920px] h-[960px]" />
        <img
          className="absolute top-[0px] left-[297.9px] w-[1302.1px] h-[960px] object-cover"
          alt=""
          src="/group-16@2x.png"
        />
        <img
          className="absolute h-[7.2%] w-[22.92%] top-[44.34%] right-[3.36%] bottom-[48.46%] left-[73.72%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/group-17.svg"
        />
        <div className="absolute top-[875.3px] left-[1173.3px] text-skyblue">
          Made by Team Locofy
        </div>
        <div className="absolute top-[827.4px] left-[1173.3px] w-56 h-10 text-[34px]">
          <div className="absolute top-[0px] left-[0px] font-medium">
            Travel Website
          </div>
        </div>
        <div className="absolute top-[53.3px] left-[56px] rounded-2xl bg-primary-contrast w-[1076.5px] h-[850.7px] overflow-hidden flex flex-col items-center justify-start gap-[51.58px] text-center text-[13.46px] hover:[background:linear-gradient(#fff,_#fff),_#87550a] sm:w-full sm:hover:bg-orange">
          <div className="self-stretch flex flex-col items-center justify-start text-[45.6px] font-baloo-bhai">
            <header className="self-stretch bg-primary-contrast h-[57.6px] flex flex-row items-center justify-center py-[16.445871353149414px] px-[59.803165435791016px] box-border sticky w-full top-[0] [background:white] text-left text-[10.47px] text-darkslategray-200 font-components-button-large lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border">
              <div className="flex-1 flex flex-row items-center justify-between">
                <img
                  className="relative w-[130.1px] h-[24.7px] overflow-hidden shrink-0"
                  alt=""
                  src="/fickleflight-logo.svg"
                />
                <div className="flex flex-row items-center justify-end gap-[26.91px] sm:flex">
                  <div className="flex flex-row items-center justify-end gap-[22.43px] md:hidden">
                    <div className="relative text-cornflowerblue-200 inline-block w-[35.1px] h-3 shrink-0">
                      Explore
                    </div>
                    <div className="relative inline-block w-[32.1px] h-3 shrink-0">
                      Search
                    </div>
                    <div className="relative inline-block w-[30.6px] h-3 shrink-0">
                      Hotels
                    </div>
                    <div className="relative inline-block w-[29.2px] h-3 shrink-0">
                      Offers
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-center gap-[8.97px]">
                    <img
                      className="relative w-[17.9px] h-[17.9px] overflow-hidden shrink-0 hidden md:flex"
                      alt=""
                      src="/notification.svg"
                    />
                    <img
                      className="relative w-[17.9px] h-[17.9px] overflow-hidden shrink-0"
                      alt=""
                      src="/notification1.svg"
                    />
                    <img
                      className="rounded-[28.41px] w-[26.9px] h-[26.9px] object-cover"
                      alt=""
                      src="/top_avatar@2x.png"
                    />
                  </div>
                </div>
              </div>
            </header>
            <div className="self-stretch relative h-[478.4px]">
              <div className="absolute w-full top-[0px] right-[0px] left-[0px] [background:linear-gradient(78.78deg,_#114f8b_5.2%,_#2a9ad7)] h-[478.4px]" />
              <img
                className="absolute w-full top-[0.3px] right-[0px] left-[0px] max-w-full overflow-hidden h-[478.4px] object-cover"
                alt=""
                src="/banner--background@2x.png"
              />
              <div className="absolute top-[0px] left-[0px] w-full h-[478.4px] flex flex-col items-center justify-center py-0 px-[104.6555404663086px] box-border gap-[32.14px] md:pl-[30px] md:pr-[30px] md:box-border">
                <div className="self-stretch flex flex-col items-center justify-start gap-[3.74px]">
                  <div className="self-stretch relative leading-[50.09px] sm:text-[42px] sm:leading-[48px]">{`Let’s explore & travel the world`}</div>
                  <div className="self-stretch relative text-[17.94px] leading-[23.92px] font-components-button-large">
                    Find the best destinations and the most popular stays!
                  </div>
                </div>
                <div className="self-stretch rounded-[7.48px] bg-primary-contrast flex flex-row items-start justify-start p-[14.950791358947754px] text-left text-[8.97px] text-gray-200 font-components-button-large md:flex-col">
                  <div className="flex-1 flex flex-row items-start justify-start md:w-full md:flex-[unset] md:self-stretch sm:flex-col">
                    <div className="flex-1 flex flex-col items-center justify-center p-[3.7376978397369385px] sm:w-full sm:flex-[unset] sm:self-stretch">
                      <Autocomplete
                        className="self-stretch"
                        size="medium"
                        disablePortal
                        options={[
                          "Singapore (SIN)",
                          "Sydney (SYD)",
                          "Siem Reap (REP)",
                          "Shanghai (PVG)Sanya (SYX)",
                        ]}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            color="primary"
                            label="Departure"
                            variant="outlined"
                            placeholder=""
                            helperText=""
                          />
                        )}
                        defaultValue="Singapore -  Changi (SIN)"
                      />
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center p-[3.7376978397369385px] sm:w-full sm:flex-[unset] sm:self-stretch">
                      <div className="self-stretch h-[41.9px] flex flex-col items-start justify-start">
                        <div className="self-stretch rounded-[2.99px] box-border h-[41.9px] flex flex-col items-start justify-start py-0 px-[8.970474243164062px] border-[0.7px] border-solid border-gray-300">
                          <div className="bg-primary-contrast h-[1.5px] flex flex-row items-center justify-start py-0 px-[2.9901583194732666px] box-border">
                            <div className="relative tracking-[0.11px] leading-[8.97px] flex items-center w-[26.2px] h-[9px] shrink-0">
                              Arrival
                            </div>
                          </div>
                          <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[11.213094711303711px] px-0 gap-[5.98px] text-center text-dimgray">
                            <div className="hidden flex-row items-start justify-start gap-[5.98px]">
                              <div className="flex flex-col items-start justify-start">
                                <div className="rounded-[11.96px] bg-gainsboro-100 flex flex-row items-center justify-start p-[2.9901583194732666px]">
                                  <div className="rounded-[47.84px] bg-silver w-[17.9px] h-[17.9px] overflow-hidden shrink-0 hidden flex-row items-center justify-center">
                                    <div className="self-stretch flex-1 relative tracking-[0.3px] leading-[166%] flex items-center justify-center">
                                      F
                                    </div>
                                  </div>
                                  <div className="flex flex-col items-start justify-start py-[2.2426187992095947px] px-[4.4852375984191895px] text-left text-[9.72px] text-text-primary">
                                    <div className="relative tracking-[0.12px] leading-[13.46px]">
                                      Chip
                                    </div>
                                  </div>
                                  <img
                                    className="relative w-[17.9px] h-[17.9px] overflow-hidden shrink-0"
                                    alt=""
                                    src="/cancel.svg"
                                  />
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-start">
                                <div className="rounded-[11.96px] bg-gainsboro-100 flex flex-row items-center justify-start p-[2.9901583194732666px]">
                                  <div className="rounded-[47.84px] bg-silver w-[17.9px] h-[17.9px] overflow-hidden shrink-0 hidden flex-row items-center justify-center">
                                    <div className="self-stretch flex-1 relative tracking-[0.3px] leading-[166%] flex items-center justify-center">
                                      F
                                    </div>
                                  </div>
                                  <div className="flex flex-col items-start justify-start py-[2.2426187992095947px] px-[4.4852375984191895px] text-left text-[9.72px] text-text-primary">
                                    <div className="relative tracking-[0.12px] leading-[13.46px]">
                                      Chip
                                    </div>
                                  </div>
                                  <img
                                    className="relative w-[17.9px] h-[17.9px] overflow-hidden shrink-0"
                                    alt=""
                                    src="/cancel.svg"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="flex-1 relative text-[11.96px] tracking-[0.11px] leading-[17.94px] text-text-primary text-left">
                              Los Angeles (LA)
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center p-[3.7376978397369385px] sm:w-full sm:flex-[unset] sm:self-stretch">
                      <div className="self-stretch">
                        <DatePicker
                          label="Date"
                          value={dateFieldDateTimePickerValue}
                          onChange={(newValue) => {
                            setDateFieldDateTimePickerValue(newValue);
                          }}
                          slotProps={{
                            textField: {
                              variant: "outlined",
                              size: "medium",
                              fullWidth: true,
                              color: "primary",
                            },
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center p-[3.7376978397369385px] text-center text-[11.21px] text-primary-contrast md:w-full md:text-left">
                    <div className="rounded-[2.99px] bg-orange w-[122.6px] h-[41.9px] overflow-hidden shrink-0 flex flex-col items-center justify-center [transition:0.3s] hover:bg-orange md:mr-[auto] sm:w-[100%!important]">
                      <div className="relative tracking-[0.34px] leading-[19.44px] uppercase font-medium inline-block w-[109.9px]">
                        Search flights
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-start py-0 px-[59.803165435791016px] box-border gap-[59.8px] max-w-[1280px] text-left text-darkslategray-300 md:pl-[30px] md:pr-[30px] md:box-border">
            <div className="self-stretch flex flex-col items-start justify-start gap-[14.95px] md:block">
              <b className="relative tracking-[0.04em] uppercase inline-block w-[947.9px]">
                Upcoming Flight
              </b>
              <div className="self-stretch flex flex-row items-start justify-start gap-[26.91px] text-[17.94px] text-cornflowerblue-300 md:flex-col">
                <div className="rounded-[5.98px] flex flex-col items-start justify-start p-[14.950791358947754px] gap-[15.7px] border-[0.7px] border-solid border-whitesmoke lg:w-[520px] md:w-full md:block md:mb-[30px]">
                  <div className="self-stretch flex flex-row items-center justify-between">
                    <div className="relative w-[53.8px] h-[34.4px]">
                      <b className="absolute top-[0px] left-[0px] tracking-[0.04em] capitalize inline-block w-[33.4px] h-[20.9px]">
                        SIN
                      </b>
                      <div className="absolute top-[22.4px] left-[0px] text-[10.47px] tracking-[0.02em] capitalize text-gray-100 inline-block w-[53.8px] h-3">
                        Singapore
                      </div>
                    </div>
                    <div className="relative w-[87.7px] h-[33px] text-[10.47px] text-gray-100">
                      <b className="absolute top-[21px] left-[17.7px] tracking-[0.02em] capitalize inline-block w-[49.1px] h-3">
                        15H 55M
                      </b>
                      <img
                        className="absolute top-[0px] left-[0px] w-[87.7px] h-[17.9px]"
                        alt=""
                        src="/group-171.svg"
                      />
                    </div>
                    <div className="relative w-[65.2px] h-[34.4px] text-right">
                      <b className="absolute top-[0px] left-[26.9px] tracking-[0.04em] capitalize inline-block w-[38.3px] h-[20.9px]">
                        LAX
                      </b>
                      <div className="absolute top-[22.4px] left-[0px] text-[10.47px] tracking-[0.02em] capitalize text-gray-100 inline-block w-[65.2px] h-3">
                        Los Angeles
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch relative box-border h-[0.7px] border-t-[0.7px] border-solid border-whitesmoke md:w-full" />
                  <div className="self-stretch flex flex-row items-center justify-between text-[10.47px] text-gray-100">
                    <div className="relative tracking-[0.02em] capitalize inline-block w-[152.4px] shrink-0">
                      Departs on: 1 May, 08:00 AM
                    </div>
                    <div className="relative tracking-[0.02em] text-right inline-block w-[65.2px] shrink-0">
                      <b>4 days</b>
                      <span> to go</span>
                    </div>
                  </div>
                </div>
                <div className="relative box-border w-[0.7px] h-[109.1px] border-r-[0.7px] border-solid border-whitesmoke md:hidden" />
                <div className="flex-1 flex flex-col items-start justify-start gap-[14.95px] text-[13.46px] text-lightgray md:w-full md:flex-[unset] md:self-stretch">
                  <div className="self-stretch relative tracking-[0.04em] uppercase">
                    Prepare for your trip
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-between sm:flex-row sm:text-center sm:flex-wrap sm:justify-between sm:ml-[-28px] sm:mr-[-28px]">
                    <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[5.98px] sm:pb-5 sm:box-border sm:w-[33.33%] sm:text-center">
                      <img
                        className="relative w-[48.9px] h-[48.9px]"
                        alt=""
                        src="/group-21.svg"
                      />
                      <div className="relative text-[11.21px] tracking-[0.04em] font-components-button-large text-gray-100 text-left inline-block w-[29.2px] h-[13.5px] shrink-0">
                        Hotel
                      </div>
                    </button>
                    <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[5.98px] sm:pb-5 sm:box-border sm:w-[33.33%] sm:text-center">
                      <div className="relative w-[48.9px] h-[48.9px]">
                        <div className="absolute top-[0px] left-[0px] rounded-[11.96px] bg-sandybrown w-[48.9px] h-[48.9px]" />
                        <img
                          className="absolute h-[47.85%] w-[48.26%] top-[25.97%] right-[25.97%] bottom-[26.18%] left-[25.77%] max-w-full overflow-hidden max-h-full"
                          alt=""
                          src="/group.svg"
                        />
                      </div>
                      <div className="relative text-[11.21px] tracking-[0.04em] font-components-button-large text-gray-100 text-center inline-block w-[59.8px] h-[13.5px] shrink-0">
                        Attractions
                      </div>
                    </button>
                    <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[5.98px] sm:pb-5 sm:box-border sm:w-[33.33%] sm:text-center">
                      <img
                        className="relative w-[48.9px] h-[48.9px]"
                        alt=""
                        src="/group-211.svg"
                      />
                      <div className="relative text-[11.21px] tracking-[0.04em] font-components-button-large text-gray-100 text-center inline-block w-[23.9px] h-[13.5px] shrink-0">
                        Eats
                      </div>
                    </button>
                    <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[5.98px] sm:pb-5 sm:box-border sm:w-[33.33%] sm:text-center">
                      <div className="relative w-[48.9px] h-[48.9px]">
                        <div className="absolute top-[0px] left-[0px] rounded-[11.96px] bg-gold w-[48.9px] h-[48.9px]" />
                        <img
                          className="absolute h-[48.47%] w-[41.1%] top-[26.58%] right-[29.45%] bottom-[24.95%] left-[29.45%] max-w-full overflow-hidden max-h-full"
                          alt=""
                          src="/vector.svg"
                        />
                      </div>
                      <div className="relative text-[11.21px] tracking-[0.04em] font-components-button-large text-gray-100 text-center inline-block w-[52.3px] h-[13.5px] shrink-0">
                        Commute
                      </div>
                    </button>
                    <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[5.98px] sm:pb-5 sm:box-border sm:w-[33.33%] sm:text-center">
                      <div className="relative w-[52.3px] h-[48.9px]">
                        <div className="absolute top-[0px] left-[0px] rounded-[11.96px] bg-cornflowerblue-100 w-[52.3px] h-[48.9px]" />
                        <img
                          className="absolute h-[40.08%] w-[40.54%] top-[29.65%] right-[29.64%] bottom-[30.27%] left-[29.83%] max-w-full overflow-hidden max-h-full"
                          alt=""
                          src="/vector1.svg"
                        />
                      </div>
                      <div className="relative text-[11.21px] tracking-[0.04em] font-components-button-large text-gray-100 text-center inline-block w-6">
                        Taxi
                      </div>
                    </button>
                    <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[5.98px] sm:pb-5 sm:box-border sm:w-[33.33%] sm:text-center">
                      <div className="relative w-[48.9px] h-[48.9px]">
                        <div className="absolute top-[0px] left-[0px] rounded-[11.96px] bg-yellowgreen w-[48.9px] h-[48.9px]" />
                        <img
                          className="absolute h-[35.58%] w-[39.88%] top-[32.11%] right-[30.06%] bottom-[32.31%] left-[30.06%] max-w-full overflow-hidden max-h-full"
                          alt=""
                          src="/vector2.svg"
                        />
                      </div>
                      <div className="relative text-[11.21px] tracking-[0.04em] font-components-button-large text-gray-100 text-center inline-block w-[38.9px] h-[13.5px] shrink-0">
                        Movies
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[17.94px] text-cornflowerblue-300">
              <div className="self-stretch flex flex-row items-center justify-start sm:flex-col sm:self-start">
                <div className="flex-1 flex flex-col items-start justify-start gap-[4.49px] sm:flex-[unset] sm:self-stretch">
                  <b className="self-stretch relative tracking-[0.04em] uppercase">
                    Plan your next trip
                  </b>
                  <b className="self-stretch relative text-[22.43px] tracking-[0.04em] capitalize text-darkslategray-300 sm:text-3xl">
                    Most Popular Destinations
                  </b>
                </div>
                <a className="[text-decoration:none] rounded-[23.17px] bg-primary-contrast w-[173px] flex flex-row items-start justify-start gap-[7.48px] text-right text-[inherit] md:hidden">
                  <div className="relative tracking-[0.04em] font-medium inline-block w-[147.5px] shrink-0">
                    View all destinations
                  </div>
                  <img
                    className="relative w-[17.9px] h-[17.9px] overflow-hidden shrink-0"
                    alt=""
                    src="/arrowright.svg"
                  />
                </a>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start ml-[-16px] mr-[-16px] md:ml-[-16px] md:mr-[-16px] md:flex-wrap md:mt-[-16px] md:mb-[-16px]">
                <button className="cursor-pointer [border:none] py-0 px-[11.960633277893066px] bg-[transparent] w-3/12 flex flex-col items-center justify-center box-border md:p-4 md:box-border md:w-6/12 sm:w-full">
                  <div className="self-stretch relative rounded-[7.48px] h-[136.1px] overflow-hidden shrink-0">
                    <img
                      className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                      src="/unsplashnnzkznywhau@2x.png"
                    />
                    <div className="absolute w-[calc(100%_-_0.4px)] top-[0px] right-[0.2px] left-[0.2px] flex flex-row items-start justify-start py-[5.980316638946533px] px-[8.970474243164062px] box-border">
                      <b className="flex-1 relative text-[14.95px] tracking-[0.02em] font-components-button-large text-primary-contrast text-left">
                        Paris
                      </b>
                      <div className="relative w-[68px] h-[44.1px]">
                        <div className="absolute top-[15.7px] left-[0px] text-[28.41px] leading-[28.41px] font-baloo-bhai text-primary-contrast text-right inline-block w-[68px] h-[28.4px]">
                          $699
                        </div>
                        <div className="absolute top-[0px] left-[28.7px] text-[11.96px] tracking-[0.04em] uppercase font-components-button-large text-primary-contrast text-right inline-block w-[39.3px] h-[14.2px]">
                          from
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
                <button className="cursor-pointer [border:none] py-0 px-[11.960633277893066px] bg-[transparent] w-3/12 flex flex-col items-center justify-center box-border md:p-4 md:box-border md:w-6/12 sm:w-full">
                  <div className="self-stretch relative rounded-[7.48px] h-[136.1px] overflow-hidden shrink-0">
                    <img
                      className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                      src="/unsplashyc8qqp50bda@2x.png"
                    />
                    <div className="absolute w-[calc(100%_-_0.4px)] top-[0px] right-[0.2px] left-[0.2px] flex flex-row items-start justify-start py-[5.980316638946533px] px-[8.970474243164062px] box-border">
                      <b className="flex-1 relative text-[14.95px] tracking-[0.02em] font-components-button-large text-primary-contrast text-left">
                        Greece
                      </b>
                      <div className="relative w-[74.7px] h-[44.1px]">
                        <div className="absolute top-[15.7px] left-[0px] text-[28.41px] leading-[28.41px] font-baloo-bhai text-primary-contrast text-right inline-block w-[74px] h-[28.4px]">
                          $1079
                        </div>
                        <div className="absolute top-[0px] left-[35.4px] text-[11.96px] tracking-[0.04em] uppercase font-components-button-large text-primary-contrast text-right inline-block w-[39.3px] h-[14.2px]">
                          from
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
                <button className="cursor-pointer [border:none] py-0 px-[11.960633277893066px] bg-[transparent] w-3/12 flex flex-col items-center justify-center box-border md:p-4 md:box-border md:w-6/12 sm:w-full">
                  <div className="self-stretch relative rounded-[7.48px] h-[136.1px] overflow-hidden shrink-0">
                    <img
                      className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                      src="/unsplashltnpejwdsay@2x.png"
                    />
                    <div className="absolute w-[calc(100%_-_0.4px)] top-[0px] right-[0.2px] left-[0.2px] flex flex-row items-start justify-start py-[5.980316638946533px] px-[8.970474243164062px] box-border">
                      <b className="flex-1 relative text-[14.95px] tracking-[0.02em] font-components-button-large text-primary-contrast text-left">
                        Norway
                      </b>
                      <div className="relative w-[68px] h-[44.1px]">
                        <div className="absolute top-[15.7px] left-[0px] text-[28.41px] leading-[28.41px] font-baloo-bhai text-primary-contrast text-right inline-block w-[68px] h-[28.4px]">
                          $895
                        </div>
                        <div className="absolute top-[0px] left-[28.7px] text-[11.96px] tracking-[0.04em] uppercase font-components-button-large text-primary-contrast text-right inline-block w-[39.3px] h-[14.2px]">
                          from
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
                <button className="cursor-pointer [border:none] py-0 px-[11.960633277893066px] bg-[transparent] w-3/12 flex flex-col items-center justify-center box-border md:p-4 md:box-border md:w-6/12 sm:w-full">
                  <div className="self-stretch relative rounded-[7.48px] h-[136.1px] overflow-hidden shrink-0">
                    <img
                      className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                      src="/unsplashm0oiyn5u8zm@2x.png"
                    />
                    <div className="absolute w-[calc(100%_-_0.4px)] top-[0px] right-[0.2px] left-[0.2px] flex flex-row items-start justify-start py-[5.980316638946533px] px-[8.970474243164062px] box-border">
                      <b className="flex-1 relative text-[14.95px] tracking-[0.02em] font-components-button-large text-primary-contrast text-left">
                        Tuscany
                      </b>
                      <div className="relative w-[75.2px] h-[44.1px]">
                        <div className="absolute top-[15.7px] left-[0px] text-[28.41px] leading-[28.41px] font-baloo-bhai text-primary-contrast text-right inline-block w-[75.2px] h-[28.4px]">
                          $1245
                        </div>
                        <div className="absolute top-[0px] left-[35.9px] text-[11.96px] tracking-[0.04em] uppercase font-components-button-large text-primary-contrast text-right inline-block w-[39.3px] h-[14.2px]">
                          from
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
              <div className="rounded-[23.17px] bg-primary-contrast w-[173px] hidden flex-row items-start justify-start gap-[7.48px] text-right md:flex md:mt-4">
                <div className="relative tracking-[0.04em] font-medium inline-block w-[147.5px] shrink-0 md:w-auto">
                  View all destinations
                </div>
                <img
                  className="relative w-[17.9px] h-[17.9px] overflow-hidden shrink-0"
                  alt=""
                  src="/arrowright.svg"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-center gap-[17.94px] text-[22.43px]">
              <div className="self-stretch flex flex-row items-center justify-start">
                <b className="flex-1 relative tracking-[0.04em] capitalize sm:text-3xl">
                  Recommended Holidays
                </b>
                <a className="[text-decoration:none] rounded-[23.17px] bg-primary-contrast w-[149.4px] flex flex-row items-start justify-start gap-[7.48px] text-right text-[13.46px] text-cornflowerblue-300 md:hidden">
                  <div className="relative tracking-[0.04em] font-medium inline-block w-[124px] shrink-0">
                    View all holidays
                  </div>
                  <img
                    className="relative w-[17.9px] h-[17.9px] overflow-hidden shrink-0"
                    alt=""
                    src="/arrowright1.svg"
                  />
                </a>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start ml-[-16px] mr-[-16px] md:ml-[-16px] md:mr-[-16px] md:flex-wrap">
                <RecommendedHolidaysCard
                  locationDescription="/unsplash5mv818tzxeo@2x.png"
                  destinationImageUrl="Bali"
                  packageDuration="4D3N"
                  price="$899"
                />
                <RecommendedHolidaysCard
                  locationDescription="/unsplashj82dskoxvy8@2x.png"
                  destinationImageUrl="Switzerland"
                  packageDuration="6D5N"
                  price="$900"
                />
                <RecommendedHolidaysCard
                  locationDescription="/unsplash4ezkckxolre@2x.png"
                  destinationImageUrl="Boracay"
                  packageDuration="5D4N"
                  price="$699"
                />
                <RecommendedHolidaysCard
                  locationDescription="/unsplashuyqmxhjr3ne@2x.png"
                  destinationImageUrl="Palawan"
                  packageDuration="4D3N"
                  price="$789"
                />
              </div>
              <div className="rounded-[23.17px] bg-primary-contrast w-[149.4px] hidden flex-row items-start justify-start gap-[7.48px] text-right text-[13.46px] text-cornflowerblue-300 md:flex md:[mrgin-top:16px]">
                <div className="relative tracking-[0.04em] font-medium inline-block w-[124px] shrink-0 md:w-auto">
                  View all holidays
                </div>
                <img
                  className="relative w-[17.9px] h-[17.9px] overflow-hidden shrink-0"
                  alt=""
                  src="/arrowright1.svg"
                />
              </div>
            </div>
            <form className="self-stretch flex flex-col items-start justify-start gap-[14.95px]">
              <div className="self-stretch flex flex-row items-center justify-center">
                <div className="flex-1 relative h-[26.2px]">
                  <b className="absolute top-[0px] left-[0px] text-[22.43px] tracking-[0.04em] capitalize inline-block font-components-button-large text-darkslategray-300 text-left w-[826.3px] h-[26.2px] sm:text-3xl">
                    Popular Stays
                  </b>
                </div>
                <a className="[text-decoration:none] rounded-[23.17px] bg-primary-contrast flex flex-row items-start justify-start gap-[7.48px] md:hidden">
                  <div className="relative text-[13.46px] tracking-[0.04em] font-medium font-components-button-large text-cornflowerblue-300 text-right inline-block w-[105.1px] shrink-0">
                    View all stays
                  </div>
                  <img
                    className="relative w-[17.9px] h-[17.9px] overflow-hidden shrink-0"
                    alt=""
                    src="/arrowright2.svg"
                  />
                </a>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start ml-[-12px] mr-[-12px] lg:pr-10 lg:box-border lg:ml-[-12px] lg:mr-[-50px] md:mr-[-50px] md:ml-[-12px] sm:flex-col sm:pr-0 sm:box-border sm:mr-[-12px] sm:ml-[-12px]">
                <HotelCardForm
                  unsplashHhRfsdWxXus="/unsplashhhrfsdwxxus@2x.png"
                  entireBungalow="Entire bungalow"
                  matterhornSuites="Matterhorn Suites"
                  night="$575/night"
                  reviews="(60 reviews)"
                  prop="4.9"
                />
                <HotelCardForm1
                  unsplashtSn8bPOpVEo="/unsplashtsn8bpopveo@2x.png"
                  storyBeachfrontSuite="2-Story beachfront suite"
                  discoveryShores="Discovery Shores"
                  night="$360/night"
                  reviews="(116 reviews)"
                  prop="4.8"
                  vector="/vector3.svg"
                />
                <HotelCardForm1
                  unsplashtSn8bPOpVEo="/unsplashrlwe8f8anoc@2x.png"
                  storyBeachfrontSuite="Single deluxe hut"
                  discoveryShores="Arctic Hut "
                  night="$420/night"
                  reviews="(78 reviews)"
                  prop="4.7"
                  vector="/vector4.svg"
                  propWidth="37.65%"
                  propRight="62.35%"
                />
                <HotelCardForm
                  unsplashHhRfsdWxXus="/unsplashyqrybvxug5q@2x.png"
                  entireBungalow="Deluxe King Room"
                  matterhornSuites="Lake Louise Inn"
                  night="$244/night"
                  reviews="(63 reviews)"
                  prop="4.6"
                  propBorder="0.7px solid #cdddec"
                />
              </div>
              <div className="rounded-[23.17px] bg-primary-contrast hidden flex-row items-start justify-start gap-[7.48px] md:flex md:mt-4">
                <div className="relative text-[13.46px] tracking-[0.04em] font-medium font-components-button-large text-cornflowerblue-300 text-right inline-block w-[105.1px] shrink-0 md:w-auto">
                  View all stays
                </div>
                <img
                  className="relative w-[17.9px] h-[17.9px] overflow-hidden shrink-0"
                  alt=""
                  src="/arrowright2.svg"
                />
              </div>
            </form>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start text-cornflowerblue-300">
            <div className="self-stretch relative bg-aliceblue h-[395.4px] overflow-hidden shrink-0">
              <img
                className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[396.2px] object-cover"
                alt=""
                src="/rectangle-186@2x.png"
              />
              <div className="[position:relative!important] top-[38.9px] left-[auto!important] w-[410.4px] flex flex-col items-center justify-start p-[14.950791358947754px] box-border gap-[22.43px] ml-[auto] mr-[auto] md:py-6 md:px-0 md:box-border sm:pl-6 sm:pr-6 sm:box-border sm:ml-[auto] sm:mr-[auto] sm:[position:relative!important] sm:left-[auto!important] sm:w-full">
                <div className="self-stretch flex flex-col items-center justify-start gap-[5.23px]">
                  <b className="self-stretch relative tracking-[0.04em] uppercase">
                    subscribe to our newsletter
                  </b>
                  <b className="self-stretch relative text-[22.43px] text-darkslategray-100">
                    Get weekly updates
                  </b>
                </div>
                <div className="self-stretch rounded-[8.97px] bg-primary-contrast shadow-[0px_0px_17.94px_rgba(0,_0,_0,_0.03)] flex flex-col items-start justify-start py-[20.931108474731445px] px-[22.426189422607422px] gap-[12.71px] text-left text-slategray border-[0.7px] border-solid border-whitesmoke">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[25.42px]">
                      Fill in your details to join the party!
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[7.48px]">
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <TextField
                        className="[border:none] bg-[transparent] self-stretch"
                        color="primary"
                        label="Your name"
                        size="medium"
                        variant="outlined"
                        type="text"
                      />
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <TextField
                        className="[border:none] bg-[transparent] self-stretch"
                        color="primary"
                        label="Email address"
                        size="medium"
                        variant="outlined"
                        type="text"
                      />
                    </div>
                  </div>
                  <button className="cursor-pointer [border:none] p-0 bg-orange rounded-[2.99px] w-[122.6px] h-[41.9px] overflow-hidden shrink-0 flex flex-col items-center justify-center hover:bg-saddlebrown sm:w-full sm:hover:bg-peru">
                    <div className="overflow-hidden flex flex-col items-start justify-start py-[5.980316638946533px] px-[16.445871353149414px]">
                      <div className="relative text-[11.21px] tracking-[0.34px] leading-[19.44px] uppercase font-medium font-components-button-large text-primary-contrast text-left">
                        submit
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <footer className="self-stretch [background:linear-gradient(91.74deg,_#0b5ba8_25.38%,_#299bd8)] flex flex-row items-start justify-start py-[24.668806076049805px] px-[62.7933235168457px] gap-[32.89px] text-left text-[13.46px] text-primary-contrast font-components-button-large lg:p-10 lg:box-border md:flex-col md:pt-10 md:px-6 md:pb-[30px] md:box-border sm:py-[30px] sm:px-6 sm:box-border">
              <div className="flex-1 flex flex-col items-start justify-start gap-[10.47px] mb-[40px!important] md:flex-[unset] md:self-stretch">
                <img
                  className="relative w-[130.1px] h-[24.7px] overflow-hidden shrink-0"
                  alt=""
                  src="/logo.svg"
                />
                <div className="self-stretch relative leading-[20.18px]">
                  Fickle Flight is your one-stop travel portal. We offer hassle
                  free flight and hotel bookings. We also have all your flight
                  needs in you online shop.
                </div>
                <img
                  className="relative w-[97.2px] h-[22.4px]"
                  alt=""
                  src="/social-icons.svg"
                />
              </div>
              <div className="relative box-border w-[0.7px] h-[118px] border-r-[0.7px] border-solid border-gray-400 md:hidden" />
              <div className="flex-1 flex flex-row items-start justify-between text-[11.96px] md:flex-[unset] md:self-stretch sm:flex-col">
                <div className="relative w-[147.5px] h-[119.4px] sm:mb-[40px!important]">
                  <a className="[text-decoration:none] absolute top-[35.7px] left-[0px] text-[inherit] inline-block w-[101.4px] h-[14.2px]">
                    About Us
                  </a>
                  <div className="absolute top-[0px] left-[0px] text-[14.95px] leading-[20.18px] font-medium inline-block w-[130.6px] h-[20.2px]">
                    Company
                  </div>
                  <div className="absolute top-[58.9px] left-[0px] inline-block w-[63px] h-[14.2px]">
                    News
                  </div>
                  <div className="absolute top-[82px] left-[0px] inline-block w-[86.1px] h-[14.2px]">
                    Careers
                  </div>
                  <div className="absolute top-[105.2px] left-[0px] inline-block w-[147.5px] h-[14.2px]">
                    How we work
                  </div>
                </div>
                <div className="relative w-[147.5px] h-[119.4px] sm:mb-[40px!important]">
                  <div className="absolute top-[35.7px] left-[0px] inline-block w-[82px] h-[14.2px]">
                    Account
                  </div>
                  <div className="absolute top-[0px] left-[0px] text-[14.95px] leading-[20.18px] font-medium inline-block w-[98.3px] h-[20.2px]">
                    Support
                  </div>
                  <div className="absolute top-[58.9px] left-[0px] inline-block w-[147.5px] h-[14.2px]">
                    Support Center
                  </div>
                  <div className="absolute top-[82px] left-[0px] inline-block w-[39.6px] h-[14.2px]">
                    FAQ
                  </div>
                  <div className="absolute top-[105.2px] left-[0px] inline-block w-[122.9px] h-[14.2px]">
                    Accessibility
                  </div>
                </div>
                <div className="relative w-[147.5px] h-[119.4px]">
                  <div className="absolute top-[35.7px] left-[0px] inline-block w-[129.2px] h-[14.2px]">
                    Covid Advisory
                  </div>
                  <div className="absolute top-[0px] left-[0px] text-[14.95px] leading-[20.18px] font-medium inline-block w-[57.3px] h-[20.2px]">
                    More
                  </div>
                  <div className="absolute top-[58.9px] left-[0px] inline-block w-[101.2px] h-[14.2px]">
                    Airline Fees
                  </div>
                  <div className="absolute top-[82px] left-[0px] inline-block w-[37.8px] h-[14.2px]">
                    Tips
                  </div>
                  <div className="absolute top-[105.2px] left-[0px] inline-block w-[147.5px] h-[14.2px]">
                    Quarantine Rules
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default CoverFrame;
