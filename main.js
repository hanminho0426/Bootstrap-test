// focus
// const emailInputEl = document.querySelector('#exampleInputEmail1');
// const modalEl = document.querySelector('#exampleModal');

// modalEl.addEventListener('shown.bs.modal', function() {
//   emailInputEl.focus()
// });

//tooltip 초기화
// var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
// var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
//   return new bootstrap.Tooltip(tooltipTriggerEl)
// })

import Dropdown from 'bootstrap/js/dist/dropdown'
import Modal from 'bootstrap/js/dist/modal'

const dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'))
dropdownElementList.map(function (dropdownToggleEl) {
  return new Dropdown(dropdownToggleEl)
});

new Modal(document.querySelector('#exampleModal'), {
  backdrop: 'static'
})