import ExternalLinkIcon from "./icons/ExternalLinkIcon";
import GithubIcon from "./icons/GithubIcon";

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
            <ExternalLinkIcon w={14} h={14} className="mr-2" />
            Official Site
          </a>
          <a
            className="link"
            href="https://github.com/kamo-tomoki/framer-motion-samples"
            target="_blank"
          >
            <GithubIcon className="mr-[6px]" w={17} h={17} />
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
