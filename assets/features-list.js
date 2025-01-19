class FeaturesList extends HTMLElement {
    constructor() {
      super();
      this.buttons = this.querySelectorAll('.features-list__button');
      this.images = this.querySelectorAll('.features-list__image-wrapper');
      this.activeIndex = 1;
      this.init();
    }
  
    init() {
      // Wait for images to load before initializing
      Promise.all(
        Array.from(this.querySelectorAll('img')).map(img => {
          if (img.complete) return Promise.resolve();
          return new Promise(resolve => {
            img.onload = resolve;
            img.onerror = resolve;
          });
        })
      ).then(() => {
        this.bindEvents();
        // Set initial active state
        this.setActiveItem(this.activeIndex);
      });
    }
  
    bindEvents() {
      this.buttons.forEach(button => {
        button.addEventListener('click', () => {
          const index = parseInt(button.dataset.index);
          if (index !== this.activeIndex) {
            this.setActiveItem(index);
          }
        });
      });
    }
  
    setActiveItem(index) {
      // Update active states
      this.activeIndex = index;
  
      // Update button states
      this.buttons.forEach(button => {
        button.classList.toggle('is-active', parseInt(button.dataset.index) === index);
      });
  
      // Update image states
      this.images.forEach(image => {
        image.classList.toggle('is-active', parseInt(image.dataset.index) === index);
      });
    }
  }
  
  customElements.define('features-list', FeaturesList);
  