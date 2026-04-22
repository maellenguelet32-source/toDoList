
// =========================
// 📦 INIT
// =========================
let users = JSON.parse(localStorage.getItem("users")) || [];
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let currentUser = JSON.parse(localStorage.getItem("currentUser")) || null;

// =========================
// 📝 INSCRIPTION
// =========================
function register() {
    let nom = document.getElementById("nom").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("motdepasse").value.trim();

    if (!nom || !email || !password) {
        alert("Remplis tous les champs 😅");
        return;
    }

    if (users.find(u => u.email === email)) {
        alert("Email déjà utilisé ❌");
        return;
    }

    users.push({ nom, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Inscription réussie 🎉");
}

// =========================
// 🔐 LOGIN
// =========================
function seconnecter() {
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("motdepasse").value.trim();

    let user = users.find(u => u.email === email && u.password === password);

    if (!user) {
        alert("Identifiants incorrects ❌");
        return;
    }

    currentUser = user;
    localStorage.setItem("currentUser", JSON.stringify(user));

    afficherApp();
}

// =========================
// 👤 APP
// =========================
function afficherApp() {
    document.getElementById("auth").style.display = "none";
    document.getElementById("app").style.display = "block";

    document.getElementById("welcome").innerText =
        "Bonjour " + currentUser.nom + " 💖";

    afficherTaches();
}

// =========================
// 📝 AJOUT TÂCHE
// =========================
function ajouterTache() {
    let titre = document.getElementById("taskTitle").value.trim();
    if (!titre) return;

    tasks.push({
        titre,
        statut: "Non fait",
        date: new Date().toLocaleDateString(),
        user: currentUser.email
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
    document.getElementById("taskTitle").value = "";

    afficherTaches();
}

// =========================
// 📋 AFFICHAGE
// =========================
function afficherTaches() {
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    let userTasks = tasks.filter(t => t.user === currentUser.email);

    userTasks.forEach((t, index) => {
        let li = document.createElement("li");

        li.innerHTML = `
            ${t.titre} (${t.date}) - <strong>${t.statut}</strong>

            <button onclick="toggleStatut(${index})">🔁</button>
            <button onclick="modifierTache(${index})">✏️</button>
            <button onclick="supprimerTache(${index})">🗑️</button>
        `;

        list.appendChild(li);
    });
}

// =========================
// 🔁 TOGGLE STATUT
// =========================
function toggleStatut(index) {
    let userTasks = tasks.filter(t => t.user === currentUser.email);
    let target = userTasks[index];

    let realIndex = tasks.findIndex(t =>
        t.titre === target.titre &&
        t.date === target.date &&
        t.user === target.user
    );

    if (realIndex !== -1) {
        tasks[realIndex].statut =
            tasks[realIndex].statut === "Fait" ? "Non fait" : "Fait";

        localStorage.setItem("tasks", JSON.stringify(tasks));
        afficherTaches();
    }
}

// =========================
// ✏️ MODIFIER
// =========================
function modifierTache(index) {
    let userTasks = tasks.filter(t => t.user === currentUser.email);
    let target = userTasks[index];

    let nouveauTitre = prompt("Modifier la tâche :", target.titre);

    if (!nouveauTitre || !nouveauTitre.trim()) return;

    let realIndex = tasks.findIndex(t =>
        t.titre === target.titre &&
        t.date === target.date &&
        t.user === target.user
    );

    if (realIndex !== -1) {
        tasks[realIndex].titre = nouveauTitre.trim();

        localStorage.setItem("tasks", JSON.stringify(tasks));
        afficherTaches();
    }
}

// =========================
// 🗑️ SUPPRIMER
// =========================
function supprimerTache(index) {
    let userTasks = tasks.filter(t => t.user === currentUser.email);
    let target = userTasks[index];

    tasks = tasks.filter(t =>
        !(t.titre === target.titre &&
          t.date === target.date &&
          t.user === target.user)
    );

    localStorage.setItem("tasks", JSON.stringify(tasks));
    afficherTaches();
}

// =========================
// 🚪 LOGOUT
// =========================
function logout() {
    localStorage.removeItem("currentUser");
    location.reload();
}

// =========================
// 🌙 DARK MODE
// =========================
function toggleDarkMode() {
    let dark = localStorage.getItem("darkMode") === "true";

    if (dark) {
        document.body.classList.remove("dark");
        localStorage.setItem("darkMode", "false");
    } else {
        document.body.classList.add("dark");
        localStorage.setItem("darkMode", "true");
    }
}

// =========================
// 🔑 RESET PASSWORD
// =========================
function resetPassword() {
    let email = prompt("Entre ton email");

    let user = users.find(u => u.email === email);

    if (!user) {
        alert("Email introuvable ❌");
        return;
    }

    let newPass = prompt("Nouveau mot de passe");

    if (!newPass) return;

    user.password = newPass;
    localStorage.setItem("users", JSON.stringify(users));

    alert("Mot de passe modifié ✅");
}

// =========================
// 🔄 LOAD
// =========================
window.onload = () => {
    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark");
    }

    if (currentUser) {
        afficherApp();
    }
};