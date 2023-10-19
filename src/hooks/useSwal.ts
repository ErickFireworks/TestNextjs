import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const useSwal = () => {
  const MySwal = withReactContent(Swal);

  const showMessage = () => {
    MySwal.fire({
      title: "<p>Hello World</p>",
      didOpen: () => {
        // `MySwal` is a subclass of `Swal` with all the same instance & static methods
        MySwal.showLoading();
      },
    }).then(() => {
      return MySwal.fire("<p>Shorthand works too</p>");
    });
  };

  return {
    showMessage,
  };
};