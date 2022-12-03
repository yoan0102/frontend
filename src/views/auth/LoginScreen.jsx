import { useState } from "react";
import { MAGIC_WORD } from "../../core/consts/magicWord";
import { useAuthContent } from "../../core/context/authContext";

const LoginScreen = () => {
  const [magicWord, setmagicWord] = useState('')
  const { login } = useAuthContent()

  function handleInputChange(e) {
    setmagicWord(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (magicWord === MAGIC_WORD) {
      login();
    }

  }



  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={magicWord} onChange={handleInputChange} />
        <button type="submit">Iniciar Sesion</button>

      </form>
    </div>

  );
}

export default LoginScreen;