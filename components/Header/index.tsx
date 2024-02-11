"use client";

import { useRouter } from "next/navigation";
import ThemeButton from "./ThemeButton";
import ExternalLinkIcon from "../icons/ExternalLink";
import GithubIcon from "../icons/GitHub";
import { useContext } from "react";
import { MediaContext } from "@/contexts/MediaContext";

const Header: React.FC = () => {
  const router = useRouter();
  const sm = useContext(MediaContext);

  return (
    <header>
      <div className="header-container">
        <h1 onClick={() => router.push("/")}>
          <span>Framer Motion</span> Examples
        </h1>
        {!sm && (
          <div className="flex mr-5 font-bold">
            <a
              className="header-link mr-8"
              href="https://www.framer.com/motion/"
              target="_blank"
            >
              <ExternalLinkIcon w={14} h={14} className="mr-2" />
              Official Site
            </a>
            <a
              className="header-link mr-6"
              href="https://github.com/kamo-tomoki/framer-motion-samples"
              target="_blank"
            >
              <GithubIcon className="mr-[6px]" w={17} h={17} />
              GitHub
            </a>
            <ThemeButton />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
