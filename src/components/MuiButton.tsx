import { Stack, Button } from "@mui/material"

export const MuiButton = () => {
    return (
        <Stack spacing={4}>
            <Stack spacing={2} direction='row'>
                <Button variant='text'>Text</Button>
                <Button variant='contained'>Contained</Button>
                <Button variant='outlined'>outlined</Button>
            </Stack>

            <Stack spacing={2} direction = 'row'>
                <Button variant='contained' color='primary'>Primary</Button>
                <Button variant='contained' color='secondary'>secondary</Button>
                <Button variant='contained' color='error'>error</Button>
                <Button variant='contained' color='info'>info</Button>
                <Button variant='contained' color='warning'>warning</Button>
                <Button variant='contained' color='success'>success</Button>
            </Stack>

            <Stack display='block' spacing={2} direction='row'>
                <Button variant='contained' size='small' >Small</Button>
                <Button variant='contained' size='medium'>Medium</Button>
                <Button variant='contained' size='large' disableElevation>Large</Button>
                <Button variant='contained' size='large'>Large</Button>
            </Stack>
            {/* <Stack spacing={2} direction='row'> */}
                {/* <Button variant='contained' startIcon={<SendIcon/>}>Send</Button> */}
            {/* </Stack> */}
        </Stack>
    )
}