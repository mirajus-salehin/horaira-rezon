document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

const animatedSections = document.querySelectorAll('.fade-in, .slide-up');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2
});

animatedSections.forEach(section => observer.observe(section));
function toggleProject(element) {
  element.classList.toggle("active");
}

function toggleProject(box) {
  box.classList.toggle("active");
  const details = box.querySelector(".project-details");
  if (box.classList.contains("active")) {
    details.style.maxHeight = details.scrollHeight + "px";
  } else {
    details.style.maxHeight = null;
  }
}

function toggleAbout(event) {
  event.preventDefault();
  const moreText = document.getElementById("moreText");
  const toggleLink = document.getElementById("toggleLink");
  const dots = document.getElementById("dots");
  const isExpanded = moreText.style.display === "inline";
  if (isExpanded) {
    moreText.style.display = "none";
    dots.style.display = "inline";
    toggleLink.textContent = " See More";
  } else {
    moreText.style.display = "inline";
    dots.style.display = "none";
    toggleLink.textContent = " See Less";
  }
}

const skillSpans = document.querySelectorAll('.clickable-skill');
const circle = document.querySelector('.circle');
const percentageText = document.querySelector('.percentage-text');
const selectedSkill = document.getElementById('selected-skill');

skillSpans.forEach(span => {
  span.style.cursor = 'pointer';

  span.addEventListener('click', () => {
    const level = parseInt(span.getAttribute('data-level'));
    const skill = span.getAttribute('data-skill');

    const circumference = 2 * Math.PI * 40;
    const offset = circumference - (level / 100) * circumference;

    circle.style.strokeDashoffset = offset;
    circle.classList.add('glow');
    percentageText.textContent = `${level}%`;
    selectedSkill.textContent = skill;

    setTimeout(() => circle.classList.remove('glow'), 800);
  });
});
