import NavBar from '../../components/nav'
import Home from '../../components/home'
import Projetos from '../../components/projetos'
import Contato from '../../components/contato'

function User() {

    return (
      <div className="App">
        <NavBar />
        <Home />
        <Projetos />
        <Contato />
      </div>
    );
  }
  
  export default User;