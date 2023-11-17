'use client'
import { useState } from "react";
import handlerAcessUser from "../../functions/handlerAcess"
import 'react-toastify/dist/ReactToastify.min.css';
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import styles from './alter.css'


export default function Alter() {
    const [alter, setAlter] = useState({
      name: '', email: '', password: ''
    });

    const { push, refresh } = useRouter();

    const handlerAlter = async (e) => {
        e.preventDefault();
        try {
          await handlerAcessUser(user);
          push('/pages/alter');
        } catch {
          refresh();
        }
    
     const success = true;
     if (success) {
        toast.success('Login alterado com sucesso!');
     } else {
        toast.error('Ocorreu um erro ao alterar o login.');
      }
    }

    return (
        <body className={styles.alter}>
        <ul>
          <li><a href={"/pages/dashboard"}>Home</a></li>
           <li><a href={"/pages/register"}>Cadastro</a></li>
           <li><a href={"/pages/alter"}>Alterar</a></li>
       </ul>
       <br/>
       <br/>
       <form onSubmit={handlerAlter}>
       <div class="forrm">
       <div class="form">
      <div class="title">Alterar</div>
    
      <div class="input-container ic1">
        <input id="firstname" class="input" type="text" placeholder=" " onChange={(e) => { setAlter({ ...alter, name: e.target.value }) }}/>
        <div class="cut"></div>
        <label for="firstname" class="placeholder">Nome</label>
      </div>
      <div class="input-container ic2">
        <input id="lastname" class="input" type="email" placeholder=" " onChange={(e) => { setAlter({ ...alter, email: e.target.value }) }}/>
        <div class="cut"></div>
        <label for="lastname" class="placeholder">Email</label>
      </div>
      <div class="input-container ic2">
        <input id="email" class="input" type="password" placeholder=" " onChange={(e) => { setAlter({ ...alter, password: e.target.value }) }}/>
        <div class="cut cut-short"></div>
        <label for="email" class="placeholder">Senha</label>
      </div>
      <button class="submit">Alterar</button>
      <ToastContainer />
    </div>
    </div>
    </form>
        </body>
        )
    };