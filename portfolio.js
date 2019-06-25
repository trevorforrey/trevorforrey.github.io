document.addEventListener('DOMContentLoaded', function() {
  const projectReturnButton = document.querySelector('.project-return');
  const projectContainers = document.querySelectorAll('.project-thumb-container');
  const aboutButton = document.querySelector('.about-button');

  // Slides projects page out of view
  const projectLoadAnimation = function() {
    const projectBelt = document.querySelector('.project-belt');
    let position = 0;
    let id = setInterval(frame, 0.003);
    function frame() {
      if (position === -100) {
        clearInterval(id);
      } else {
        position--;
        projectBelt.style.left = position + '%';
      }
    }
  }

  // On project thumbnail click
  const onProjectClick = function(event) {
    const projectBelt = document.querySelector('.project-belt');
    let project = event.target;
    const projectData = project.dataset.content;
    fetch(projectData)
    .then(function(response) {
      return response.text();
    })
    .then(function(projectHTML) {
      document.querySelector('.project-load').innerHTML = projectHTML;
    });
    window.scrollTo(0,0);
    projectLoadAnimation();
  }

  // Add event listeners to project thumbnails
  for (let container of projectContainers) {
    container.addEventListener('click', onProjectClick);
  }
});