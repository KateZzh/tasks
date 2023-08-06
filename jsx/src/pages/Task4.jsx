// 4. На входе статичный массив строк. Ваша задача отобразить на странице все строки
// массива, а также картинку. Каждая итерация будет возвращать
// <div>
// <p>el</p>
// <img/>
// </div>
import img1 from "./assets/img.png";

function Task4() {
  const strArr = ["aaa", "ss", "dd", "f"];
  return (
    <>
      {strArr.map((el) => (
        <div>
          <p>{el}</p>
          <img src={img1} alt="" width="200"/>
        </div>
      ))}
    </>
  );
}

export default Task4;
