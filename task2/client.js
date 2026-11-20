const button = document.querySelector('#get-tip');
const output = document.querySelector('#output');
const state = document.querySelector('#state');
button.addEventListener('click', async () => {
  button.disabled = true; state.textContent = 'Calling the function…';
  try {
    const response = await fetch('/api/tip');
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    output.innerHTML = `<div class="tip"><small>${data.topic}</small><p>${data.tip}</p></div>`;
    state.textContent = `Response received · ${new Date(data.generatedAt).toLocaleTimeString()}`;
  } catch (error) {
    output.innerHTML = '<div class="placeholder">Could not reach the API.<br>Deploy with Vercel or run the local instructions.</div>';
    state.textContent = error.message;
  } finally { button.disabled = false; }
});
