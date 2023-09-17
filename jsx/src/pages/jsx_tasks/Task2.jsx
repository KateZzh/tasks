// 2. На входе статичный массив чисел. Ваша задача найти корень каждого числа и
// отобразить на странице в виде h1

function Task2() {
  const numArr = [1, 2, 3, 4];
  return (
    <>
      <div>
        {numArr.map((el) => (
          <h1>{Math.sqrt(el)}</h1>
        ))}
      </div>
    </>
  );
}

export default Task2;
