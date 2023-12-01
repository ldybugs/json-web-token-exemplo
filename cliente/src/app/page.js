'use client'
import { useState } from "react";
import handlerAcessUser from "./functions/handlerAcess"
import { useRouter } from "next/navigation";
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';
import styles from './page.module.css'



export default function Login() {
  const [user, setUser] = useState({
    nome: '', senha: '',
  });
  const { push, refresh } = useRouter();

  const handlerLogin = async (e) => {
    e.preventDefault();
   
    try {
      const userAuth = await handlerAcessUser(user);
      if (userAuth.token ===  undefined){
        toast.error('Email ou senha incorretos.');
      }
      push('/pages/dashboard');
    } catch {
      toast.error("Erro na aplicação.")
    }
  };

    return (
    <body className={styles.login}>
    <div>
       <form onSubmit={handlerLogin}>
       <div className={styles.forrm}>
       <div className={styles.form} onSubmit={handlerLogin}>
      <div className={styles.title}>Login</div>
        
        <div className={styles.ic1}>
        <input id="nome" className={styles.input} type="text"  name="nome" placeholder=" " onChange={(e) => { setUser({ ...user, nome: e.target.value }) }}></input>
        <div className={styles.cut}></div>
        <label for="nome" className={styles.placeholder}>Nome</label>
      </div>
      <div className={styles.ic2}>
        <input id="senha" className={styles.input} type="password" placeholder=" " onChange={(e) => { setUser({ ...user, senha: e.target.value }) }}></input>
        <div className={styles.cut}></div>
        <label for="senha" className={styles.placeholder}>Senha</label>
      </div>
        <button className={styles.submit}>Entrar</button>
        </div>
        </div>
        </form>
      <ToastContainer />
      </div>
      </body>
  )
}
