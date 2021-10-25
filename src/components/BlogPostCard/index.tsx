import {
  Card,
  Avatar,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import ShareIcon from "@mui/icons-material/Share";

const BlogPostCard = () => {
  return (
    <Card sx={{ padding: "0.2rem" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="Kirnde Loki">
            K
          </Avatar>
        }
        action={
          <>
            <IconButton aria-label="settings">
              <BookmarkAddIcon />
            </IconButton>
            <IconButton aria-label="share post">
              <ShareIcon />
            </IconButton>
          </>
        }
        title="Shrimp and Chorizo Paella"
        subheader="by Kirnde Loki"
      />
      <CardContent sx={{ pt: "0", pb: "0" }}>
        <Typography variant="body1" gutterBottom>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat et
          sequi rerum, architecto maiores excepturi. Numquam veniam repellat
          rerum blanditiis obcaecati officia, saepe delectus, reiciendis
          accusantium perferendis consequatur recusandae iusto.
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ pt: "1rem" }}>
          Posted on September 14, 2016
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BlogPostCard;
