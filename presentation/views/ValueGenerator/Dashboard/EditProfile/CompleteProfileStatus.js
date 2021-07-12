import { Box, Typography } from '@material-ui/core';

const CompleteProfileStatus = () => (
  <Box>
    <Typography align="right" gutterBottom variant="h6">
      45%
    </Typography>
    <Typography align="right" variant="subtitle2">
      Your Profile
    </Typography>
    <Typography align="right" variant="body2">
      You cant place bid without 100% <br /> complete profile
    </Typography>
  </Box>
);

export default CompleteProfileStatus
