const suggestActivity = document.getElementById('button-52');
const activityText = document.getElementById('activity');

suggestActivity.addEventListener('click', () => {
 fetch('https://www.boredapi.com/api/activity/')
.then(response => response.json())
.then(data => {
 activityText.textContent = data.activity;
 })
.catch(error => {
 console.error('Error:', error);
 });
});