import React from 'react';
import { Stack, Typography } from '@mui/material';

function ImageUpload({image, handleImageChange}) {

  return (
    <Stack sx={{justifyContent: 'center', alignItems: 'center'}} direction="column">
			<Typography variant='h6'>Upload an image</Typography>
      <input name='img' type="file" accept="image/*" onChange={handleImageChange} />
      {image && (
        <div>
          <h3>Preview:</h3>
          <img src={URL.createObjectURL(image)} alt="Preview" style={{ maxWidth: '100%', maxHeight: '200px' }} />
        </div>
      )}
    </Stack>
  );
}

export default ImageUpload;
