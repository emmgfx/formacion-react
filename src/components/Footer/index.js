import "./index.scss";

const Footer = props => {
  const year = new Date().getFullYear();
  return(
    <footer>
      <p>Formarción React, {year}</p>
    </footer>
  );
}

export default Footer;