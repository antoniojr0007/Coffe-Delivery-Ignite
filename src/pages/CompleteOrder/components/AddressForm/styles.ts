import styled from 'styled-components'

export const AddressFormContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 12rem 17.25rem 3.75rem;
  grid-gap: 0.75rem;
  row-gap: 1rem;
  grid-auto-flow: dense;

  .cep {
    grid-column: span 3;
    max-width: 12rem;
  }
  .streat {
    grid-column: span 3;
  }
  .number {
    grid-column: span 1;
    max-width: 12rem;
  }
  .complement {
    grid-column: span 2;
  }

  .district {
    grid-column: span 1;
    max-width: 12rem;
  }
  .city {
    grid-column: span 1;
    max-width: 17.25rem;
  }
  .state {
    grid-column: span 1;
    max-width: 3.75rem;
  }
`
