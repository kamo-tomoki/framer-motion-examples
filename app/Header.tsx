const Header = () => {
  return (
    <header>
      <div className="header-container">
        <h1>
          <span>Framer Motion</span> Samples
        </h1>
        <div className="flex mr-5 font-bold">
          <a
            className="link mr-8"
            href="https://www.framer.com/motion/"
            target="_blank"
          >
            Official Site
          </a>
          <a
            className="link"
            href="https://github.com/kamo-tomoki/framer-motion-samples"
            target="_blank"
          >
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
