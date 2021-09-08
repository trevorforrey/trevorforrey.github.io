const deployed = false;

const Pages = {
  personal: 'personal-projects',
  professional: 'professional-projects',
  photography: 'photography'
};

function isElementInView(element, fullyInView) {
  var pageTop = window.scrollTop();
  var pageBottom = pageTop + window.height();
  const elementNode = document.querySelector(element);
  var elementTop = elementNode.offset().top;
  var elementBottom = elementTop + elementNode.height();

  if (fullyInView === true) {
      return ((pageTop < elementTop) && (pageBottom > elementBottom));
  } else {
      return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
  }
}

function onWorkDetailScroll() {
  // If you're viewing a project check to see if banner is hidden
  if (window.location.href) {
    const windowScroll = window.scrollY;
    const projectHeader = document.querySelector('.project-header');
    const projectHeight = projectHeader.clientHeight;
    // Header is hidden - show the sticky header
    if (windowScroll > projectHeight) {
      console.log('hidden');
      const stickyProjectHeaderNode = document.querySelector('.sticky-project-header');
      if (stickyProjectHeaderNode.className.includes('hidden')) {
        stickyProjectHeaderNode.classList.remove('hidden');
      }
    // Header is showing - hide the sticky header
    } else {
      console.log('showing!');
      const stickyProjectHeaderNode = document.querySelector('.sticky-project-header');
      if (!stickyProjectHeaderNode.className.includes('hidden')) {
        stickyProjectHeaderNode.classList.add('hidden');
      }
    }
  }
}

const onTabSelect = function(sectionSelected) {
  const allNavigationItems = document.querySelectorAll('.navigation-item');
  allNavigationItems.forEach((navigationItem) => {
    if (!navigationItem.className.includes(sectionSelected)) {
      navigationItem.classList.remove('selected');
    } else {
      navigationItem.classList.add('selected');
    }
  });

  console.log('window: ', window);

  if (sectionSelected === Pages.personal && window.location.href) {
    onProjectReturn();
  }

  if (sectionSelected === Pages.professional) {
    window.location.pathname = '/professional';
  }

  if (sectionSelected === Pages.personal && window.location.pathname !== '/') {
    window.location.pathname = '/';
  }
}

document.addEventListener('scroll', function() { onWorkDetailScroll() });

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
  const onProjectClick = function(projectURL) {
    const projectName = getProjectNameFromUrl(projectURL);
    console.log('projectName :', JSON.stringify(projectName, null, 2));

    // Update router state
    pushWindowState(projectName);
    window.onpopstate = () => onProjectReturn();

    // Toggle project data visibility
    document.querySelector('.project-container').style.display = 'block';

    loadProjectData(projectURL);
    projectLoadAnimation();
    document.querySelector('.portfolio').classList.remove('overflow-x-hidden');
  }

  // Add event listeners to project thumbnails
  for (let container of projectContainers) {
    const objectifiedDataset = { ...container.dataset };
    container.addEventListener('click', () => onProjectClick(objectifiedDataset.content));
  }

  // If reloading or searching on a frontend route
  if (window.location.hash) {
    const projectName = window.location.hash.slice(1,window.location.hash.length);
    loadProjectData(projectMap[projectName]);

    document.querySelector('.portfolio').classList.remove('overflow-x-hidden');
    const projectBelt = document.querySelector('.project-belt');
    projectBelt.style.left = '-100%';
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
    })
    .then(function() {
      onWorkDetailScroll();
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
  if (window.location.hash) {
    pushWindowState('');
    // Toggle project data visibility
    document.querySelector('.project-container').style.display = 'none';
    const projectBelt = document.querySelector('.project-belt');
    projectReturnAnimation();
    document.querySelector('.project-return').style.display = 'none';
    document.querySelector('.portfolio').classList.add('overflow-x-hidden');
  }
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

// Project Map (Allows for frontend routing reload)
const projectMap = {
  'organic-robo-head': 'project/0000/09/09/organic-robo-head.html',
  'go-web-crawler': 'project/2017/10/20/go-web-crawler.html',
  'subway-shibori': 'project/2018/04/03/subway-shibori.html',
  'ocelot': 'project/2018/04/28/ocelot.html',
  'dash-borg': 'project/2018/04/30/dash-borg.html',
  'learning-go': 'project/2018/05/16/learning-go.html',
  'fightsticks': 'project/2018/12/25/fightsticks.html',
  'deep-space-visualizer': 'project/2019/04/30/deep-space-visualizer.html'
}
