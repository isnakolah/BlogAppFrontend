import { Box, Card, Avatar, CardHeader, CardActions } from "@mui/material";
import { red } from "@mui/material/colors";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import StarHalfRoundedIcon from "@mui/icons-material/StarHalfRounded";

const AuthorDetails = () => {
  return (
    <>
      <Card variant="outlined">
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="author name">
              K
            </Avatar>
          }
          title="Kirnde Loki"
          subheader="Writer since September 14, 2016"
        />
        <CardActions sx={{ justifyContent: "center" }}>
          <Box>
            <StarRateRoundedIcon />
            <StarRateRoundedIcon />
            <StarRateRoundedIcon />
            <StarHalfRoundedIcon />
            <StarOutlineRoundedIcon />
          </Box>
        </CardActions>
      </Card>
    </>
  );
};

export default AuthorDetails;
