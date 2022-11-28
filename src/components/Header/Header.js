import React from 'react'
import { styled } from '@mui/material/styles';

const Img = styled('img')(({ theme }) => ({
  maxWidth: '100%',
  maxHeight: '100%'
}));
export default function Header() {
  return (
      <Img src={require('./image.png')} alt="Image" />
  )
}
