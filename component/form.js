import React from 'react';
import { TextField, Radio, RadioGroup,FormControl,FormControlLabel, FormLabel,
Checkbox, Select, MenuItem, InputLabel, Button,} from '@mui/material';

export default function CompleteForm() {
  const [values, setValues] = React.useState({
    name: '',
    email: '',
    password: '',
    gender: '',
    hobbies: [],
    country: '',
  });

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleCheckboxChange = (event) => {
    const { hobbies } = values;
    if (event.target.checked) {
      setValues({ ...values, hobbies: [...hobbies, event.target.name] });
    } else {
      setValues({ ...values, hobbies: hobbies.filter((h) => h !== event.target.name) });
    }
  };

  return (
    <form style={{width: 300, display: 'flex', flexDirection: 'column', margin: 'auto'}}>
      <TextField
        label="Name"
        name="name"
        // className={classes.textField}
        value={values.name}
        onChange={handleChange}
        size='small'
        margin="normal"
      />
      <TextField
        label="Email"
        name="email"
        size='small'
        // className={classes.textField}
        value={values.email}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        label="Password"
        name="password"
        type="password"
        size='small'
        // className={classes.textField}
        value={values.password}
        onChange={handleChange}
        margin="normal"
      />
      <FormControl component="fieldset">
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup
          aria-label="gender"
          name="gender"
          value={values.gender}
          onChange={handleChange}
        >
          <FormControlLabel value="female"
control={<Radio />} label="Female" />
<FormControlLabel value="male" control={<Radio />} label="Male" />
<FormControlLabel value="other" control={<Radio />} label="Other" />
</RadioGroup>
</FormControl>
<FormControl component="fieldset">
<FormLabel component="legend">Hobbies</FormLabel>
<div>
<FormControlLabel
control={
<Checkbox
checked={values.hobbies.includes('reading')}
onChange={handleCheckboxChange}
name="reading"
/>
}
label="Reading"
/>
<FormControlLabel
control={
<Checkbox
checked={values.hobbies.includes('traveling')}
onChange={handleCheckboxChange}
name="traveling"
/>
}
label="Traveling"
/>
<FormControlLabel
control={
<Checkbox
checked={values.hobbies.includes('sports')}
onChange={handleCheckboxChange}
name="sports"
/>
}
label="Sports"
/>
</div>
</FormControl>
<FormControl >
{/* <InputLabel id="country-select-label" >Country</InputLabel> */}
<Select
size='small'
       labelId="country-select-label"
       id="country-select"
       value={values.country}
       onChange={handleChange}
       name="country"
     >
<MenuItem value="">
<em>None</em>
</MenuItem>
<MenuItem value="usa">USA</MenuItem>
<MenuItem value="uk">UK</MenuItem>
<MenuItem value="india">India</MenuItem>
</Select>
</FormControl>
<Button variant="contained" color="primary" sx={{marginTop: '5px'}}>
Submit
</Button>
</form>
);
}