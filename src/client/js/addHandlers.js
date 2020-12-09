import { validationListener } from './validateSubmit';
const urlField = document.getElementById('url');

document.addEventListener('DOMContentLoaded', validationListener);
urlField.addEventListener('input', validationListener);