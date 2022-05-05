let list = document.querySelector('#list');
let textarea = document.querySelector('#textarea');
let notes_list = []; // Список для того, чтобы заметки сохранялись по очереди их создания
let current_status = {edit: false, key: undefined}; // В данном случае оба значения постоянно вместе, чтобы одно из них не потерять, они находятся в одном объекте

// Сохранение и перезапись происходят по потере фокуса и клику мыши

textarea.addEventListener('blur', function() { 

    // Блок редктирования текста
    if (current_status.edit) {
        let change_title = confirm('Сохранить изменения?') // Подтверждение, если сохранить - сохраняем, если нет - оставляем текущий статус
            if (change_title) {
                notes_list[current_status.key].text = this.value;
            } else {
                current_status = {edit: false, key: undefined};
            }
        this.value = ''; // Очищаем окно ввода текста
        
        
    } 

    // Основной блок ввода и сохранения текста
    else {
        let save_title = prompt('Введите имя заметки') // Сразу предлагаем сохранить, если хотим - добавляем заметку в список(массив), если не хотим - обновляем статус (поле остается заполненым)
            if (save_title) {
                notes_list.push({text: this.value, title: save_title});
            } else {
                current_status = {edit: true, key: num};
            }
        this.value = ''; // Очищаем окно ввода текста
        
        let li = document.createElement('li'); // Одновременно со списком создаем новый тег li и по клику мыши в textarea открывается содержимое
        li.dataset.num = notes_list.length - 1;
        li.innerHTML = save_title;
        list.appendChild(li);
        
        let self = this; // Чтобы связать li и textarea
        li.addEventListener('click', function() {
            let num = this.dataset.num;
            self.value = notes_list[num].text;
            current_status = {edit: true, key: num};
        });
    }
});