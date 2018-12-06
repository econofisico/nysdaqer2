   var json0 = (function () {
       var json0 = null;
       $.ajax({
           'async': false,
           'global': false,
           'url': "../json/now.json",
           'dataType': "json",
           'success': function (data) {
               json0 = data;
           }
       });
       return json0;
   })();

    var data0 = json0;
    var local_data0 = data0;
    var row_data0 = '<th class="danger">' + 'Day' + '<th class="danger">' + 'Hour';

    var row_data0 = row_data0 +
        '<tr class="info">' +
        ' <td>' + local_data0.Day + '</td>' +
        ' <td>' + local_data0.Hour + '</td>' +
        '</tr>';
    var table_body_element0 = document.createElement('tbody');
    table_body_element0.innerHTML = row_data0;
    document.getElementById('my_table0').appendChild(table_body_element0);