import React, {Component} from "react";

class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      senha: "",
      mensagem: ""
    }
    this.autenticar = this.autenticar.bind(this);
  }

  autenticar () {
    console.log(this.state);
    if(this.state.email === "eduardo.lino@pucpr.br" && this.state.senha === "123456") {
      this.setState({mensagem: "Acessado com sucesso!"});
    }else{
      this.setState({mensagem: "Usuário ou senha incorretos!"});
    }
  }

  render(){
    return(
      <div>
        <h1>Login</h1>
        E-mail &nbsp; &nbsp;
        <input type="text" size="20" name="email" onChange={e => this.setState({email: e.target.value})} /> <br/>
        Senha &nbsp; &nbsp;
        <input type="password" size="20" name="senha" onChange={e => this.setState({senha: e.target.value})} /> <br/><br/> 
        <button onClick={this.autenticar}> Entrar </button> <br/><br/>
        <label>{this.state.mensagem}</label>
      </div>
    )
  }
}

export default App;