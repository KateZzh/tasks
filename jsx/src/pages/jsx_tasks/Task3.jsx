// 3. На входе статичный массив строк. Ваша задача отфильтровать и отобразить на
// странице в тег li только те строки, которые содержат знак @

function Task3() {
const strArr = ["a@ss", "ss", "aa@a", "asd"]
  return (
    <>
  {strArr.filter((el) => el.includes("@"))}
    </>
  )
}

export default Task3;