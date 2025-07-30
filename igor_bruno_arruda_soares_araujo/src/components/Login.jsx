import './Login.css'
import { useState } from 'react' 

export default function Login() {
  const [login, setLogin] = useState('');
  const [passe, setPasse] = useState('');

  // Variavel para identificar se o passe existe
  const isValido = passe === 'AlunoPIU';

  const handleLogin = (e) => {
    setLogin(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login:', login);
    console.log('Passe:', passe);

    // Limpa o formulário
    setLogin('');
    setPasse('');
  };

  return (
    <div className='caixa'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className='form'>
        <div className='caixinha'>
          <label className='label'>
            <span>Nome ou e-mail:</span>
            <input
              type="text"
              name="login"
              onChange={handleLogin}
              value={login}
              placeholder="Digite seu nome ou email:"
            />
          </label>
        </div>

        <div className="caixinha">
        <label className="label">
        <span>Senha:</span>
        <input
          type="password"
          name="passe"
          value={passe}
          placeholder="Digite a senha"
          onChange={(e) => setPasse(e.target.value)}
          style={{ backgroundColor: isValido ? '' : 'red' }}
        />
        </label>
        </div>

        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}
