    // LENDO OS ARQUIVOS

    // Lendo arquivo com os dados para o dia:
    
    var json = (function () {
        var json = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': "../json/dayData.json",
            'dataType': "json",
            'success': function (data) {
                json = data;
            }
        });
        return json;
    })();

 /*   var date = new Date();
    document.getElementById("demo").innerHTML = date.toString();*/

    var data = json;
    var local_data = data;


    var row_data = '<th>' + 'Asset' +  '<th>' + 'Signal'+  '<th>' + 'Shares' + '<th>' + 'Last Open' + '<th>' + 'Last Price' + '<th>' +
        'Return (%)' + '<th>' + 'Return B&H (%)';

    for (var i = 0; i < local_data.length; i++) {
        var row_data = row_data +
            '<tr>' +
            ' <td>' + local_data[i].Name + '</td>' +
            ' <td>' + local_data[i].Sinal + '</td>' +
            ' <td>' + local_data[i].Shares + '</td>' +
            ' <td>' + local_data[i].Open + '</td>' +
            ' <td>' + local_data[i].Close + '</td>' +
            ' <td>' + local_data[i].Return + '</td>' +
            ' <td>' + local_data[i].ReturnBH + '</td>' +
            '</tr>';
    }
    var table_body_element = document.createElement('tbody');
    table_body_element.innerHTML = row_data;
    document.getElementById('my_table').appendChild(table_body_element);

