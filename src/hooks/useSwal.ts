import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const useSwal = () => {
  const MySwal = withReactContent(Swal);

  const loadingMessage = () => {
    MySwal.fire({
      title: "<p>Espera un momento</p>",
      didOpen: () => {
        MySwal.showLoading();
      },
    }).then(() => {
      return MySwal.fire("<p>Shorthand works too</p>");
    });
  };

  const succesMessageLogin = (email: string) => {
    MySwal.fire({
      title: `<strong>¡Bienvenido ${email}!</strong>`,
      html: `<i>Operación realizada con exitó</i>`,
      icon: "success",
      showConfirmButton: false,
    });
  };

  const succesMessage = () => {
    MySwal.fire({
      title: `<strong>¡Éxito!</strong>`,
      html: `<i>Operación realizada con exitó</i>`,
      icon: "success",
      showConfirmButton: false,
    });
  };

  const errorMessageLogin = () => {
    MySwal.fire({
      title: "<strong>¡Usuario Incorrecto!</strong>",
      html: "<i>Intenta de nuevo</i>",
      icon: "error",
    });
  };

  const errorMessage = (text: string) => {
    MySwal.fire({
      title: "<strong>¡Error!</strong>",
      html: `<p>${text}</p>`,
      icon: "error",
    });
  };

  const closeMessage = () => {
    MySwal.close();
  };

  return {
    loadingMessage,
    succesMessage,
    succesMessageLogin,
    errorMessage,
    errorMessageLogin,
    closeMessage,
  };
};
