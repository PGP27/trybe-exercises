import React from 'react';

class FormPessoal extends React.Component {
  render() {
    const { handleChange, state, verificaCidade } = this.props;
    return (
      <fieldset className="form-pessoal">
        <legend>Dados pessoais:</legend>

        <label>Nome:
          <input
            name="nome"
            type="text"
            maxLength="40"
            onChange={handleChange}
            value={state.nome}
            required
          />
        </label>

        <label>Email:
          <input
            name="email"
            type="email"
            maxLength="50"
            onChange={handleChange}
            required
          />
        </label>

        <label>CPF:
          <input
            name="cpf"
            type="text"
            maxLength="11"
            onChange={handleChange}
            required
          />
        </label>

        <label>Endereço:
          <input
            name="endereco"
            type="text"
            maxLength="200"
            onChange={handleChange}
            value={state.endereco}
            required
          />
        </label>

        <label>Cidade:
          <input
            name="cidade"
            type="text"
            maxLength="28"
            onChange={handleChange}
            onBlur={verificaCidade}
            value={state.cidade}
            required
          />
        </label>

        <label>Estado:
          <select
            name="estado"
            onChange={handleChange}
            required>
            <option>Amazonas</option>
            <option>Bahia</option>
            <option>Ceará</option>
            <option>Rio de Janeiro</option>
            <option>São Paulo</option>
          </select>
        </label>

        <p>Tipo:</p>
        
        <label htmlFor="radio-casa">
          <input
            id="radio-casa"
            type="radio"
            name="lar"
            onChange={handleChange}
          />
          Casa
        </label>
        
        <label htmlFor="radio-apartamento">
          <input
            id="radio-apartamento"
            type="radio"
            name="lar"
            onChange={handleChange}
          />
          Apartamento
        </label>
      </fieldset>
    );
  }
}

export default FormPessoal;
