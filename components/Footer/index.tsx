import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center py-8 text-sm text-gray-400">
      <div className="flex mb-5">
        <a
          className="footer-link mr-[30px]"
          href="https://www.framer.com/motion/"
          target="_blank"
        >
          Official Site
        </a>
        <a
          className="footer-link mr-[30px]"
          href="https://github.com/kamo-tomoki/framer-motion-samples"
          target="_blank"
        >
          GitHub
        </a>
        <Link className="footer-link" href="/privacy-policy">
          Privacy Policy
        </Link>
      </div>
      <p>© 2024 Tomoki Kamo. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
