import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      nav: {
        home: "Home",
        about: "About",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact",
        certificates: "Certificates",
      },
      home: {
        name: "Hi, my name is Gonzalo",
        title: "Frontend Developer",
        paragraph:
          "Welcome to my portfolio! I am a software developer specialized in front-end. My goal is to face challenges and embark on a constant journey of growth and learning.",
        textBtn: "Resume",
      },
      about: {
        title: "About",
        title2: "me",
        paragraph:
          "My name is Gonzalo, I'm 21 years old, I studied analysis and software development at Sena. I also did an internship as a Web UI developer at Globant, demonstrating responsibility, organization and creativity. My adaptability and constant desire to learn drive me to look for a collaborative work environment where I can improve my skills and grow both personally and professionally, focusing on front-end development, and eager to learn more about design and backend.",
      },
      objective: {
        title: "My",
        title2: "objective",
        paragraph:
          "I am looking for a good teamwork environment, where I can improve my programming skills, gain experience, learn different ways to solve problems through new challenges, deepen both front end development and gain skills in backend and design.",
      },
      skills: {
        title: "My",
        title2: "skills",
      },
      projects: {
        title: "My",
        title2: "projects",
        repository: "Repository",
        ecommerce: "E-com",
        ecommerce2: "merce",
        ecommerceParagraph:
          "BuyTheFuture is an e-commerce project developed as my final project at SENA. This project allowed me to strengthen my web development skills. It is an online shopping platform where users can browse categories, view products, add to cart and more. It also has an administration panel that offers several CRUD functions to manage the platform.",
        rickTitle: "Rick",
        rickTitle2: "and morty",
        rickParagraph:
          "This project uses the Rick and Morty API to display detailed character information, including pagination. This project allowed me to learn how to work with APIs in React and how to use Axios for data requests effectively.",
        portfolioTitle: "Portfolio",
        portfolioTitle2: "V1",
        portfolioParagraph:
          "This is the first version of my portfolio, which I developed during my internship at Globant. This project allowed me to learn a little more about react and its structure. It also gave me the essential basis to continue my learning process throughout my internship.",
        portfolioFinalTitle: "Final",
        portfolioFinalTitle2: "portfolio",
        portfolioFinalParagraph:
          "This is the final version of my portfolio, it is a very significant project for me, because here I had the opportunity to demonstrate and perfect all my knowledge in software development. This project reflects the progress I have achieved in development compared to the first version I created.",
        gifsTitle: "Gifs",
        gifsTitle2: "search",
        gifsParagraph:
          "This was one of my first projects with Angular, which helped me to acquire the basics and better understand its structure. For this project, I used the gifs search API and local storage to save each user's gifs in the browser.",
        countryTitle: "Country",
        countryTitle2: "search",
        countryParagraph:
          "This project uses the REST COUNTRIES API to search for countries. This project allowed me to go deeper into Angular, understanding its modules, directives, decorators for communication between components, routes, lazy loading, pipes, among other aspects.",
        crudNextTitle: "To",
        crudNextTitle2: "Do List",
        crudNextParagraph:
          "This project uses CRUD operations to manage all tasks. In addition, Docker has been implemented to run the MySQL database and the project in a network consisting of two containers. Both frontend and backend are integrated in the same project, thanks to the functionalities provided by Next.js.",
        viewMore: "View more",
        viewLess: "View less",
      },
      contact: {
        title: "Contact ",
        title2: "me",
        message: "gonzalosalazar1180@gmail.com",
        name: "Name",
        email: "Email",
        messageInput: "Message",
        btn: "Send message",
        btnSending: "Sending...",
        nameValidation: "* Name is required",
        emailValidation: "* Email is required",
        emailError: "* The email is not valid",
        messageValidation: "* The message is required",
        toastSuccess: "The message has been sent successfully.",
        toastError: "An error occurred while sending the message",
      },
      certificates: {
        title: "Certi",
        title2: "ficates",
      },
      footer: {
        title: "Copyright © 2023 - All rights reserved || Designed By: Gonzalo",
      },
    },
    es: {
      nav: {
        home: "Inicio",
        about: "Acerca",
        skills: "Habilidades",
        projects: "Proyectos",
        contact: "Contacto",
        certificates: "Certificados",
      },
      home: {
        name: "Hola, soy Gonzalo",
        title: "Desarrollador Frontend",
        paragraph:
          "¡Bienvenido a mi portafolio! Soy un desarrollador de software especializado en front-end. Mi objetivo es afrontar desafíos y embarcarme en un viaje constante de crecimiento y aprendizaje.",
        textBtn: "Currículum",
      },
      about: {
        title: "Sobre",
        title2: "mi",
        paragraph:
          "Mi nombre es Gonzalo, tengo 21 años y una formación en análisis y desarrollo de software en el SENA. También realicé prácticas como desarrollador Web UI en Globant, demostrando responsabilidad, organización y creatividad. Mi capacidad de adaptación y deseo constante de aprendizaje me impulsan a buscar un entorno de trabajo colaborativo donde pueda mejorar mis habilidades y crecer tanto personal como profesionalmente, centrándome en el desarrollo front-end, y con ganas de aprender más acerca de diseño y backend.",
      },
      objective: {
        title: "Mi",
        title2: "objetivo",
        paragraph:
          "Busco un buen ambiente de trabajo en equipo donde pueda mejorar mis habilidades de programación, ganar experiencia y aprender diferentes formas de resolver problemas a través de nuevos desafíos. También deseo profundizar tanto en el desarrollo front-end como en el back-end y el diseño.",
      },
      skills: {
        title: "Mis",
        title2: "habilidades",
      },
      projects: {
        title: "Mis",
        title2: "proyectos",
        repository: "Repositorio",
        ecommerce: "Tienda ",
        ecommerce2: "virtual",
        ecommerceParagraph:
          "BuyTheFuture es un proyecto de comercio electrónico desarrollado como mi proyecto final en el SENA. Este proyecto me permitió fortalecer mis habilidades en el desarrollo web. Se trata de una plataforma de compras en línea en la que los usuarios pueden explorar categorías, ver productos, agregar al carrito y más. Además, cuenta con un panel de administración que ofrece diversas funciones CRUD para gestionar la plataforma.",
        rickTitle: "Rick",
        rickTitle2: "y Morty",
        rickParagraph:
          "Este proyecto emplea la API de Rick y Morty para mostrar información detallada de los personajes, incluyendo paginación. Este proyecto me permitió aprender a trabajar con APIs en React y a utilizar Axios para las solicitudes de datos de manera efectiva.",
        portfolioTitle: "Portafolio",
        portfolioTitle2: "V1",
        portfolioParagraph:
          "Esta es la primera versión de mi portafolio, el cual desarrollé durante mis prácticas en Globant. Este proyecto me permitió conocer un poco más acerca de react y su estructura. Además, me brindó las bases esenciales para continuar mi proceso de aprendizaje a lo largo de mis prácticas.",
        portfolioFinalTitle: "Portafolio",
        portfolioFinalTitle2: "final",
        portfolioFinalParagraph:
          "Esta es la versión final de mi portafolio, es un proyecto muy significativo para mi, ya que aquí tuve la oportunidad de demostrar y perfeccionar todos mis conocimientos en el desarrollo de software. Este proyecto refleja el progreso que he alcanzado en el desarrollo en comparación con la primera versión que creé.",
        gifsTitle: "Buscador",
        gifsTitle2: "de Gifs",
        gifsParagraph:
          "Este fue uno de mis primeros proyectos con Angular, el cual me ayudó a adquirir las bases y comprender mejor su estructura. Para este proyecto, utilicé la API de búsqueda de gifs y el almacenamiento local para guardar los gifs de cada usuario en el navegador.",
        countryTitle: "Buscador",
        countryTitle2: "de paises",
        countryParagraph:
          "Este proyecto utiliza la API REST COUNTRIES para buscar países. Este proyecto me permitió profundizar más en Angular, comprendiendo sus módulos, directivas, decoradores para la comunicación entre componentes, rutas, lazy loading, pipes, entre otros aspectos.",
        crudNextTitle: "Lista",
        crudNextTitle2: "de tareas",
        crudNextParagraph:
          "Este proyecto emplea las operaciones CRUD para gestionar todas las tareas. Además, se ha implementado Docker para ejecutar la base de datos de MySQL y el proyecto en una red que consta de dos contenedores. Tanto el frontend como el backend se encuentran integrados en el mismo proyecto, gracias a las funcionalidades proporcionadas por Next.js.",
        viewMore: "Ver más",
        viewLess: "Ver menos",
      },
      contact: {
        title: "Contácta",
        title2: "me",
        message: "gonzalosalazar1180@gmail.com",
        name: "Nombre",
        email: "Correo",
        messageInput: "Mensaje",
        btn: "Enviar mensaje",
        btnSending: "Enviando...",
        nameValidation: "* El nombre es requerido",
        emailValidation: "* El email es requerido",
        emailError: "* El email no es valido",
        messageValidation: "* El mensaje es requerido",
        toastSuccess: "El mensaje se ha enviado correctamente",
        toastError: "Ocurrió un error al enviar el mensaje",
      },
      certificates: {
        title: "Certi",
        title2: "ficados",
      },
      footer: {
        title:
          "Copyright © 2023 - Todos los derechos reservados || Diseñado por: Gonzalo",
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
