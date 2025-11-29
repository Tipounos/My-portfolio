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

function openPopup() {
    document.getElementById("blur-layer").style.display = "block";
    document.getElementById("popup-wrapper").style.display = "flex";
}

function closePopup() {
    document.getElementById("blur-layer").style.display = "none";
    document.getElementById("popup-wrapper").style.display = "none";
}

function openOctey() {
    openPopup()
    document.getElementById("text-content").innerText = "<< Franchement, Tipoun ce que tu fais est vraiment super quali. Je trouve que tu t’améliores de jour en jour, et c’est vraiment impressionnant de voir à quel point tes sites s'améliorent en style et en rendu .Tu as vrm un vrai sens du détail et ça se voit dans ton travail. Honnêtement, je recommande à 100% que ce soit pour un portfolio, un site ou autre, tu gères vraiment. Continue comme ça 🔥😁>>"
    document.getElementById("author").innerText = "Octey, monteur"
}

function openAboutMe() {
    openPopup()
    document.getElementById("text-content").innerText = "Hi, I'm Tipoun. I make websites. I learned to code about 2 years ago and learned to do mostly websites even though I coded some short videogames and app"
    document.getElementById("author").innerText = ""
}

function openContact() {
    openPopup()
    document.getElementById("text-content").innerHTML = '<p>You can contact me here</p><br><li><a href="https://discord.com/users/1403664472643731538" class="links">Discord</a></li><li><a href="https://github.com/Tipounos" class="links">GitHub</a>'
    document.getElementById("author").innerText = ""
}