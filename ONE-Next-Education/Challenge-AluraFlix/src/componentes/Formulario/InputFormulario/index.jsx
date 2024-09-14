import { useState } from "react"
import styled from "styled-components"

const InputFormularioEstilizado = styled.fieldset`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 15px;
  width: 90%;
  background-color: transparent;
`

const LabelEstilizado = styled.label`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--branco);
  &.invalido {
    color: var(--vermelho);
  }
`

const InputEstilizado = styled.input`
  width: 100%;
  height: 62px;
  font-size: 1.25rem;
  background-color: transparent;
  font-weight: 600;
  color: var(--branco);
  border: 3px solid ${(props) => props.$cor};
  border-radius: 15px;
  padding-left: 10px;
  outline: none;
  &::placeholder {
    color: #a5a5a5;
  }
  &.invalido {
    border: 3px solid var(--vermelho);
  }
`

const InputFormulario = ({
  cor,
  label,
  id,
  type,
  value,
  placeholder,
  lidarComMudança
}) => {
  const [isValido, setIsValido] = useState(true)

  return (
    <InputFormularioEstilizado>
      <LabelEstilizado
        className={isValido ? "" : "invalido"}
        htmlFor={id}
      >
        {label}
      </LabelEstilizado>
      <InputEstilizado
        className={isValido ? "" : "invalido"}
        $cor={cor}
        id={id}
        placeholder={placeholder}
        type={type}
        value={value}
        required
        onChange={(evento) => lidarComMudança(evento.target.value)}
        onBlur={(evento) => setIsValido(evento.target.validity.valid)}
      />
    </InputFormularioEstilizado>
  )
}

export default InputFormulario