const deployed = false;

document.addEventListener('DOMContentLoaded', function() {
  const projectContainers = document.querySelectorAll('.project-thumb-container');

  // Project Loading
  // Slides projects page out of view
  projectLoadAnimation = function() {
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
    const project = event.target;
    const projectURL = project.dataset.content;
    const projectName = getProjectNameFromUrl(projectURL);

    // Update router state
    pushWindowState(projectName);
    window.onpopstate = () => onProjectReturn();

    // Toggle project data visibility
    document.querySelector('.project-container').style.display = 'block';

    loadProjectData(projectURL);
    projectLoadAnimation();
  }

  // Add event listeners to project thumbnails
  for (let container of projectContainers) {
    container.addEventListener('click', onProjectClick);
  }

  // If reloading or searching on a frontend route
  if (window.location.hash) {
    const projectName = window.location.hash.slice(1,window.location.hash.length);
    loadProjectData(projectMap[projectName]);

    const projectBelt = document.querySelector('.project-belt');
    projectBelt.style.left = '-100%';
  }

  // Add navigation events
  const navItems = document.querySelectorAll('.navigation-item');
  for (let navItem of navItems) {
    navItem.addEventListener('click', onNavClick);
  }
});

// Loading project data
function loadProjectData(projectData) {
  fetch(projectData)
    .then(function(response) {
      return response.text();
    })
    .then(function(projectHTML) {
      document.querySelector('.project-load').innerHTML = projectHTML;
    });
    window.scrollTo(0,0);
}

// Project Return
function projectReturnAnimation() {
  const projectBelt = document.querySelector('.project-belt');
  let position = -100;
  let id = setInterval(frame, 0.003);
  function frame() {
    if (position === 0) {
      clearInterval(id);
    } else {
      position++;
      projectBelt.style.left = position + '%';
    }
  }
}

function onProjectReturn() {
  pushWindowState('');
  // Toggle project data visibility
  document.querySelector('.project-container').style.display = 'none';
  const projectBelt = document.querySelector('.project-belt');
  projectReturnAnimation();
  document.querySelector('.project-return').style.display = 'none';
}

function pushWindowState(projectName) {
  const gitHubFix = deployed ? '/portfolio' : ''
  const endURL = projectName ? '/#' + projectName : '';
  window.history.pushState(
    {},
    projectName,
    window.location.origin + gitHubFix + endURL
  );
}

function getProjectNameFromUrl(projectURL) {
  const projectPathSplit = projectURL.split('/');
  const projectHtmlName = projectPathSplit[projectPathSplit.length - 1];
  const projectName = projectHtmlName.slice(0,projectHtmlName.length - 5);
  return projectName;
}

// On navigation item click
function onNavClick(event) {
  // set all colors back to default
  const allNavItems = document.querySelectorAll('.navigation-item');
  for (let navItem of allNavItems) {
    navItem.style.color = '#c2c2c2'; // was 8c8c8c
  }

  // set src element color
  event.srcElement.style.color = '#8c8c8c';

  // update current content on screen
  switch (event.srcElement.innerText) {
    case 'Projects': {
      if (window.location.hash) {
        onProjectReturn();
      }
      // If on mobile or tablet site, rearrange the dom
      const portfolio = document.querySelector('.portfolio');
      if (portfolio.style.display === 'none') {
        const app = document.querySelector('.app');
        portfolio.style.display = 'block';
      }
      break;
    }
    case 'About Me': {
      document.querySelector('.portfolio').style.display = 'none';
      const mainArea = document.querySelector('.main-area');
      mainArea.appendChild(sidePanelContent);
      break;
    }
  }
}

// Project Map (Allows for frontend routing reload)
const projectMap = {
  'fightstick': 'project/0000/07/07/fightstick.html',
  'organic-robo-head': 'project/0000/09/09/organic-robo-head.html',
  'go-web-crawler': 'project/2017/10/20/go-web-crawler.html',
  'subway-shibori': 'project/2018/04/03/subway-shibori.html',
  'ocelot': 'project/2018/04/28/ocelot.html',
  'dash-borg': 'project/2018/04/30/dash-borg.html',
  'learning-go': 'project/2018/05/16/learning-go.html',
  'morrigan-fightstick': 'project/2018/12/25/morrigan-fightstick.html',
  'deep-space-visualizer': 'project/2019/04/30/deep-space-visualizer.html'
}
