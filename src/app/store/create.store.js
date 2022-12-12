import { combineReducers, configureStore } from "@reduxjs/toolkit";
import clientsReducer from "./clients";
import exersiceReducer from "./exercise";
import trainersReducer from "./trainers";

//Вспомогательная функция combineReducers преобразует объект, значениями которого являются различные функции редюсеры, в одну функцию редюсер, которую можно передать в метод createStore

const rootReducer = combineReducers({
  trainers: trainersReducer,
  exercises: exersiceReducer,
  clients: clientsReducer,
});

export function createStore() {
  return configureStore({ reducer: rootReducer });
}

//Экшены — это структуры, которые передают данные из вашего приложения в стор. Они являются единственными источниками информации для стора. Вы отправляете их в стор, используя метод store.dispatch(). Экшены — это обычные JavaScript-объекты. Экшены должны иметь поле type, которое указывает на тип исполняемого экшена. Типы должны быть, как правило, заданы, как строковые константы.

//Редюсеры определяют, как состояние приложения изменяется в ответ на экшены, отправленные в стор. Помните, что экшены только описывают, _что произошло, но не описывают, как изменяется состояние приложения.

//Стор (Store) — это объект, который соединяет экшены(факт того, что что-то случилось) и редюсеры (которые обновляют состояние в соответствии с экшенами)
