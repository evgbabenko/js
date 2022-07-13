let doc =
{
    title: "",
    body: "",
    footer: "",
    data: "",
    program:
    {
        title: prompt("Введіть заголовок"),
        body: prompt("Введіть текст в body"),
        footer: prompt("Введіть текст в footer"),
        data: prompt("Введіть data"),
        fill: function () {
            document.getElementById("title").innerHTML = `${doc.program.title}`;
            document.getElementById("body").innerHTML = `${doc.program.body}`;
            document.getElementById("footer").innerHTML = `${doc.program.footer}`;
            document.getElementById("data").innerHTML = `${doc.program.data}`;
        }
    },
    show: function () {
        doc.title = document.write('<div id = "title"></div>');
        doc.body = document.write('<div id = "body"></div>');
        doc.footer = document.write('<div id = "footer"></div>');
        doc.data = document.write('<div id = "data"></div>');
    }
}


doc.show();
doc.program.fill();