import { Card, Avatar, Rating, CardHeader, CardActions } from "@mui/material";
import { red } from "@mui/material/colors";

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
          <Rating name="read-only" value={3} readOnly />
        </CardActions>
      </Card>
    </>
  );
};

export default AuthorDetails;
