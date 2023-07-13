import { Link } from 'react-router-dom';

function NotFound() {

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>404 ничего не найдено</h1>
      <br></br>
      <Link to="/">вернуться на главную</Link>
    </div>

  );
}
export default NotFound;

