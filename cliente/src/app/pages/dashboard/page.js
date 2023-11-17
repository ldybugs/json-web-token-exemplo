import { getUsers } from "@/app/functions/handlerAcessAPI";
import { Suspense } from "react";
import  ListUsers  from "@/app/functions/componentes/listUsers";
import 'react-toastify/dist/ReactToastify.min.css';
import styles from './dashboard.css'

export default async function Dashboard() {
    const lista = await getUsers();
   
    return (
      <body>  
        <ul>
          <li><a href={"/pages/dashboard"}>Home</a></li>
           <li><a href={"/pages/register"}>Cadastro</a></li>
           <li><a href={"/pages/alter"}>Alterar</a></li>
       </ul>
        <div>
            <div>
              <Suspense fallback={<p>Carregando...</p>}>
                <ListUsers users={lista}/>
              </Suspense>
            </div>
        </div>
        </body>
    );
};