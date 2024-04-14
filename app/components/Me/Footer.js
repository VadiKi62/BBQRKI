const Footer = () =>
{
  const tel = "+30 (68) 100 37 71"
  const email="nataliakireewa@gmail.com"
  return (
    <footer className="footer">
      <div className="copy">
       <div> <a href={ `mailto:${ email }` }>{ email }</a></div>
       <div> <a href={ `tel:${ tel }` }>{ tel }</a></div>
      </div>
      <div className="soc-box">
        <div className="follow-label">Follow Me</div>
        <div className="soc">
          <a target="_blank" rel="noreferrer" href="https://www.pinterest.com/">
            <span className="icon fab fa-facebook" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.instagram.com/">
            <span className="icon fab fa-github" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://dribbble.com/">
            <span className="icon fab fa-linkedin" />
          </a>
        </div>
      </div>
      <div className="clear" />
    </footer>
  );
};
export default Footer;
