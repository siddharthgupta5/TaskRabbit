document.addEventListener('DOMContentLoaded', async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      window.location.href = '/login.html';
    }
  
    const response = await fetch('/profile', {
      headers: { 'Authorization': token }
    });
  
    const data = await response.json();
    document.getElementById('profile').innerText = JSON.stringify(data, null, 2);
  });