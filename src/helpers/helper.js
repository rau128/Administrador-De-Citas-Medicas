export const reinicarFormulario = () => {
  document.querySelectorAll(".botones").forEach((el) => {
    el.value = "";
  });
};
