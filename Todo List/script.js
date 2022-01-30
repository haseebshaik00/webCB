let ulTasks = $('#ulTasks');
let newTask = $('#newTask');
let btnAdd = $('#btnAdd');
let btnClear = $('#btnClear');
let btnSort = $('#btnSort');
let btnClean = $('#btnClean');

function addItem(){
    if(newTask.val() == '')
        alert("Task cannot be empty!");
    else{
        // to define attributes of new item in a list
        let newItem = $('<li></li>',{   
            'class': 'list-group-item',
            text : newTask.val()
        })
        ulTasks.append(newItem);
        newTask.val('');

        newItem.click(() => {
            newItem.toggleClass('done');
        })
    }
}

$(() => {
    btnAdd.click(() => {
        addItem();
    })

    newTask.keypress((e) => {
        if(e.which == 13) addItem();
    })

    btnClear.click(() => {
        newTask.val('');
    })

    btnClean.click(() => {
        $('#ulTasks .done').remove();
    })

    btnSort.click(() => {
        $('#ulTasks .done').appendTo('#ulTasks');
    })
})