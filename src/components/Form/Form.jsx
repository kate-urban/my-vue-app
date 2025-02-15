import { TextField } from "@mui/material";
import { Box } from '@mui/material';
import { FormControlLabel } from "@mui/material";
import {Checkbox} from "@mui/material";


export default function Form() {
    return(
    <Box 
        component='form'
        sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            width: '300px',
        }}>
            <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Ваш email"
        />
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Ваше имя"
        
        />
            <FormControlLabel required control={<Checkbox />} label="Обязательно" />
     </Box>
    )
}
