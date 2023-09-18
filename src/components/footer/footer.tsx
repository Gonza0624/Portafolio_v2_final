import { social } from "../navigation/data";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation("footer");
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
          <div className="section-main__row">{t("title")}</div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
