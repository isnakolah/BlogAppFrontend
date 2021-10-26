import { Card, Avatar, Rating, CardHeader, CardActions } from "@mui/material";
import { red } from "@mui/material/colors";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

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
          <Rating
            readOnly
            name="stars"
            precision={0.5}
            value={2.5}
            emptyIcon={<StarRoundedIcon style={{ opacity: 0.75 }} />}
          />
        </CardActions>
      </Card>
    </>
  );
};

export default AuthorDetails;
