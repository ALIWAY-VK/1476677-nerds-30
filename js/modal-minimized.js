const modalShowButton = document.querySelector(".contacts .button"),
    modalWindow = document.querySelector(".modal"),
    modalClose = modalWindow.querySelector(".close-btn"),
    modalForm = modalWindow.querySelector(".modal-form"),
    modalName = modalWindow.querySelector(".modal-name"),
    modalEmail = modalWindow.querySelector(".modal-email");
let isStorageSupport = !0,
    storage = "";
try { storage = localStorage.getItem("Name") } catch (o) { isStorageSupport = !1 }
modalShowButton.addEventListener("click", function(o) { o.preventDefault(o), modalWindow.classList.add("modal-show"), modalWindow.classList.add("modal-show-animation"), storage ? (modalName.value = storage, modalEmail.focus()) : modalName.focus() }), modalClose.addEventListener("click", function() { modalWindow.classList.remove("modal-show"), modalWindow.classList.remove("modal-show-animation"), modalWindow.classList.remove("modal-error-animation") }), modalForm.addEventListener("submit", function(o) { modalName.value && modalEmail.value ? isStorageSupport && localStorage.setItem("Name", modalName.value) : (o.preventDefault(), modalWindow.classList.remove("modal-show-animation"), modalWindow.classList.remove("modal-error-animation"), modalWindow.offsetWidth = modalWindow.offsetWidth, modalWindow.classList.add("modal-error-animation")) }), window.addEventListener("keydown", function(o) { 27 === o.keyCode && modalWindow.classList.contains("modal-show") && (o.preventDefault(), modalWindow.classList.remove("modal-show"), modalWindow.classList.remove("modal-error-animation")) });