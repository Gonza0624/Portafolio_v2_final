// link para crear una cuenta en email JS y poder enviar correos
// https://dashboard.emailjs.com/admin

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Fade } from "react-awesome-reveal";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const ContactForm = (): JSX.Element => {
  const { t } = useTranslation("contact");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required(t("nameValidation")),
    email: Yup.string().email(t("emailError")).required(t("emailValidation")),
    message: Yup.string().required(t("messageValidation")),
  });

  const handleSubmit = async (
    values: any,
    { setSubmitting, resetForm }: any
  ) => {
    const { name, email, message } = values;

    setIsSubmitting(true);

    try {
      const templateParams = {
        to_name: "Gonzalo",
        from_name: name,
        from_email: email,
        message: message,
      };

      await emailjs.send(
        "service_b6uh82k",
        "template_lkpq6mn",
        templateParams,
        "eHfPslcOnvpe7Kjxb"
      );

      toast.success(t("toastSuccess"), {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Zoom,
      });
      resetForm();
    } catch (error) {
      console.error(error);
      toast.error(t("toastError"), {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Zoom,
      });
    }

    setIsSubmitting(false);
    setSubmitting(false);
  };
  return (
    <section id="contact" className="contact-section">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formik) => {
          const { isValid, dirty } = formik;
          return (
            <Form className="contact-section__form">
              <h1 className="contact-section__title">
                {t("title")}
                <span className="contact-section__title-color">
                  {t("title2")}
                </span>{" "}
              </h1>
              <span className="contact-section__link">{t("message")}</span>
              <Fade
                className="contact-section__form-row"
                triggerOnce
                direction="left"
                delay={50}
                damping={0.1}
              >
                <fieldset>
                  <Field
                    id="name"
                    name="name"
                    type="text"
                    className="contact-section__form-input"
                    placeholder={t("name")}
                  />
                  <ErrorMessage
                    name="name"
                    component="span"
                    className="contact-section__form-error"
                  />
                </fieldset>
              </Fade>
              <Fade
                className="contact-section__form-row"
                triggerOnce
                direction="left"
                delay={50}
                damping={0.1}
              >
                <fieldset>
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    className="contact-section__form-input"
                    placeholder={t("email")}
                  />
                  <ErrorMessage
                    name="email"
                    component="span"
                    className="contact-section__form-error"
                  />
                </fieldset>
              </Fade>
              <Fade
                className="contact-section__form-row"
                triggerOnce
                direction="left"
                delay={50}
                damping={0.1}
              >
                <fieldset>
                  <Field
                    id="message"
                    name="message"
                    as="textarea"
                    className="contact-section__form-input"
                    placeholder={t("messageInput")}
                  />
                  <ErrorMessage
                    name="message"
                    component="span"
                    className="contact-section__form-error"
                  />
                </fieldset>
              </Fade>
              <Fade
                className="contact-section__container-btn"
                triggerOnce
                direction="left"
                delay={50}
                damping={0.1}
              >
                <button
                  type="submit"
                  disabled={!(dirty && isValid) || isSubmitting}
                  className={
                    !(dirty && isValid) ? "disabled-btn" : "actived-btn"
                  }
                >
                  {isSubmitting ? t("btnSending") : t("btn")}
                </button>
              </Fade>
              <ToastContainer />
            </Form>
          );
        }}
      </Formik>
    </section>
  );
};

export default ContactForm;
