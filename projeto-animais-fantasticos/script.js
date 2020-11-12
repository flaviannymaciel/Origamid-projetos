//Navegação por tab
function initTabNav() {
  // adicionando funcao para isolar em um escopo e não gerar conflito
  const tabMenu = document.querySelectorAll('.jsTabMenu li');
  const tabContent = document.querySelectorAll('.jsTabContent section');
  // padrão default com o primeiro conteúdo ativo
  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo');
    // função para remover ativo existente e add em novo elemento
    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove('ativo');
      });
      tabContent[index].classList.add('ativo');
    }
    // relacionar o clique na imagem com o conteúdo
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
initTabNav();

//Accordion List
function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt');
  const activeClass = 'ativo';

  function activeAccordion() {
    this.classList.toggle(activeClass);
    this.nextElementSibling.classList.toggle(activeClass);
  }
  accordionList.forEach((item) => {
    item.addEventListener('click', activeAccordion);
  });
}
initAccordion();

function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    // método para scroll
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  //Forma alternativa de scroll
  // pega o topo de cada section
  // const topo = section.offsetTop;
  // window.scrollTo({
  //   top: topo,
  //   behavior: 'smooth'
  // });

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}
