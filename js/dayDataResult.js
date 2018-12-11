    // Lendo arquivo com os retornos em %:

    var json2 = (function () {
        var json2 = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': "../json/dayDataResult.json",
            'dataType': "json",
            'success': function (data) {
                json2 = data;
            }
        });
        return json2;
    })();

    var data2 = json2;
    var local_data2 = data2;
    var row_data2 = '<th class="danger">'
    + 'Strategy'
    + '<th class="danger">'
    + 'B&H'
    + '<th class="danger">'
    + 'S&P 500';

    var row_data2 = row_data2 +
        '<tr class="info">' +
        ' <td>' + local_data2.Strategy + '</td>' +
        ' <td>' + local_data2.BH + '</td>' +
        ' <td>' + local_data2.SP500 + '</td>' +
        '</tr>';
    var table_body_element2 = document.createElement('tbody');
    table_body_element2.innerHTML = row_data2;
    document.getElementById('my_table2').appendChild(table_body_element2);
