function init() {
    const header = document.querySelector(".header-container");
    header.innerHTML = `
<a href="#"><img src="../icons/skilldrive.svg" loading="lazy" width="115" alt="" class="logo" /></a>
<nav class="navigation">
    <div class="nav-menu">
        <a href="about.html" class="nav-link">О нас</a>
        <a href="#" class="nav-link">Условия</a>
        <a href="faq.html" class="nav-link">Частые вопросы</a>
        <a href="#" class="button-transp-border button">Войти</a>
    </div>
    <div class="nav-menu-button"><img src="../icons/menu.svg" width="18" alt="" /></div>
</nav>
`

    const footer = document.querySelector(".footer-container");
    footer.innerHTML = `
<div class="copyright ">© SkillDrive Inc. 2020</div>
<div class="soc-networks">
    <a href="# "> <img src="../icons/vk.svg " loading="lazy " alt="вконтакте " class="icon vk " /></a>
    <a href="# "> <img src="../icons/instagramm.svg " loading="lazy " alt="инстаграм " class="icon instagram " /></a>
    <a href="# "> <img src="../icons/facebook.svg " loading="lazy " alt="фэйсбук " class="icon facebook " /></a>
</div>
`
}

init();


const ham = document.querySelector(".nav-menu-button");
const menu = document.querySelector(".nav-menu");

function toggleMenu() {
    if (menu.classList.contains("show-menu")) {
        menu.classList.remove("show-menu");
        menu.style.display = "none";
    } else {
        menu.classList.add("show-menu");
        menu.style.display = "flex";
    }
}


ham.addEventListener("click", toggleMenu)