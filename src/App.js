import React, {useEffect , useState} from 'react';
import BarraDeTarefas from './componentes/BarraDeTarefas';
import './App.css';
import Home from './paginas/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './paginas/Login';
import Noticia from './paginas/Noticias';
import Historia from './paginas/Historia';
import CadastroNoticia from './paginas/CadastroNoticia';
import HomeParaisoDasAves from './paginas/HomeParaisoDasAves';
import TabelaDeNoticias from './paginas/TabelaDeNoticias';
import CadastroPassaro from './paginas/CadastroPassaro';
import TabelaDePassaro from './paginas/TabeladePassaros';
function App(props) {
  
  return (
    <>
      <Router>
        <BarraDeTarefas />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' exact component={LoginPage}/>
          <Route path='/postagem/:id' render={(props)=> <Noticia {...props}/>}/>
          <Route path='/historia' exact component={Historia}/>
          <Route path='/cadastronoticia' exact component={CadastroNoticia}/>
          <Route path='/paraisodasaves' exact component={HomeParaisoDasAves}/>
          <Route path='/tabela' exact component={TabelaDeNoticias}/>
          <Route path='/tabelapassaro' exact component={TabelaDePassaro}/>
          <Route path='/cadastroave' exact component={CadastroPassaro}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
