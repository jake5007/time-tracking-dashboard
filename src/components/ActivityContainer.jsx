import React from "react";
import Frames from "../Frames";

const ActivityContainer = ({ activity, timeframe }) => {
    const iconName = activity.title.toLowerCase().replace(' ', '-');

    return (
        <div className={`activity-box activity-box--${iconName}`}>
            <img src={`/images/icon-${iconName}.svg`} alt="act-img" />
            <div className="activity-box__board">
                <div className="title">
                    <span>{activity.title}</span>
                    <img className="ellipsis" src="/images/icon-ellipsis.svg" alt="ellipsis" />
                </div>
                <div className="time">
                    <span className="current">{activity.timeframes[timeframe].current}hrs</span>
                    <span className="previous">
                        {
                            timeframe === Frames.DAILY ? 
                            'Yesterday - ' :
                            timeframe === Frames.WEEKLY ?
                            'Last Week - ' :
                            'Last Month - '
                        }
                        {activity.timeframes[timeframe].previous}hrs
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ActivityContainer;