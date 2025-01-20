window.addEventListener('DOMContentLoaded', () => {
  const initFeaturesList = (container) => {
    const buttons = container.querySelectorAll('.features-list__button');
    const images = container.querySelectorAll('.features-list__image-wrapper');
    let activeIndex = 1;

    const setActiveItem = (index) => {
      activeIndex = index;

      buttons.forEach(button => {
        const isActive = parseInt(button.dataset.index) === index;
        button.classList.toggle('is-active', isActive);
        button.setAttribute('aria-pressed', isActive);
      });

      images.forEach(image => {
        const shouldBeActive = parseInt(image.dataset.index) === index;
        if (shouldBeActive) {
          image.classList.add('is-active');
          image.style.zIndex = '1';
        } else {
          image.classList.remove('is-active');
          image.style.zIndex = '0';
        }
      });
    };

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const index = parseInt(button.dataset.index);
        if (index !== activeIndex) {
          setActiveItem(index);
        }
      });
    });

    // Set initial active state
    setActiveItem(activeIndex);
  };

  // Initialize all features lists
  document.querySelectorAll('.features-list').forEach(initFeaturesList);
});
