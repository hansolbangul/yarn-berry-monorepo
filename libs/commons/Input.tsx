import * as React from 'react';
import styled from '@emotion/styled';

interface Props extends React.ComponentProps<'input'> {}

// const Input = ({ ...props }: Props) => {
//   return <input {...props} />
// }

const Input = styled.input`
  padding: 10px 20px;
`;

export default Input;
