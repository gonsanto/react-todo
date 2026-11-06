import './Spinner.css';
import { constants } from '../../constants';
const { spinnerClassName, overlayClassName } = constants;

export const Spinner = () => {
  const spinner = document.createElement('div');
  spinner.className = spinnerClassName;

  return (
    <div className={overlayClassName}>
      <div>Loading todos...</div>
      <div className={spinnerClassName}></div>
    </div>
  );
};
