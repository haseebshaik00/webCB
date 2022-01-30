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

newTask.keypress((e) => {
    if(e.which == 13) addItem();
})

$(() => {
    btnAdd.click(() => {
        addItem();
    })

    btnClear.click(() => {
        newTask.val('');
    })


})