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
  let res = days + " Days : " + hours + " Hours : " + minutes + " Minutes : " + seconds + " Seconds"
  if (days === 0) {
    res = hours + " Hours : " + minutes + " Minutes : " + seconds + " Seconds"
    if (hours === 0) {
      res = minutes + " Minutes : " + seconds + " Seconds"
      if (minutes === 0) {
        res = seconds + " Seconds"
      }
    }
  }
  return (
    <>
      {res}
    </>
  );
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
