// 1. Переключение темы (Лунная ночь / Дневная степь)
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('day-theme');
    const isDay = document.body.classList.contains('day-theme');
    themeToggle.textContent = isDay ? '🌙 Лунная ночь' : '☀️ Дневная степь';
});

// 2. Фильтрация карточек разделов артбука
const filterButtons = document.querySelectorAll('.filter-btn');
const conceptItems = document.querySelectorAll('.concept-item');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;
        conceptItems.forEach(item => {
            if (filter === 'all' || item.dataset.category === filter) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    });
});

// 3. Интерактивный генератор этнографических заметок
const loreNotes = [
    'Сигедек — традиционная безрукавка замужней хакасской женщины, богато украшенная вышивкой и символизирующая статус и защиту рода.',
    'В героическом эпосе «Алыптығ нымах» девушки-богатырки (Алып-хыс) наравне с мужчинами защищают родную землю и проходят испытания.',
    'Снежный барс (ирбис) в культуре Саяно-Алтая почитается как дух-хозяин горных вершин и символ благородной силы.',
    'Традиционные орнаменты на одежде несли обережную функцию: плавные растительные узоры символизировали связь с природой и плодородие.'
];

let currentNote = 0;
const loreBtn = document.getElementById('loreBtn');
const loreText = document.getElementById('loreText');

loreBtn.addEventListener('click', () => {
    loreText.textContent = loreNotes[currentNote];
    currentNote = (currentNote + 1) % loreNotes.length;
});