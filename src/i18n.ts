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
        name: "my name is Gonzalo",
        title: "Hello",
        paragraph:
          "Welcome to my portfolio! I am a passionate software developer with a love for technology and programming, and here you can see some of my latest work.",
        textBtn: "My resume",
      },
      about: {
        title: "About",
        title2: "me",
        paragraph:
          "I am Gonzalo Salazar, I am 21 years old, I did a technologist in the training program of analysis and software development at Sena, I did my internship with Globant fulfilling the role of Web UI developer, I am a responsible, organized, creative person, I am also a fast learner and I adapt to any situation, eager to learn and grow in the future personally and professionally.",
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
        ecommerce: "Ecommerce",
        ecommerceParagraph:
          "Ecommerce made with Laravel, Bootstrap and MySQL, contains product catalog, detail, shopping cart, admin dashboard etc.",
        pokedexParagraph:
          "Application made with react native, consuming the pokemon api to show the characters and their details.",
        rickTitle: "Rick and morty api",
        rickParagraph:
          "project made with react, typescript, css for the consumption of the api of rick and morty where each of the characters are shown with their details and page layout.",
        portfolioTitle: "Portfolio V1",
        portfolioParagraph:
          "this was the first version of my portfolio made during my internship at globant using react, javascript and sass",
        userCrudTitle: "User CRUD",
        userCrudParagraph:
          "User crud made with react, typescript, bootstrap, axios and an api built in express and mysql",
        gifsTitle: "Gifs App Angular",
        gifsParagraph:
          "Gifs search application made with angular and local storage for data persistence",
        countryTitle: "Country App Angular",
        countryParagraph:
          "Angular application for country search by country, region or capital using the REST Countries API",
      },
      contact: {
        title: "Contact",
        title2: "me",
        message: "The message will be sent to my email address",
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
        about: "SobreMi",
        skills: "Habilidades",
        projects: "Proyectos",
        contact: "Contacto",
        certificates: "Certificados",
      },
      home: {
        name: "mi nombre es Gonzalo",
        title: "Hola",
        paragraph:
          "¡Bienvenido a mi portafolio! Soy un desarrollador de software apasionado por la tecnología y la programación, aquí puedes ver algunos de mis últimos trabajos.",
        textBtn: "Hoja de vida",
      },
      about: {
        title: "Sobre",
        title2: "mi",
        paragraph:
          "Soy Gonzalo Salazar. Tengo 21 años. Hice la carrera de análisis y desarrollo de software en el SENA. Realicé mis prácticas en Globant, cumpliendo el rol de desarrollador Web UI. Soy una persona responsable, organizada y creativa. También aprendo rápido y me adapto a cualquier situación. Tengo muchas ganas de aprender y crecer en el futuro, tanto personal como profesionalmente.",
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
        ecommerce: "Tienda virtual",
        ecommerceParagraph:
          "Tienda virtual realizada con Laravel, Bootstrap y MySQL, contiene catálogo de productos, detalles, carrito de compras, panel de administración, etc.",
        pokedexParagraph:
          "Aplicación hecha con React Native, consumiendo la api de Pokemon para mostrar los personajes y sus detalles.",
        rickTitle: "Rick y morty api",
        rickParagraph:
          "Proyecto hecho con React, Typescript, css para el consumo de la api de rick y morty donde se muestra cada uno de los personajes con sus detalles y paginacion.",
        portfolioTitle: "Portafolio V1",
        portfolioParagraph:
          "esta fue la primera versión de mi portafolio realizado durante mis practicas en Globant usando react, javascript y sass",
        userCrudTitle: "CRUD de usuarios",
        userCrudParagraph:
          "Crud de usuarios hecho con React, Typescript, bootstrap, axios y una API hecha en express y mysql",
        gifsTitle: "Aplicación de Gifs Angular",
        gifsParagraph:
          "Aplicación de búsqueda de gifs hecha con angular y local storage para la persistencia de datos.",
        countryTitle: "Aplicacion de paises Angular",
        countryParagraph:
          "Aplicación angular para la búsqueda de países por país, región o capital usando REST Countries API",
      },
      contact: {
        title: "Contácta",
        title2: "me",
        message: "El mensaje será enviado a mi correo electrónico",
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
