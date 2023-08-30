const toggleBtn = document.querySelector('.toggle')
        const toggleBtnIcon = document.querySelector('.toggle i')
        const droupdownMenu = document.querySelector('.droupdown')

        toggleBtn.onclick = function(){
            droupdownMenu.classList.toggle('open')
            const isOpen = droupdownMenu.classList.contains('open')

            toggleBtnIcon.classList = isOpen
            ? 'fa-solid fa-xmark'
            : 'fa-solid fa-bars'
        }