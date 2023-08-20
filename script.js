
// ACTIVE MENU BASED ON SCOLL POSITION
const li = document.querySelectorAll(".links");
const sec = document.querySelectorAll("section");

function activeMenu() {
    let len=sec.length;
    while(--len && window.scrollY < sec[len].offsetTop){}
    li.forEach(ltx => ltx.classList.remove("active"));
    li[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll", activeMenu)



// DARK THEME
const sideMenu = document.querySelector(".aside");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler")

menuBtn.addEventListener('click', () => {
    sideMenu.classList.add("active")
})
closeBtn.addEventListener('click', () => {
    sideMenu.classList.remove("active")
})

themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables')

    themeToggler.querySelector('span:nth-child(1').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2').classList.toggle('active');
})


// FILTER SKILL
const liSkills = document.querySelectorAll('.menu-skill li');
const skillsData = document.querySelectorAll('.skills .skill');
liSkills.forEach(li => {
    li.onclick = function () {
        // active
        liSkills.forEach(li => {
            li.className = "";
        })
        li.className = "current";
        // filter
        const value = li.textContent;
        skillsData.forEach(skill => {
            skill.style.display = "none";
            if (skill.getAttribute('data-filter') == value.toLocaleLowerCase() | value == "All") {
                skill.style.display = "block"
            }
        })
    }
})


// FILTER PROJECTS
const liProjects = document.querySelectorAll('.menu-project li');
const projectsData = document.querySelectorAll('.projects .display-project');
liProjects.forEach(li => {
    li.onclick = function () {
        // active
        liProjects.forEach(li => {
            li.className = "";
        })
        li.className = "current";
        // filter
        const value = li.textContent;
        projectsData.forEach(project => {
            project.style.display = "none";
            if (project.getAttribute('data-filter') == value.toLocaleLowerCase() | value == "All") {
                project.style.display = "block"
            }
        })
    }
})






