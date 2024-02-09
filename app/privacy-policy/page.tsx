"use client";

import { MediaContext } from "@/contexts/MediaContext";
import { ThemeContext } from "@/contexts/ThemeContext";
import { useContext } from "react";

const PrivacyPolicy: React.FC = () => {
  const sm = useContext(MediaContext);
  const { dark } = useContext(ThemeContext);

  return (
    <div className={`py-[40px] px-[40px] mb-3 ${dark ? "text-white" : null}`}>
      <h1 className="font-bold text-4xl mb-5">Privacy Policy</h1>
      <p className="text-[18px] mb-8">
        This site clearly states below that it will handle your personal
        information safely and appropriately.
        <br />
        Read the Privacy Policy below for a clear explanation of how this site
        collects and use your personal information.
      </p>
      <h2 className="font-bold text-2xl mb-3">Representative</h2>
      <p className="text-[18px] mb-8">
        Kamo Tomoki
        <br />
        GitHub&nbsp;&nbsp;
        <a
          className="text-[18px]"
          href="https://github.com/kamo-tomoki"
          style={{ color: "#d2c" }}
        >
          kamo-tomoki
        </a>
        <br />
        Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;info@ducker-tech.com
      </p>
      <h2 className="font-bold text-2xl mb-3">Access analysis tools</h2>
      <p className="text-[18px] mb-8">
        This website uses Google Analytics, which is an access analysis tool.
        Google Analytics uses cookies to collect traffic data.
        <br />
        Traffic data is collected anonymously to improve our services and is not
        used to identify individuals.
      </p>
      <h2 className="font-bold text-2xl mb-3">Advertisement delivery</h2>
      <p className="text-[18px] mb-8">
        This site uses Google Adsense, an advertising service distributed by a
        third party, and uses cookies to display advertisements for products and
        services according to the user's interests (hereinafter referred to as
        personalized advertisements).
        <br />
        Cookies allow this site to identify your computer, but they do not allow
        us to identify you personally.
        <br />
        For more information about Google AdSense, please see{" "}
        <a
          className="text-[18px]"
          href="https://policies.google.com/technologies/ads"
          style={{ color: "#d2c" }}
        >
          Advertising - Policies and Terms - Google.
        </a>
      </p>
      <h2 className="font-bold text-2xl mb-3">
        Disclosure of personal information to third parties
      </h2>
      <p className="text-[18px] mb-8">
        We will manage the acquired personal information appropriately and will
        not disclose it to any third party unless we have obtained the consent
        of the person concerned or unless the consent of the person concerned
        has been obtained.
      </p>
      <h2 className="font-bold text-2xl mb-3">Disclaimer</h2>
      <p className="text-[18px] mb-8">
        This site does not take any responsibility for the information,
        services, etc. provided on sites moved via links or banners.
        <br />
        Please note that this site cannot be held responsible for any damage
        caused by the content posted.
      </p>
      <h2 className="font-bold text-2xl mb-3">Copyright</h2>
      <p className="text-[18px] mb-8">
        This site is an unofficial site that has no relationship with Framer.
        <br />
        If you experience any problems with this site, please contact our site
        representative.
        <br />
        Please feel free to use the codes posted on this site as they are
        copyright-free.
        <br />
        If you have any problems regarding the copyright of the posted code,
        please feel free to contact us via email.
        <br />
        We will respond as soon as possible.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
