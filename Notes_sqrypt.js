let list = document.querySelector('#list');
let textarea = document.querySelector('#textarea');
let notes = [];
let state = {edit: false, key: undefined};

textarea.addEventListener('blur', function() {
    // Блок редктирования текста
    if (state.edit) {
        let change_title = confirm('Сохранить изменения?') // Подтверждение, если сохранить - сохраняем, если нет -
            if (change_title) {
                notes[state.key].text = this.value;
            } else {
                state = {edit: false, key: undefined};
            }
        this.value = ''; // Очищаем окно ввода текста
        
        
    } 
    // основной блок ввода и сохранения текста
    else {
        let save_title = prompt('Введите имя заметки') // Сразу предлагаем сохранить, если не хотим -
            if (save_title) {
                notes.push({text: this.value, title: save_title});
            } else {
                state = {edit: true, key: num};
            }
        this.value = ''; // Очищаем окно ввода текста
        
        let li = document.createElement('li');
        li.dataset.num = notes.length - 1;
        li.innerHTML = save_title;
        list.appendChild(li);
        
        let self = this;
        li.addEventListener('click', function() {
            let num = this.dataset.num;
            self.value = notes[num].text;
            
            state = {edit: true, key: num};
        });
    }
});