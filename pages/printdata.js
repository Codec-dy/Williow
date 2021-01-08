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

function printInfo(){
        var divToPrint = document.getElementById("personal");
        document.write(divToPrint.innerHTML);
        document.getElementById("print").remove();
        let style = `<style>#personal {
                padding: 10px;
                background: white;
                width: 70%;
                height: 90vh;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                z-index: 4;
                transition: 0.4s;
                display: none;
              }
              #info {
                display: flex;
                flex-direction: column;
                width: 50%;
                position: absolute;
                right: 10px;
                justify-content: space-between;
                height: 70%;
              }
              #info div {
                display: flex;
              }
              #info div span {
                flex: 1;
              }
              #img {
                position: absolute;
                width: 40%;
                height: 40%;
              }
              #img img {
                width: 100%;
                height: 100%;
              }</style>`;
              document.write(style);
        window.print();
        location.reload();
}
