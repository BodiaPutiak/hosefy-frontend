import { Typography, Stack, Box, TextField, Button } from "@mui/material";
import { Autocomplete } from '@react-google-maps/api'
import { useState } from "react";
import ImageUpload from "./ImageUpload";
import { postData } from "../utils/utils";

export default function CreateRentApp() {
  const [formData, setFormData] = useState({
    address: '',
    name: '',
    description: '',
    img: null
  });
  const handleSubmit = async (event) => {
    if (!formData.address || !formData.name || !formData.description || !formData.img) {
      alert('Please fill in all fields and select an image.');
      return;
    }
    console.log(formData.img)
    try {
      const response = await postData('/new-marker', formData);
      console.log('Response:', response);
      window.location.reload()
    } catch (error) {
      console.log('Error:', error);
    }
  };
  
  function onPlaceChanged() {
    if (formData.address != '') {
      const place = formData.address.getPlace();
      const formattedAddress = place.formatted_address;
      setFormData({...formData, address: formattedAddress})
    } else {
      alert("Please enter text");
    }
  }

  const onLoad = (autocomplete) => {
    setFormData({...formData, address: autocomplete})
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (event) => {
    const imgFile = event.target.files[0];
    setFormData({ ...formData, img: imgFile });
  };

  return (
    <Stack sx={{justifyContent: 'center', alignItems: 'center'}} direction="column" flexGrow={1} gap={2}>
			<Typography variant="h5">Add your rental property to the map</Typography>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25rem' },
        }}
        noValidate
        autoComplete="off"
      >
        <Stack sx={{justifyContent: 'center', alignItems: 'center'}} direction="column" flexGrow={1} gap={2}>
          <Autocomplete onPlaceChanged={onPlaceChanged} onLoad={onLoad}>
            <TextField name='address' id="outlined-basic" label="Enter your address" variant="outlined" />
          </Autocomplete>
          <TextField name='name' onChange={handleChange} id="outlined-basic" label="Header" variant="outlined" />
          <TextField
            name='description'
            multiline
            rows={4} 
            variant="outlined" 
            fullWidth 
            label="Description"
            placeholder="Type your text here..."
            onChange={handleChange}
          />          
          <ImageUpload handleImageChange={handleImageChange}/>
        </Stack>

      </Box>
      <Button onClick={handleSubmit} variant="contained" sx={{width: '100px'}}>ADD</Button>
    </Stack>
  );
}
