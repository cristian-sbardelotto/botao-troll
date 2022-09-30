const handleClick = () => {
    alert('You won the game! The page will be restarted to try again!')
    window.location.reload();
}

const el = document.getElementById('btn');
el.addEventListener("mouseover", () => {
    el.style.position = 'absolute';
    el.style.top = `${Math.floor(Math.random() * (window.innerHeight - 18))}px`
    el.style.left = `${Math.floor(Math.random() * (window.innerWidth - 36))}px`
});
el.addEventListener("click", handleClick);