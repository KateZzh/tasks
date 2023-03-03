// Неопытный Junior запушил в GitHub html файл с комментариями. Team Lead не
// оценил использование комментариев в ветке development и попросил их убрать.
// Вырезая куски кода вы поняли, что их чересчур много. Необходимо написать
// регулярное выражение, которое вырежет все комментарии из html разметки
// <!-- -->

let htmlFile = "<!-- hgfhgf122 --> <script></script> <!-- 12345hhg --> <body> <body> <!-- AAhhg -->";

function cutComments(htmlFile_) {
  try {
    const htmlCut = htmlFile_.replaceAll(/\<\!-- \w+ --\>/gm, "");

    if (htmlCut.length === htmlFile_.length) throw new Error("not cut file");
    return htmlCut;
  } catch (error) {
    return error.message;
  }
}

const result = cutComments(htmlFile);
console.log(result);
