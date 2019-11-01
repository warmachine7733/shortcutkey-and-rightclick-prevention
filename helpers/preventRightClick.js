const preventRightClick = () => {
  document.addEventListener("contextmenu", e => {
    console.log("right clicked");
    e.preventDefault();
    return false;
  });
};

export default preventRightClick;
