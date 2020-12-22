function myFunc() {
    document.write("<ul><li>Apple</li><li>Banana</li></ul>");

    //     document.write('<ul>');
    //     for (let i = 1; i <= 10; i++) {
    //         // document.write('<p>i의 값은: <b>' + i + '</b>입니다.</p>');
    //         if (i % 2 == 1) {
    //             document.write('<li class = "even">' + dan + ' * ' + i + ' = <b>' + (dan * i) + '</li></b>');
    //         } else {
    //             document.write('<li class = "odd" >' + dan + ' * ' + i + ' = <b>' + (dan * i) + '</li></b>');
    //         }
    //     }
    //     document.write('</ul>');
    // }
    let dan = 4;
    document.write('<table border="1">');
    for (let i = 1; i <= 10; i++) {
        document.write('<tr><td>' + dan  + '</td><td> * </td><td>' + i + ' </td><td> = </td><td>' + (dan * i) + '</td></tr>');
    }
    document.write('</table>');
}
