﻿var dataTable;

$(document).ready(function () {
    loadDataTable();
});

function loadDataTable() {
    dataTable = $('#tblData').DataTable({
        "ajax": {
            "url": '/admin/company/getall',
            "type": 'GET',
            "dataSrc": 'data' // The JSON object has a 'data' field which is an array of products
        },
        "columns": [
            { "data": "name", "width": "25%" },
            { "data": "streetAddress", "width": "15%" },
            { "data": "city", "width": "10%" },
            { "data": "state", "width": "15%" },
            { "data": "phoneNumber", "width": "15%" }, 
            {
                "data": 'id',
                "render": function (data) {
                    return `
                        <div class="w-75 btn-group" role="group">
                            <a href="/admin/company/upsert?id=${data}" class="btn btn-primary mx-2"><i class="bi bi-pencil-square"></i> Edit </a>
                            <a onClick="Delete('/admin/company/delete/${data}')" class="btn btn-danger mx-2"><i class="bi bi-trash-fill"></i> Delete </a>
                        </div>`;
                },
                "width": "25%"
            }
        ]
    });
}

function Delete(url) {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: url,
                type: 'DELETE',
                success: function (data) {
                    dataTable.ajax.reload(); // Refresh the data table
                    toastr.success(data.message); // Show success message
                },
                error: function (xhr, status, error) {
                    toastr.error('An error occurred: ' + xhr.responseText); // Show error message
                }
            });
        }
    });
}
