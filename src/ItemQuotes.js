import React from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));
const ItemQuotes= ({text,author}) => {
  return (
    <div>
        <Item>{text}</Item><pre>Author: {author}</pre>
    </div>
  )
}

export default  ItemQuotes
