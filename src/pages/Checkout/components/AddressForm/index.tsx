import { useFormContext } from 'react-hook-form'
import { Input } from '../../../../components/Input'
import { AddressFormContainer } from './styles'

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string
    }
  }
}

export function AddressForm() {
  /* const [cep, setCep] = useState('')
  const [address, setAddress] = useState({})

  async function handleSearch() {
    try {
      const response = await api.get(`${cep}/json`)
      setCep(response.data)
    } catch (error) {
      alert('Ops erro ao buscar!')
      setCep('')
    }
  }

  useEffect(() => {}, []) */
  const { register, formState } = useFormContext()
  const { errors } = formState as unknown as ErrorsType
  return (
    <AddressFormContainer>
      <Input
        placeholder="Cep"
        type="number"
        className="cep"
        {...register('cep')}
        error={errors.cep?.message}
      />

      <Input
        placeholder="Rua"
        className="streat"
        {...register('streat')}
        error={errors.streat?.message}
      />
      <Input
        placeholder="Numero"
        type="number"
        className="number"
        {...register('number')}
        error={errors.number?.message}
      />
      <Input
        placeholder="Complemento"
        className="complement"
        {...register('complement')}
        error={errors.complement?.message}
        rightText="Opcional"
      />
      <Input
        placeholder="Bairro"
        className="district"
        {...register('district')}
        error={errors.district?.message}
      />
      <Input
        placeholder="Cidade"
        className="city"
        {...register('city')}
        error={errors.city?.message}
      />
      <Input
        placeholder="UF"
        className="state"
        {...register('state')}
        error={errors.state?.message}
      />
    </AddressFormContainer>
  )
}
