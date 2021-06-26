import React from 'react';
import './App.css';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
      lar: '',
      resumo: '',
      cargo: '',
      cargoVerify: false,
      descricao: '',
      displayEnviar: 'none',
    }
    this.handleChange = this.handleChange.bind(this);
    this.verificaCidade = this.verificaCidade.bind(this);
    this.alertCargo = this.alertCargo.bind(this);
    this.enviar = this.enviar.bind(this);
  }

  handleChange(e) {
    let { name, value } = e.target;
    if (name === 'nome') {
      this.setState({
        nome: value.toUpperCase(),
      });
    }
    else if (name === 'endereco') {
      this.setState({
        endereco: value.replace(/[^\w\s]/gi, ''),
      });
    }
    else if (name === 'cidade') {
      this.setState({
        cidade: value,
      });
    }
    else {
      this.setState({
        [name]: value,
      });
    }
  }

  verificaCidade(e) {
    let { name, value } = e.target;
    if (name === 'cidade') {
      this.setState({
        cidade: value.match(/^\d/) ? '' : value,
      });
    }
  }

  alertCargo(e) {
    let { name } = e.target;
    if (name === 'cargo' && this.state.cargoVerify === false) {
      this.setState({
        cargoVerify: true,
      });
      alert('Preencha com cuidado esta informação.');
    }
  }

  enviar() {
    this.setState({
      displayEnviar: 'block',
    })
  }

  render() {
    return (
      <Form
        handleChange={this.handleChange}
        state={this.state}
        verificaCidade={this.verificaCidade}
        alertCargo={this.alertCargo}
        enviar={this.enviar}
      />
    );
  }
}

export default App;
