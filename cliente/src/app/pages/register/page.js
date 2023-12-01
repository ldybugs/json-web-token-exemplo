'use client'
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { postUser } from '@/app/functions/handlerAcessAPI';
import { ToastContainer, toast } from 'react-toastify';
import styles from './register.css'

export default function Register() {
  const [registro, setRegistro] = useState({
    nome: '', senha: ''
  });

  const { push, refresh } = useRouter();

  const handlerFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await postUser(registro);
      push('/pages/dashboard');
    } catch {
      return toast.error('Error');
  }

  const success = true;
   if (success) {
      toast.success('Usuário cadastrado com sucesso!');
    } else {
      toast.error('Ocorreu um erro ao cadastrar o usuário.');
    }
  };
    return (
        <body>
        <ul>
          <li><a href={"/pages/dashboard"}>Home</a></li>
           <li><a href={"/pages/register"}>Cadastro</a></li>
           <li><a href={"/pages/alter"}>Alterar</a></li>
       </ul>
       <br/>
       <br/>
       <form onSubmit={handlerFormSubmit}>
       <div class="forrm">
       <div class="form">
      <div class="title">Cadastrar</div>
    
      <div class="input-container ic1">
        <input id="nome" class="input" type="text" name="nome" placeholder=" "  onChange={(e) => { setRegistro({ ...registro, nome: e.target.value }) }}/>
        <div class="cut"></div>
        <label for="nome" class="placeholder">Nome</label>
      </div>
      <div class="input-container ic2">
        <input id="password" class="input" type="password" name="senha"placeholder=" "  onChange={(e) => { setRegistro({ ...registro, senha: e.target.value }) }}/>
        <div class="cut cut-short"></div>
        <label for="senha" class="placeholder">Senha</label>
      </div>
      <div class="input-container ic2">
        <input id="password" class="input" type="password" name="csenha" placeholder=" "  onChange={(e) => { setRegistro({ ...registro, csenha: e.target.value }) }}/>
        <div class="cut cut-short"></div>
        <label for="senha" class="placeholder">Confirmar senha</label>
      </div>
      <button class="submit">Cadastrar</button>
      <ToastContainer />
    </div>
    </div>
       </form>
        </body>
        )
    };