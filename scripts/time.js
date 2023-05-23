let startTime = performance.now(); //возвращает количество миллисекунд, прошедших с начала загрузки страницы до момента вызова метода.

function updateTimer() {
  const currentTime = performance.now();
  const duration = Math.floor(currentTime - startTime);
  const hours = Math.floor(duration / 3600000); 
  const minutes = Math.floor((duration % 3600000) / 60000); 
  const seconds = Math.floor(((duration % 3600000) % 60000) / 1000); 
    

      document.getElementById('timer').textContent = `${hours}:${minutes}:${seconds}`; 
  

  // Обновление таймера каждую секунду
  setTimeout(updateTimer, 1000);
}
