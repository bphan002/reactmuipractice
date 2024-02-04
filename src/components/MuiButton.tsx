import { Stack, Button } from "@mui/material"

export const MuiButton = () => {
    return (
        <Stack>
            <Stack spacing={2} direction='row'>
                <Button variant='text'>Text</Button>
                <Button variant='contained'>Contained</Button>
                <Button variant='outlined'>outlined</Button>
            </Stack>
        </Stack>
    )
}