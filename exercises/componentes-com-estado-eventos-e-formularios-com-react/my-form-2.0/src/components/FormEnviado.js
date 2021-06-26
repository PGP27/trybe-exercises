import React from 'react';

class FormEnviado extends React.Component {
  render() {
    const { state } = this.props;
    return (
      <div style={{display: state.displayEnviar}}>
          <p>Nome: {state.nome}</p>
          <p>Email: {state.email}</p>
          <p>CPF: {state.cpf}</p>
          <p>Endereço: {state.endereco}</p>
          <p>Cidade: {state.cidade}</p>
          <p>Estado: {state.estado}</p>
          <p>Tipo: {state.lar}</p>
          <p>Resumo do currículo: {state.resumo}</p>
          <p>Cargo: {state.cargo}</p>
          <p>Descrição do cargo: {state.descricao}</p>
      </div>
    );
  }
}

export default FormEnviado;
