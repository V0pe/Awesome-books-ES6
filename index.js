import Booksdatabase from './modules/displayBook.js';
import Nav from './modules/Navigation.js';
import Date from './modules/date.js';

const record = new Booksdatabase();
record.insertBook();

const removeBtn = document.querySelectorAll('.remove-bttn');
removeBtn.forEach((btn, index) => {
  record.remove(btn, index);
});

Nav();
Date();