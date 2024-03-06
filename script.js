const sobre = document.querySelector('#sobre')

    sobre.addEventListener('click', () =>
      window.scroll({top: window.innerHeight, behavior: 'smooth'})
    )
