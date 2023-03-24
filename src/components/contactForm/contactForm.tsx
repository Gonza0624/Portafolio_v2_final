// link para crear una cuenta en email JS y poder enviar correos
// https://dashboard.emailjs.com/admin

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Fade } from "react-awesome-reveal";

const ContactForm = (): JSX.Element => {
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("* Name is required"),
    email: Yup.string()
      .email("* The email is not valid")
      .required("* Email is required"),
    message: Yup.string().required("* The message is obligatory"),
  });

  const handleSubmit = async (
    values: any,
    { setSubmitting, resetForm }: any
  ) => {
    const { name, email, message } = values;

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

      toast.success("El mensaje se ha enviado correctamente", {
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
      toast.error("Ocurrió un error al enviar el mensaje", {
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

    setSubmitting(false);
  };
  return (
    <section className="contact-section">
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
                Contact <span className="contact-section__title-color">me</span>{" "}
              </h1>
              <span className="contact-section__link">
                The message will be sent to my email address
              </span>
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
                    placeholder="Name"
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
                    placeholder="email"
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
                    placeholder="message"
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
                  disabled={!(dirty && isValid)}
                  className={
                    !(dirty && isValid) ? "disabled-btn" : "actived-btn"
                  }
                >
                  Send message
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
