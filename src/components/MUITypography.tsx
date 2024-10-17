import React from 'react'
import { Typography } from '@mui/material'

export const MUITypography = () => {
  return (
    <div>
        <Typography variant='h1'>H1 heading</Typography>
        <Typography variant='h2'>H2 heading</Typography>
        <Typography variant='h3'>H3 heading</Typography>
        <Typography variant='h4' component="h1" gutterBottom>H4 heading</Typography>
        <Typography variant='h5'>H5 heading</Typography>
        <Typography variant='h6'>H6 heading</Typography>
        <Typography variant='subtitle1'>subtitle1</Typography>
        <Typography variant='subtitle2'>subtitle2</Typography>
        <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, impedit nam quod adipisci aliquid nihil quam fugiat, eum temporibus culpa error dolores quos, modi amet ipsum reprehenderit. Voluptas, modi sed?</Typography>
        <Typography variant='body2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis perferendis quae obcaecati reiciendis aliquid excepturi sapiente quibusdam labore enim perspiciatis amet mollitia culpa suscipit eos, modi ut minus, sint nam!</Typography>
    </div>
  )
}
