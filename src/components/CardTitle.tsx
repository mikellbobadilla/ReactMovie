import { styled, Typography } from "@mui/material";

export const CardTitle = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  color: theme.palette.primary.main,
  fontWeight: '500',
  textWrap: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  textAlign: 'center'
}))