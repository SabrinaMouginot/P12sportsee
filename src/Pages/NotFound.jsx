// import '../css/NotFound.css';

// const NotFound = () => {
//   return (
//     <div className='notfound-msg'>
//       <h1 className='notfound-title'>404</h1>
//       <p>Oups! La page que vous demandez n'existe pas.</p>
//       <a href="/">Retourner vers la page d'accueil</a>
//     </div>
//   );
// };

// export default NotFound;

import { useNavigate } from 'react-router-dom';
import '../css/NotFound.css';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className='notfound-msg'>
      <h1 className='notfound-title'>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <button onClick={() => navigate(-1)}>Retourner vers la page précédente</button>
    </div>
  );
};

export default NotFound;
