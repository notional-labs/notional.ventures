import React, { useEffect, useState } from "react";

const useCountdown = (estimatedTime) => {
  const [countDown, setCountDown] = useState(estimatedTime - 1);
  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown((estimatedTime = estimatedTime - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, [estimatedTime]);

  const days = Math.floor(countDown / (60 * 60 * 24));
  const hours = Math.floor((countDown % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((countDown % (60 * 60)) / 60);
  const seconds = Math.floor(countDown % 60);
  return [days, hours, minutes, seconds];
};

const ExpiredNotice = () => {
  return <>Upgrading...</>;
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  let res = "About " + days + " days and " + hours + " hours left";
  if (days === 0) {
    if (hours === 0) {
      if (minutes === 0) {
        res = seconds + " Seconds";
      } else {
        if (seconds === 0) {
          res = minutes + " minutes left";
        } else {
          res = minutes + " minutes and " + seconds + " seconds left";
        }
      }
    } else {
      if (minutes === 0) {
        res = "About " + hours + " hours left";
      } else {
        res = "About " + hours + " hours and " + minutes + " minutes left";
      }
    }
  } else {
    if (hours === 0) {
      res = "About " + days + " days left";
    }
  }
  return <>{res}</>;
};

const EstimateTime = ({ estimatedTime }) => {
  const [days, hours, minutes, seconds] = useCountdown(estimatedTime);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default EstimateTime;
