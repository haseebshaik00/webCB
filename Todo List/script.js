let ulTasks = $('#ulTasks');
let newTask = $('#newTask');
let ulError = $('#ulError');
let btnAdd = $('#btnAdd');
let btnClear = $('#btnClear');
let btnSort = $('#btnSort');
let btnClean = $('#btnClean');

function addItem(){
    if(newTask.val() == '')
    {
        let newItem = $('<li></li>',{   
            'class': 'list-group-item',
            'id' : 'errorList',
            text : "Task can't be empty!"
        })
        ulError.append(newItem);
        setTimeout(function(){
            $("#errorList").remove();
        },500);
        newTask.val() == '';
    }
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