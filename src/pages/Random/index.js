import { useState, useEffect } from "react";
import GifService from "../../shared/gif-service";

const Random = props => {

  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    GifService.random().then((result) => {
      setImageSrc(result.image_url);
    });
  }, []);

  return(
    <>
      <h2>Random</h2>
      <img src={imageSrc} />
    </>
  );
}
export default Random;