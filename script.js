let currentSlide = 0;
let language = "ru";  // По умолчанию русский язык
let isDarkMode = false;  // По умолчанию светлая тема

// Функция для переключения темы
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}


function toggleTheme() {
    document.body.classList.toggle("dark-theme");
    const themeIcon = document.getElementById("theme-icon");

    if (document.body.classList.contains("dark-theme")) {
        themeIcon.textContent = "🌞"; // Солнце для тёмной темы
    } else {
        themeIcon.textContent = "🌙"; // Луна для светлой темы
    }

    const body = document.body;
    const languageButton = document.querySelector('.language-toggle');
    isDarkMode = !isDarkMode;

    if (isDarkMode) {
        body.classList.add("dark-mode");
        languageButton.classList.add("dark-mode");
    } else {
        body.classList.remove("dark-mode");
        languageButton.classList.remove("dark-mode");
    }
}

function toggleLanguage() {
    const flagElement = document.getElementById("language-flag");

    if (language === "ru") {
        language = "en";
        document.documentElement.lang = "en";
        flagElement.textContent = "🇺🇸";  // Флаг США
        setEnglish();
    } else if (language === "en") {
        language = "ko";
        document.documentElement.lang = "ko";
        flagElement.textContent = "🇰🇷";  // Флаг Кореи
        setKorean();
    } else {
        language = "ru";
        document.documentElement.lang = "ru";
        flagElement.textContent = "🇷🇺";  // Флаг России
        setRussian();
    }
}

function setEnglish() {
    document.getElementById("library-title").textContent = "📖 Online Library";
    document.getElementById("all-books").textContent = "📚 All Books";
    document.getElementById("fiction").textContent = "📖 Fiction";
    document.getElementById("science").textContent = "📘 Science Books";
    document.getElementById("history").textContent = "📕 History";
    document.getElementById("biographies").textContent = "📙 Biographies";
    document.getElementById("philosophy").textContent = "📚 Philosophy";
    document.getElementById("poetry").textContent = "📜 Poetry";
    document.getElementById("art").textContent = "🎨 Art";
    document.getElementById("technology").textContent = "🖥️ Technology";
    document.getElementById("children").textContent = "👶 Children's Books";
    document.getElementById("baby").textContent = "👶 Children's Books";

    document.getElementById("welcome-message").textContent = "Welcome to our online library! Choose a category to find books you're interested in.";
}

function setRussian() {
    document.getElementById("library-title").textContent = "📖 Онлайн-Библиотека";
    document.getElementById("all-books").textContent = "📚 Все книги";
    document.getElementById("fiction").textContent = "📖 Художественная ";
    document.getElementById("science").textContent = "📘 Научные книги";
    document.getElementById("history").textContent = "📕 История";
    document.getElementById("biographies").textContent = "📙 Биографии";
    document.getElementById("philosophy").textContent = "📚 Философия";
    document.getElementById("poetry").textContent = "📜 Поэзия";
    document.getElementById("art").textContent = "🎨 Искусство";
    document.getElementById("technology").textContent = "🖥️ Технологии";
    document.getElementById("children").textContent = "👶 Детские книги";
    document.getElementById("baby").textContent = "👶 Детские книги";

    document.getElementById("welcome-message").textContent = "Добро пожаловать в нашу онлайн-библиотеку! Выберите категорию, чтобы найти интересующие вас книги.";
}

function setKorean() {
    document.getElementById("library-title").textContent = "📖 온라인 도서관";
    document.getElementById("welcome-message").textContent = "우리 온라인 도서관에 오신 것을 환영합니다! 책을 찾으려면 카테고리를 선택하십시오.";
    document.getElementById("all-books").textContent = "📚 모든 책";
    document.getElementById("fiction").textContent = "📖 소설";
    document.getElementById("science").textContent = "📘 과학 책";
    document.getElementById("history").textContent = "📕 역사";
    document.getElementById("biographies").textContent = "📙 전기";
    document.getElementById("philosophy").textContent = "📚 철학";
    document.getElementById("poetry").textContent = "📜 시";
    document.getElementById("art").textContent = "🎨 예술";
    document.getElementById("technology").textContent = "🖥️ 기술";
    document.getElementById("children").textContent = "👶 어린이 도서";
    document.getElementById("baby").textContent = "👶 어린이 도서";

}
