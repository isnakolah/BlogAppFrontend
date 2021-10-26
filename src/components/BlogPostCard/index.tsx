import { useState } from "react";
import {
  Card,
  Avatar,
  Dialog,
  CardHeader,
  IconButton,
  Typography,
  CardContent,
} from "@mui/material";
import { red } from "@mui/material/colors";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import ShareIcon from "@mui/icons-material/Share";
import AuthorDetails from "./../AuthorDetails/index";

const BlogPostCard = () => {
  const [open, setOpen] = useState(false);

  const handleModalClose = () => {
    setOpen(false);
  };

  const handleModalOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Card
        sx={{
          padding: "0.2rem",
          borderRadius: "0",
          maxWidth: 700,
          minWidth: 300,
        }}>
        <CardHeader
          avatar={
            <IconButton
              aria-label="author"
              onClick={handleModalOpen}
              sx={{ p: "0" }}>
              <Avatar sx={{ bgcolor: red[500] }} aria-label="Kirnde Loki">
                K
              </Avatar>
            </IconButton>
          }
          action={
            <>
              <IconButton aria-label="share post">
                <ShareIcon />
              </IconButton>
              <IconButton aria-label="settings">
                <BookmarkAddIcon />
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
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ pt: "1rem" }}>
            Posted on September 14, 2016
          </Typography>
        </CardContent>
      </Card>
      <Dialog open={open} onClose={handleModalClose}>
        <AuthorDetails />
      </Dialog>
    </>
  );
};

export default BlogPostCard;
