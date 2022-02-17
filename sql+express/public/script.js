$(() => {
    let id = $('#id');
    let name = $('#name');
    let butSubmit = $('#btnSubmit');
    let persons = $('#persons');


    function refreshPersonTable (persons) {
        persons.empty()
        persons.append(
            `<tr>
            <th>ID</th>
            <th>Name</th>
            </tr>`
        )
        for (person of persons) {
            persons.append(
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

    butSubmit.click(() => {
        
    });
})