// Create a bunch of tiny planets
let stateCheck = setInterval(() => {
    if (document.readyState === 'complete') {
      clearInterval(stateCheck);
      init();
    }
  }, 100);

function init()
{
    for (let i = 0; i < 20; i++)
    {
        let el = document.createElement('div');
        el.classList.add('small-planet');
        const size = (Math.random() * 3) + 1;
        el.style.cssText = `height:${size}rem;width:${size}rem;top:${Math.random() * 100}vh; left: ${Math.random() * 100}vw;`;
        document.body.appendChild(el);
    }
}
