document.querySelectorAll('.ECarrossel-M').forEach(wrapper => {

  const scrollContainer = wrapper.querySelector('.Carrossel-M');

  const leftButton = wrapper.querySelector('.scroll-button.left');

  const rightButton = wrapper.querySelector('.scroll-button.right');



  if (leftButton) {

      leftButton.addEventListener('click', () => {

          scrollContainer.scrollBy({

              left: -150,

              behavior: 'smooth'

          });

      });

  } else {

      console.log('Botão esquerdo não encontrado');

  }



  if (rightButton) {

      rightButton.addEventListener('click', () => {

          scrollContainer.scrollBy({

              left: 150,

              behavior: 'smooth'

          });

      });

  } else {

      console.log('Botão direito não encontrado');

  }

});