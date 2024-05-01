const Footer = () => {
  const tel = "+30 (68) 100 37 71";
  const email = "nataliakireewa@gmail.com";
  const linkedIn = "https://www.linkedin.com/in/natalia-kirejeva/";
  const github = "https://github.com/nataliakii";

  return (
    <footer
      className="footer"
      style={{ marginBottom: "40px", marginTop: "10px" }}
    >
      <div className="copy" style={{ marginBottom: "40px", marginTop: "10px" }}>
        <div>
          {" "}
          <a href={`mailto:${email}`}>{email}</a>
        </div>
        <div>
          {" "}
          <a href={`tel:${tel}`}>{tel}</a>
        </div>
      </div>
      <div className="soc-box">
        <div className="follow-label">Follow Me</div>
        <div className="soc">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/natagoldmann"
          >
            <span className="icon fab fa-facebook" />
          </a>
          <a target="_blank" rel="noreferrer" href={github}>
            <span className="icon fab fa-github" />
          </a>
          <a target="_blank" rel="noreferrer" href={linkedIn}>
            <span className="icon fab fa-linkedin" />
          </a>
        </div>
      </div>
      <div className="clear" />
    </footer>
  );
};
export default Footer;
