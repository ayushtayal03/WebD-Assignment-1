document.getElementById('tipsButton').addEventListener('click', function() {
    const tips = document.getElementById('tips');
    if (tips.style.display != 'none') {
        tips.style.display = 'none';
    } else {
        tips.style.display = 'block';
    }
});
