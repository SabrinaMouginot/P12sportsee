import { useNavigate } from 'react-router-dom';
import '../css/NotFound.css';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className='notfound-msg'>
      <h1 className='notfound-title'>404</h1>
      <p>Oups! La page que vous demandez n&#39;existe pas.</p>
      <span className='back-link' onClick={() => navigate(-1)}>Retourner à la page précédente</span>
    </div>
  );
};

export default NotFound;