import React from 'react'
import "./ScheduleActivity.css";

import { useUserContext } from "../../App";
import line from '../../Assets/line.svg'

const ScheduleActivity = () => {
    const { application } = useUserContext();
  
  
    const Data = [...Array(application?.meta?.terms?.tenure).keys()];
  return (
    <div className="ScheduleActivity">

      <div className="payment-schdule grid">

      <div className="payment-schduler flex">
        <div className="schedule-crumbs grid">
          <span className="schedule-rounder "><span className="schedule-rounder2 down"></span></span>
          <div className="schedule-liner grid">
            <img src={line} alt='line'/>
          </div>
        </div>
        


        <div className="scheduler flex">
          <div className="schduledate grid">

            <p>Down Payment</p>
            <span className="duedate">Due date : <span className="due-date"></span> </span>
            <span className="duedate">Payment date:  <span className="due-date"></span> </span>
            <span className="duedate">Status: <span className="due-date"></span> </span>
          </div>

          
        </div>
      </div>

        {Data.map(number => {
          const cardinal = Number(String(number + 1).slice(-1));
          return (
          <div className="payment-schduler flex">
            <div className="schedule-crumbs grid">
              <span className="schedule-rounder"><span className="schedule-rounder2"></span></span>
              <div className="schedule-liner grid">
                <img src={line} alt='line'/>
              </div>
            </div>
            <div className="scheduler flex">
              <div className="schduledate grid">

              <p key={number} style={{ margin: "5px 0" }}>{`${number + 1}${
              cardinal === 1
                ? "st"
                : cardinal === 2
                ? "nd"
                : cardinal === 3
                ? "rd"
                : "th"
                } Installment`}</p>

                <span className="duedate">Due date : <span className="due-date"></span> </span>
                <span className="duedate">Payment date:  <span className="due-date"></span> </span>
                <span className="duedate">Status: <span className="due-date"></span> </span>
              </div>

              
            </div>
          </div>
            
                      );
        })}
      </div>
    </div>
  )
}

export default ScheduleActivity