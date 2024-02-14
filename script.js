// write js code here if required
setInterval(() => {
	const now = new Date();
	const day = now.getDate();
	const month = now.getMonth() + 1;
	const year = now.getFullYear();
	const hours = String(now.getHours()).padStart(2, '0');
	const minutes = String(now.getMinutes()).padStart(2, '0');
	const seconds = String(now.getSeconds()).padStart(2, '0');
	
	// Display the timer in the specified format
	document.getElementById('timer').textContent = `${day}/${month}/${year}, ${hours}:${minutes}:${seconds}`;
}, 1000)