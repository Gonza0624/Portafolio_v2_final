import { social } from "../navigation/data";

const Footer = () => {
  return (
    <section className="section-main">
      <footer>
        <div className="section-main__footer">
          <div className="section-main__row">
            {social.map((socialIcon) => {
              const { id, url, icon } = socialIcon;
              return (
                <li key={id}>
                  <a target={"_blank"} href={url}>
                    {icon}
                  </a>
                </li>
              );
            })}
          </div>
          <div className="section-main__row">
            Copyright © 2023 - All rights reserved || Designed By: Gonzalo
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
