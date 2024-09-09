﻿$(document).ready(function () {
    loadDataTable();
});

function loadDataTable() {
    $('#tblData').DataTable({
        "ajax": {
            "url": '/admin/product/getall',
            "type": 'GET',
            "dataSrc": 'data' // The JSON object has a 'data' field which is an array of products
        },
        "columns": [
            { "data": "title", "width": "25%" },
            { "data": "isbn", "width": "15%" },
            { "data": "listPrice", "width": "10%" },
            { "data": "author", "width": "15%" },
            { "data": "category.name", "width": "10%" }, // Accessing nested property 'category.name'
            {
                "data": 'id',                
                "render": function (data) {
                    return `
                        <div class="w-75 btn-group" role="group">
                            <a href="/admin/product/upsert?id=${data}" class="btn btn-primary mx-2"><i class="bi bi-pencil-square"></i> Edit </a>
                            <a class="btn btn-danger mx-2"><i class="bi bi-trash-fill"></i> Delete </a>
                        </div>`
                },
                "width": "25%"
            }
        ]
    });
}
