import './Interface.css';

import { TodoList } from '../TodoList/TodoList';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { constants } from '../../constants';
import { Spinner } from '../Spinner/Spinner';
const { todoInterfaceClassName, errorBoundaryFallback } = constants;

const Interface = () => {
  return (
    <section>
      <h1>ReacTodo</h1>
      <div>
        <div className={todoInterfaceClassName}>
          <ErrorBoundary fallback={<div>{errorBoundaryFallback}</div>}>
            <Suspense fallback={<Spinner />}>
              <TodoList />
            </Suspense>
          </ErrorBoundary>
        </div>
      </div>
    </section>
  );
};

export default Interface;
