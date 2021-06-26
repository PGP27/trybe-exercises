import React from 'react';
import FormPessoal from './FormPessoal';
import FormCargo from './FormCargo';
import FormEnviado from './FormEnviado';

class Form extends React.Component {
  render() {
    const { handleChange, state, verificaCidade, alertCargo, enviar } = this.props;
    return (
      <form>
        <FormPessoal handleChange={handleChange} state={state} verificaCidade={verificaCidade} />
        <FormCargo handleChange={handleChange} alertCargo={alertCargo} />
        <button onClick={enviar}>Enviar</button>
        <FormEnviado state={state} />
      </form>
    );
  }
}

export default Form;
