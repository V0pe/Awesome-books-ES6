/* eslint-disable no-undef */
const timenow = document.querySelector('.date');
const date = () => {
  window.setInterval(
    () => {
      timenow.innerHTML = `<p>${luxon.DateTime.local().toLocaleString(
        luxon.DateTime.DATETIME_MED_WITH_SECONDS,
      )}</p>`;
    },
    1000,
    this,
  );
};

export default date;