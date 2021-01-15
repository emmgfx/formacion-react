import { useEffect, useState } from "react";

const NotFound = props => {

  const [seconds, setSeconds] = useState(0);

  useEffect(() => {

    // Cuando se monta:
    const interval = setInterval(() => setSeconds(seconds => seconds+1), 1000);
    
    return () => {
      // Cuando se desmonta:
      clearInterval(interval);
    }
  }, []);

  return(
    <>
      <h2>NotFound</h2>
      <p>Has estado aquí {seconds}.</p>
    </>
  );
}
export default NotFound;