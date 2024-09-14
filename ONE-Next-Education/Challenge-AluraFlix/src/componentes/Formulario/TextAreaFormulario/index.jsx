import { useState } from "react"
import styled from "styled-components"

const TextAreaFormularioEstilizado = styled.fieldset`
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

const TextAreaEstilizado = styled.textarea`
  width: 100%;
  height: 112px;
  font-size: 1.25rem;
  background-color: transparent;
  font-weight: 600;
  color: var(--branco);
  border: 3px solid ${(props) => props.$cor};
  border-radius: 15px;
  /* top | right | bottom | left */
  padding: 25px 13px;
  outline: none;
  resize: none;
  &.invalido {
    border: 3px solid var(--vermelho);
  }
`

const TextAreaFormulario = ({
  cor,
  label,
  id,
  value,
  placeholder,
  lidarComMudança
}) => {
  const [isValido, setIsValido] = useState(true)

  return (
    <TextAreaFormularioEstilizado>
      <LabelEstilizado
        className={isValido ? "" : "invalido"}
        htmlFor={id}
      >
        {label}
      </LabelEstilizado>
      <TextAreaEstilizado
        className={isValido ? "" : "invalido"}
        $cor={cor}
        id={id}
        placeholder={placeholder}
        value={value}
        required
        onChange={(evento) => lidarComMudança(evento.target.value)}
        onBlur={(evento) => setIsValido(evento.target.validity.valid)}
      />
    </TextAreaFormularioEstilizado>
  )
}

export default TextAreaFormulario