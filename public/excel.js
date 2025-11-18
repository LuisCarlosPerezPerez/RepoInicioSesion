function DownloadJSON2CSV(objArray)
{
    var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;

    var str = '';

    for (var i = 0; i < array.length; i++) {
        var line = new Array();

        for (var index in array[i]) {
           line.push('"' + array[i][index] + '"');
        }

        str += line.join(';');
        str += '\r\n';

    }
    window.open("data:text/csv;charset=utf-8," + encodeURIComponent(str));
}
