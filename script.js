
function openbar()
{
    const backdrop=document.getElementById("backdrop");
    backdrop.style.display='block';
    const element =document.getElementById("menu_bar_");
    element.style.left='0%';

}

function closebar()
{
    const backdrop=document.getElementById("backdrop");
    backdrop.style.display='none';
    const element =document.getElementById("menu_bar_");
    element.style.left='-45%';
}

window.addEventListener('scroll', function () {
    let element = document.getElementById('menu_bar_');
    let backd=document.getElementById('backdrop');
    backd.style.display='none';

    element.style.left = '-45%';
  });


  
  window.addEventListener("resize", (event) => {
    console.log("size change");

    if (checkWindowWidth(768)) {
      const menu = document.getElementById('menu_bar');
      element.style.left = '-45%';
      let backd=document.getElementById('backdrop');
    backd.style.display='none';

    }
  });

  function checkWindowWidth(width) {
          return window.innerWidth >= width;
      }