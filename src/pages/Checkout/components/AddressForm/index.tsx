import Input from '../../../../components/Input'
import { AddressFormContainer } from './styles'

export function AddressForm() {
  return (
    <AddressFormContainer>
      <Input placeholder="Cep" type="number" className="cep" />
      <Input placeholder="Rua" className="streat" />
      <Input placeholder="Numero" type="number" className="number" />
      <Input placeholder="Complemento" className="complement" />
      <Input placeholder="Bairro" className="district" />
      <Input placeholder="Cidade" className="city" />
      <Input placeholder="UF" className="state" />
    </AddressFormContainer>
  )
}
