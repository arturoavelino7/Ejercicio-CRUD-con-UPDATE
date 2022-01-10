window.addEventListener('load',()=> {
    const form = document.querySelector('#insertar');
    const input = document.querySelector('#addItem');
    const list_el = document.querySelector('#actividades');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const actividad = input.value;

        const act_el = document.createElement('div');
        act_el.classList.add('actividad');

        const act_content_el = document.createElement('div');
        act_content_el.classList.add('content');

        act_el.appendChild(act_content_el);

        const act_input_el =document.createElement('input');
        act_input_el.classList.add('text');
        act_input_el.type = 'text';
        act_input_el.value = actividad;
        act_input_el.setAttribute('readonly', 'readonly');

        act_content_el.appendChild(act_input_el)

        const act_actions_el =document.createElement('div');
        act_actions_el.classList.add('actions');

        const act_edit_el = document.createElement('button');
        act_edit_el.classList.add('edit');
        act_edit_el.innerText = 'Edit';

        const act_delete_el =document.createElement('button');
        act_delete_el.classList.add('delete');
        act_delete_el.innerText = 'X';

        act_actions_el.appendChild(act_edit_el);
        act_actions_el.appendChild(act_delete_el);

        act_el.appendChild(act_actions_el);

        list_el.appendChild(act_el);

        input.value = '';

        act_edit_el.addEventListener('click', (e) => {
            if (act_edit_el.innerText.toLowerCase() == "edit") {
                act_edit_el.innerText = "Save";
                act_input_el.removeAttribute("readonly");
                act_input_el.focus();
            } else {
                act_edit_el.innerText = "Edit";
                act_input_el.setAttribute("readonly", "readonly");
            }
        });

        act_delete_el.addEventListener('click', (e) => {
            list_el.removeChild(act_el);
        })
    });
});