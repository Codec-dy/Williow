// printing student data{1}
function printDiv() {
        var divToPrint = document.getElementById('stdata');
        document.write(divToPrint.outerHTML);

        var style = "<style>";
        style = style + "table {width: 100%; font: 12px Calibri;}";
        style = style + "table, th, td {border: solid 1px #DDD; border-collapse: collapse;";
        style = style + "padding: 2px 3px; text-align: center;}";
        style = style + "</style>";
        // var win = window.open('', '', 'height=700,width=700');
        document.write(style);
        window.print();
        location.reload();
   }

$("tr").click(()=>{
        console.log(this);
})
