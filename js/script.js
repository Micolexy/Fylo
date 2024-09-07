const btnToggleDark = document.getElementById('btn-toggle-dark');
const btnToggleLight = document.getElementById('btn-toggle-light');
const btnToggle = document.getElementById('btn-toggle');

if (
    localStorage.getItem("color-theme") === "dark" ||
    (!("color-theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    //show light btn
    btnToggleLight.classList.remove('hidden')
  } else {
    btnToggleDark.classList.remove('hidden')
  }

  //event listener to toggle the light and dark mood

  btnToggle.addEventListener('click', toggleMode)

  function toggleMode() {
    //toggle btn from moon to sun and vice versa
    btnToggleLight.classList.toggle('hidden')
    btnToggleDark.classList.toggle('hidden')

    // if it is set in localstorage(my window)
    if (localStorage.getItem("color-theme") ) {
        //if light mode,make dark and save in local storage
        if(localStorage.getItem('color-theme') === 'light'){
            document.documentElement.classList.add('dark')
            // save to local storage if the statement is true as the color of the website
            localStorage.setItem('color-theme', 'dark')
        }
        else {
            document.documentElement.classList.remove('dark')
            // save to local storage if the statement is true as the color of the website
            localStorage.setItem('color-theme', 'light')
        }
      } 
      // if it is not set in local storage
      else {
        if(document.documentElement.classList.contains('dark')){
            document.documentElement.classList.remove('dark')
            localStorage.setItem('color-theme', 'light')
        }
        else {
            document.documentElement.classList.add('dark')
            localStorage.setItem('color-theme', 'dark')
        }
      }
    
  }