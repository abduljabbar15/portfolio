import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './style.css'
import commentImg from './bubble.png'
import TextField from '@mui/material/TextField';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
const ContactWithMe = () => {

    const [state, handleSubmit] = useForm("mbjwrkvj");
    if (state.succeeded) {
        return <p>Thanks for contact!</p>;
    }
    return (
        <Container sx={{ p: 6,}} >
            <Box>
                <Typography py={5} variant='h4'>Contact With me</Typography>
            </Box>
            <Grid justifyContent={'center'} alignContent={'center'} alignItems={'stretch'} sx={{ /* bgcolor: '#fff',  */p: 5,  border: '1px solid  #25253b ', borderRadius: 3,  }} container>
               <Grid xs={4} item>
                    <img width={'100%'} src={commentImg} alt="" />
               </Grid>
                <Grid xs={12} sm={8} item sx={{ p: 2, textShadow:'0px 0 #25253b;'}} >
                    <form id='fom' onSubmit={handleSubmit}>
                        <TextField
                            required
                            fullWidth
                            id="name"

                            type="name"
                            label='Enter Your Name'
                            name="name"
                        />
                        <ValidationError
                            prefix="Name"
                            field="name"
                            errors={state.errors}
                        />

                        <TextField
                            sx={{ my: 3 }}

                            fullWidth
                            required
                            id="email"
                            type="email"
                            label='Enter Your Email'
                            name="email"
                        />
                        <ValidationError

                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                        <br />

                        <TextField
                            fullWidth
                            required
                            multiline
                            rows={4}
                            id="message"
                            name="message"
                            label="What's Your Message"
                        />
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />

                        <Button
                            endIcon={<SendIcon/>}
                            type="submit"
                            disabled={state.submitting}
                            variant="contained"
                            color='secondary'
                            size='large'
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Submit
                        </Button>
                    </form>
                </Grid>
           </Grid>
        </Container>
    );
};

export default ContactWithMe;