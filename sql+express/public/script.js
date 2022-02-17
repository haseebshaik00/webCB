$(() => {
    let id = $('#id');
    let name = $('#name');
    let btnSubmit = $('#btnSubmit');
    let personsList = $('#persons');


    function refreshPersonTable (persons) {
        personsList.empty()
        personsList.append(
            `<tr>
            <th>ID</th>
            <th>Name</th>
            </tr>`
        )
        for (person of persons) {
            personsList.append(
                `<tr>
                    <td>${person.id}</td>
                    <td>${person.name}</td>
                </tr>`
            )
        }
    }

    $.get('/api/persons', function (data) {
        refreshPersonTable(data)
    })

    btnSubmit.click(() => {
        console.log("clicked");
        $.post('/api/persons', 
        {
            id:   id.val(),
            name: name.val()
        },
        function (data) {
            id.val('');
            name.val(''),
            refreshPersonTable(data)
        })
    });
})