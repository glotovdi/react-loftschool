import React from 'react';
import { getLoggedInUser } from '../utils';
/*
  Манипуляция пропами

  Первый HOC который нужно написать - enchancer.
  
  Он будет принимать проп loading и в зависимости
  от его значения показывать прелоадер,
  или обёрнутый компонент
*/

const LoadingSpinner = () => <div>Loading...</div>;

export const withLoading = Component => {
  return props => {
    const { loading } = props;
    return !loading ? <Component {...props} /> : <LoadingSpinner />;
  };
};

/*
  Следующий HOC - injector, его особенность в том,
  что он не даёт перезаписать проп, который передаёт
  в оборачиваемый компонент

  Нужно написать HOC, который передаст авторизованного
  пользователя через проп user

  Чтобы получить текущего пользователя - используйте
  метод `getLoggedInUser` из `utils`

  const user = getLoggedInUser()
*/

export const addLoggedInUser = Component => {
  const user = getLoggedInUser();
  return props => {
    return <Component {...props} user={user} />;
  };
};
/*
  Помимо добавления новых пропов можно модифицировать те,
  что уже были переданы в компонент

  Мы будем передавать во WrappedComponent список книг
  [{title: "Harry Potter", author: "J. K. Rowling"}, ...]

  Ваша задача написать HOC, который перехватит prop books,
  отсортирует по названиям по алфавиту
  и передаст в обёрнутый компонент
*/

export const withSort = Component => {
  return props => {
    const { books } = props;
    return (
      <Component
        {...props}
        books={books.sort((a, b) => (a.title > b.title ? 1 : -1))}
      />
    );
  };
};
