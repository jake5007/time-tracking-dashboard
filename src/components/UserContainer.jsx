import React from "react";
import Frames from "../Frames";

const UserContainer = ({ timeframe, onFrameChange }) => {

    return (
        <div className="user-box">
            <div className="user-box__user"> 
                <div className="avatar">
                    <img src="/images/image-jeremy.png" alt="jeremy-img" />
                </div>
                <div className="report-name">
                    <span>Report for</span>
                    <span className="name">Jeremy Robson</span>
                </div>
            </div>
            <div className="user-box__timeframes">
                <span 
                    className={`timeframe ${timeframe === Frames.DAILY ? 'selected' : ''}`}
                    onClick={() => onFrameChange(Frames.DAILY)}
                >Daily</span>
                <span 
                    className={`timeframe ${timeframe === Frames.WEEKLY ? 'selected' : ''}`}
                    onClick={() => onFrameChange(Frames.WEEKLY)}
                >Weekly</span>
                <span 
                    className={`timeframe ${timeframe === Frames.MONTHLY ? 'selected' : ''}`}
                    onClick={() => onFrameChange(Frames.MONTHLY)}    
                >Monthly</span>
            </div>
        </div>
    )
}

export default UserContainer;