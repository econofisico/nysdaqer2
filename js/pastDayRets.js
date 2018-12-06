    // LENDO OS ARQUIVOS

    // Lendo arquivo com os dados para o passado:
    
    var json4 = (function () {
        var json4 = null;
        $.ajax({
            'async': false,
            'global': false,
            'url': "../json/pastDayRets.json",
            'dataType': "json",
            'success': function (data) {
                json4 = data;
            }
        });
        return json4;
    })();

 //   var date = new Date();
 //   document.getElementById("demo").innerHTML = date.toString();


    var data4 = json4;
    var local_data4 = data4;


    var row_data4 = 
    '<th>' + 'Date' + 
    '<th>' + 'RET (%)' + 
    '<th>' + 'RET B&H (%)';

      for (var i = 0; i < local_data4.length; i++) {
        var row_data4 = row_data4 +
            '<tr>' +
            ' <td>' + local_data4[i].Date + '</td>' +
            ' <td>' + local_data4[i].RET + '</td>' +
            ' <td>' + local_data4[i].RET_BH + '</td>' +
            '</tr>';
    }
    


    var table_body_element4 = document.createElement('tbody');
    table_body_element4.innerHTML = row_data4;
    document.getElementById('my_table4').appendChild(table_body_element4);

 