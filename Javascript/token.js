const popupCloseBtn = document.querySelector(".popup-close-link");
const popupAgreeBtn = document.querySelector(".agee-to-terms-btn");
const popupDiv = document.querySelector(".custom-popup");

popupCloseBtn.addEventListener("click", function () {
  popupDiv.classList.add("popup-closed");
});
popupAgreeBtn.addEventListener("click", function () {
  popupDiv.classList.add("popup-closed");
});
