import React from 'react';

class FormCargo extends React.Component {
  render() {
    const { handleChange, alertCargo } = this.props;
    return (
      <fieldset>
        <legend>Dados profissionais:</legend>

        <label>Resumo do currículo:
          <textarea
            name="resumo"
            maxLength="1000"
            onChange={handleChange}
            required
          />
        </label>

        <label>Cargo:
          <textarea
            name="cargo"
            maxLength="40"
            onMouseEnter={alertCargo}
            onChange={handleChange}
            required
          />
        </label>

        <label>Descrição do cargo:
          <textarea
            name="descricao"
            maxLength="500"
            onChange={handleChange}
            required
          />
        </label>
      </fieldset>
    );
  }
}

export default FormCargo;
