const Navigation = () => {
    const displayList = () => {
    document.getElementById('book-list').style.display = 'flex';
    document.getElementById('add-book').style.display = 'none';
    document.getElementById('contact-info').style.display = 'none';
    window.location.reload();
    document.querySelector('#list').style.color = '#1b628b';
    document.querySelector('#list').style.fontWeight = 'bold';
    document.getElementById('add').style.color = '#000';
    document.getElementById('add').style.fontWeight = 'normal';
    document.getElementById('contact').style.color = '#000';
    document.getElementById('contact').style.fontWeight = 'normal';
  }
  
   const displayAdd = () => {
    document.getElementById('book-list').style.display = 'none';
    document.getElementById('add-book').style.display = 'block';
    document.getElementById('contact-info').style.display = 'none';
    document.querySelector('#add').style.color = '#1b628b';
    document.querySelector('#add').style.fontWeight = 'bold';
    document.getElementById('list').style.color = '#000';
    document.getElementById('list').style.fontWeight = 'normal';
    document.getElementById('contact').style.color = '#000';
    document.getElementById('contact').style.fontWeight = 'normal';
  }
  
  const displayContact = () => {
    document.getElementById('book-list').style.display = 'none';
    document.getElementById('add-book').style.display = 'none';
    document.getElementById('contact-info').style.display = 'flex';
    document.querySelector('#contact').style.color = '#1b628b';
    document.querySelector('#contact').style.fontWeight = 'bold';
    document.getElementById('add').style.color = '#000';
    document.getElementById('add').style.fontWeight = 'normal';
    document.getElementById('list').style.color = '#000';
    document.getElementById('list').style.fontWeight = 'normal';
  }

  document.querySelector('#list').addEventListener('click', displayList)
  document.querySelector('#add').addEventListener('click', displayAdd)
  document.querySelector('#contact').addEventListener('click', displayContact)
}

export default Navigation;