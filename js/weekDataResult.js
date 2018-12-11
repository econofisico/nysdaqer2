   
    var json5 = (function () {
        var json5 = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': "../json/weekDataResult.json",
            'dataType': "json",
            'success': function (data) {
                json5 = data;
            }
        });
        return json5;
    })();

    var data5 = json5;
    var local_data5 = data5;
    var row_data5 = '<th class="danger">'
    + 'Strategy'
    + '<th class="danger">'
    + 'B&H'
    + '<th class="danger">'
    + 'S&P 500';

    var row_data5 = row_data5 +
        '<tr class="info">' +
        ' <td>' + local_data5.Strategy + '</td>' +
        ' <td>' + local_data5.BH + '</td>' +
        ' <td>' + local_data5.SP500 + '</td>' +
        '</tr>';
    var table_body_element5 = document.createElement('tbody');
    table_body_element5.innerHTML = row_data5;
    document.getElementById('my_table5').appendChild(table_body_element5);
