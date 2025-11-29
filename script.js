setTimeout(() => {
    document.getElementById("terminal-line2").innerText = "> Loading projects..."
}, 1000);

setTimeout(() => {
    document.getElementById("terminal-line3").innerText = "> Loading clients..."
}, 2000);

setTimeout(() => {
    document.getElementById("terminal-line4").innerText = "> Loading complete ! Attempting to enter the portfolio."
}, 3500);

setTimeout(() => {
    document.getElementById("terminal-line5").innerText = "> Access granted.";
}, 7000);

setTimeout(() => {
    document.getElementById("intro").style.display = "none";
    document.getElementById("page1").style.display = "flex";
    document.getElementById("back").style.display = "none";
    openPopup("Welcome to my portfolio !", "Tipoun, web developper", "Welcome")
}, 8500);

function goToProjects() {
    document.querySelectorAll(".page").forEach(el => {
        el.style.display = "none";
    });
    document.getElementById("projects-page").style.display ="flex"
    document.getElementById("window-name").innerText = "Tipoun - Portfolio/Projects"
    document.getElementById("back").style.display = "flex"
}

function goToMain() {
    document.querySelectorAll(".page").forEach(el => {
        el.style.display = "none";
    });
    document.getElementById("page1").style.display = 'flex'  
    document.getElementById("window-name").innerText = "Tipoun - Portfolio"
    document.getElementById("back").style.display = "none"
}

function goToClients() {
    document.querySelectorAll(".page").forEach(el => {
        el.style.display = "none";
    });
    document.getElementById("clients-page").style.display = 'flex'  
    document.getElementById("window-name").innerText = "Tipoun - Portfolio/Clients"
    document.getElementById("back").style.display = "flex"
}

function openPopup(text, author, windowName) {
    const wrap = document.getElementById("popup-wrapper");
    document.getElementById("blur-layer").style.display = "block";
    wrap.style.display = "flex";
    void wrap.offsetWidth;
    wrap.classList.add("show");
    document.getElementById("text-content").innerText = text
    document.getElementById("author").innerText = author
    document.getElementById("small-window-title").innerText = windowName
}

function closePopup() {
    const wrap = document.getElementById("popup-wrapper");
    document.getElementById("blur-layer").style.display = "none";
    wrap.style.display = "none";
    wrap.classList.remove("show");
    setTimeout(() => {
        wrap.style.display = "none";
    }, 350);
}

function openContact() {
    openPopup("", "", "Socials")
    document.getElementById("text-content").innerHTML = '<p>Here are my socials : (Dm me on discord if you need a website)</p><br><li><a href="https://discord.com/users/1403664472643731538" class="links">Discord</a></li><li><a href="https://github.com/Tipounos" class="links">GitHub</a>'
}
