import { useEffect, useState } from 'react';

// const useCountdown = () => {
//   const countDownDate = new Date().getTime();

//   const [countDown, setCountDown] = useState(
//     countDownDate - new Date().getTime()
//   );

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCountDown(countDownDate - new Date().getTime());
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [countDownDate]);

//   return getReturnValues(countDown);
// };
const [countDown,setCountDown] = useState(86400)
    setTimeout(()=>{
        setCountDown(countDown - 1)
    },1000)
const getReturnValues = (count:number) => {
  // calculate time left
  const hours = Math.floor(
    (count % ( 60 * 60 * 24)) / ( 60 * 60)
  );
  const minutes = Math.floor((count % ( 60 * 60)) / ( 60));
  const seconds = Math.floor((count % ( 60)) / 1000);

  return {hour:hours,min:minutes,sec:seconds};
};

export const time = getReturnValues(countDown)