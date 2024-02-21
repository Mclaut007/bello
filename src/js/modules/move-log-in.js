function moveLogIn() {
  const headerLogIn = document.querySelector(".header__log-in");
  const menuList = document.querySelector(".menu__list");
  const headerButton = document.querySelector(".header__button");
  const menuListNewItem = document.createElement("li");

  menuListNewItem.style.fontSize = "1.125rem";

  const mediaQuery = window.matchMedia("(max-width: 30rem)");

  function handleTabletChange(e) {
    if (e.matches) {
      menuListNewItem.append(headerLogIn);
      menuList.append(menuListNewItem);
    } else {
      headerButton.insertAdjacentElement("beforebegin", headerLogIn);
      menuListNewItem.remove();
    }
    console.log(e);
  }
  mediaQuery.addEventListener("change", handleTabletChange);
  handleTabletChange(mediaQuery);
}

export default moveLogIn;
