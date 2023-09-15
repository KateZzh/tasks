// 1. Создайте простое приложение для аутентификации пользователя. Используйте
// useContext, чтобы хранить информацию о текущем пользователе.

// import { useContext } from "react";
// import myContext from "../context/context";

// const Task41 = () => {
//   const { id, name, email, pwd } = useContext(myContext);

//   return (
//     <div>
//       <p>{id}</p>
//       <p>{name}</p>
//       <p>{email}</p>
//       <p>{pwd}</p>
//     </div>
//   );
// };

// export default Task41;

// 2. Разработайте приложение, в котором пользователь может выбирать язык
// интерфейса (например, английский и испанский). Используйте useContext, чтобы
// хранить текущий выбранный язык и переводить текст на выбранный язык в
// компонентах.

import { useContext } from "react";
import myContext from "../context/context";

const Task42 = () => {
  const { val, getLang } = useContext(myContext);

  const obj = {
    ru: "Привет",
    en: "Hello",
  };

  return (
    <div>
      <button onClick={getLang}>en</button>
      <button onClick={getLang}>ru</button>
      <p>{obj[val]}</p>
    </div>
  );
};

export default Task42;
