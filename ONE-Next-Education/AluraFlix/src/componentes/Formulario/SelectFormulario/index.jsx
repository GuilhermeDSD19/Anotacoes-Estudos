import { useState } from "react"
import styled from "styled-components"

const SelectFormularioEstilizado = styled.fieldset`
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

const SelectEstilizado = styled.select`
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
  &:invalid {
    color: var(--cinza-claro);
  }
  &.invalido {
    border: 3px solid var(--vermelho);
  }
  >option {
    color: var(--preto);
  }
`

const SelectFormulario = ({
  cor,
  label,
  id,
  categorias,
  value,
  lidarComMudança
}) => {
  const [isValido, setIsValido] = useState(true)

  return (
    <SelectFormularioEstilizado>
      <LabelEstilizado
        className={isValido ? "" : "invalido"}
        htmlFor={id}
      >
        {label}
      </LabelEstilizado>
      <SelectEstilizado
        className={isValido ? "" : "invalido"}
        $cor={cor}
        id={id}
        value={value}
        required
        onChange={(evento) => lidarComMudança(evento.target.value)}
        onBlur={(evento) => setIsValido(evento.target.validity.valid)}
      >
        <option value="" hidden> Escolha a tecnologia</option>
        {categorias.map((categoria) => <option key={categoria.tecnologia}>{categoria.tecnologia}</option>)}
      </SelectEstilizado>
    </SelectFormularioEstilizado>
  )
}

export default SelectFormulario