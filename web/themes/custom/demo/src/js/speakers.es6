document.addEventListener('DOMContentLoaded', function () {
  // Initialize the Splide slider
  new Splide('.splide', {
      type: 'loop',
      perPage: 4,
      autoplay: true,
      pagination: false,
      arrows: true,
      breakpoints: {
          1024: {
              perPage: 3,
          },
          768: {
              perPage: 2,
          },
          480: {
              perPage: 1,
          },
      },
  }).mount();

  // Popover functionality
  const speakerPopover = document.querySelector('.speaker-popover');
  const popoverCloseButton = document.querySelector('.popover-close');
  
  // Event listener to open the popover when a speaker card is clicked
  const speakerCards = document.querySelectorAll('.speaker-card');
  speakerCards.forEach(card => {
      card.addEventListener('click', function () {
          const speakerName = card.querySelector('.speaker-card__name').textContent;
          const speakerDesignation = card.querySelector('.speaker-card__designation').textContent;
          const speakerOrganization = card.querySelector('.speaker-card__organization').textContent;
          const speakerImage = card.querySelector('.speaker-card__image img').src;

          // Populate the popover with the speaker details
          speakerPopover.querySelector('.popover-name').textContent = speakerName;
          speakerPopover.querySelector('.popover-designation').textContent = speakerDesignation;
          speakerPopover.querySelector('.popover-organization').textContent = speakerOrganization;
          speakerPopover.querySelector('.popover-photo').innerHTML = `<img src="${speakerImage}" alt="${speakerName}">`;

          // Show the popover with a fade-in effect
          speakerPopover.style.display = 'block';
          setTimeout(() => {
              speakerPopover.style.opacity = 1;
          }, 10);
      });
  });

  // Event listener to close the popover
  popoverCloseButton.addEventListener('click', function () {
      speakerPopover.style.opacity = 0;
      setTimeout(() => {
          speakerPopover.style.display = 'none';
      }, 300);
  });
});
