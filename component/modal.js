import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
    Typography, FormControl, FormLabel, RadioGroup,
    FormControlLabel, Radio, Checkbox
} from '@mui/material';

const ResponsiveFormModal = () => {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [gender, setGender] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}\nGender: ${gender}\nTerms: ${termsAccepted}`);
        handleClose();
        setName('');
        setEmail('');
        setMessage('');
        setGender('');
        setTermsAccepted(false);
    };
    

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    return (
        <>
            <Button variant="contained" color="primary" sx={{ margin: '15px' }} onClick={handleOpen}>
                Register
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="form-modal-title"
                aria-describedby="form-modal-description"
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                        minWidth: isMobile ? '95vw' : '60vw',
                        maxWidth: '90vw',
                        borderRadius: '6px',
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <form onSubmit={handleSubmit}>
                        <Typography variant='h5' sx={{ width: '100%', textAlign: 'center' }}>Registeration</Typography>
                        <TextField
                            label="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            margin="normal"
                            required
                            fullWidth
                            size='small'
                        />
                        <TextField
                            label="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            margin="normal"
                            type="email"
                            required
                            fullWidth
                            size='small'
                        />
                        <TextField
                            label="Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            margin="normal"
                            multiline
                            rows={2}
                            fullWidth
                            size='small'
                        />
                        <FormControl component="fieldset" margin="normal" required>
                            <FormLabel component="legend">Gender</FormLabel>
                            <RadioGroup
                                aria-label="gender"
                                name="gender"
                                value={gender}
                                onChange={handleGenderChange}
                                sx={{ display: 'flex', flexDirection: 'row' }}
                            >
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                            </RadioGroup>
                        </FormControl>
                        <br />
                        <FormControlLabel
                            control={<Checkbox checked={termsAccepted} onChange={(e) => setTermsAccepted(e.target.checked)} />}
                            label="I accept the terms and conditions"
                        />
                        <br />
                        <Button variant="contained" sx={{ marginTop: '15px', width: '150px', marginLeft: '5px' }} color="primary" type="submit">
                            Submit
                        </Button>
                    </form>
                </Box>
            </Modal>
        </>
    );
};

export default ResponsiveFormModal;
