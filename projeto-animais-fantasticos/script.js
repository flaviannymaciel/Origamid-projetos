const tabMenu = document.querySelectorAll('.jsTabMenu li');
const tabContent = document.querySelectorAll('.jsTabContent section');

if (tabMenu.length && tabContent.length) {
  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove('ativo');
    });
    tabContent[index].classList.add('ativo');
  }

  tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener('click', () => {
      activeTab(index);
    });
  });
}
