// Разработчик запушил в главную ветку GitHub js файл с многострочными
// комментариями (/* */). Предстоящее демо гарантирует демонстрацию экрана с
// кодом проделанной работы за спринт. Программисту необходимо вырезать все
// комментарии в коде новым коммитом. Задача: вырезать куски кода комментариев
// используя регулярные выражения воизбежание публичного стыда.

const jsFile = "/* fdfd */ hey! /*fds */ /* */ hey!  /* */";
// const jsFile = "hey!";

function cutComment(jsFile_) {
  try {
    if (!/\/\*[A-Za-z0-9 ]+\*\//gm.test(jsFile_))
      throw new Error("file has no comments");

    const newFile = jsFile_.replaceAll(/\/\*[A-Za-z0-9 ]+\*\//gm, "");

    console.log(newFile);
  } catch (error) {
    console.log(error.message);
  }
}

cutComment(jsFile);
