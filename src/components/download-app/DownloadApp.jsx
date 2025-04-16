import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Link,
  Box,
  Button,
} from "@mui/material";
import {
  Apple as AppleIcon,
  Google as GoogleIcon,
} from "@mui/icons-material";

import appImg from "../../assets/images/app.png";

export const DownloadApp = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        // justifySelf: "center",
        bgcolor: "accent.main",
      }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: "800px",
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "row",
          },
          // justifyItems: "center",
          bgcolor: "accent.main",
        }}
      >
        <CardMedia
          component="img"
          image={appImg}
          sx={{
            width: {
              sm: "50%",
            },

            maxWidth: "400px",
            display: "flex",
            alignSelf: "center",
          }}
        />
        <Box
          sx={{
            width: {
              sm: "50%",
            },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <CardContent>
            <Typography
              variant="h4"
              sx={{
                color: "primary.main",
                fontWeight: "700",
              }}
            >
              Download our app
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "primary.main",
                fontWeight: "500",
              }}
            >
              Never Feel Hungry! Download Our Mobile App
              Order Delicious Food
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: {
                  xs: "0.8em",
                  sm: "1em",
                },
                color: "secondary.main",
              }}
            >
              Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Placeat eos itaque sequi
              ipsa ut hic corrupti quisquam illo, est
              tempora, dolor, repudiandae adipisci?
              Nostrum eveniet dignissimos sit ad porro
              itaque?
            </Typography>
          </CardContent>
          <CardActions
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              // alignSelf: "center"
              pr: 2,
              pl: 2,
            }}
          >
            <Button
              variant="contained"
              sx={
                {
                  // display: "flex",
                  // justifySelf: "center",
                  // p: 0.5,
                }
              }
            >
              <Link
                href=""
                sx={{
                  // height: "1.6rem",
                  display: "flex",
                  // alignItems: "center",
                  fontSize: {
                    xs: "0.8em",
                    sm: "1em",
                    textDecoration: "none",
                    // p: 0,
                    // m: 0,
                  },
                }}
              >
                <AppleIcon
                  fontSize="small"
                  sx={{
                    display: "flex",
                    alignSelf: "center",
                    mr: 1,
                    color: "primary.contrast",
                  }}
                />
                <Typography
                  component="span"
                  sx={{
                    height: "",
                    // display: "flex",
                    // alignSelf: "center",
                    p: 0,
                    m: 0,
                    textTransform: "capitalize",
                    lineHeight: 2,
                    color: "primary.contrast",
                  }}
                >
                  Apple Store
                </Typography>
              </Link>
            </Button>
            <Button variant="outlined">
              <Link
                href=""
                sx={{
                  // height: "1.6rem",
                  display: "flex",
                  // alignItems: "center",
                  fontSize: {
                    xs: "0.8em",
                    sm: "1em",
                    textDecoration: "none",
                    // p: 0,
                    // m: 0,
                  },
                }}
              >
                <GoogleIcon
                  fontSize="small"
                  sx={{
                    display: "flex",
                    alignSelf: "center",
                    mr: 1,
                  }}
                />
                <Typography
                  component="span"
                  sx={{
                    // display: "flex",
                    // alignSelf: "center",
                    p: 0,
                    m: 0,
                    textTransform: "capitalize",
                    lineHeight: 2,
                    color: "primary.main",
                  }}
                >
                  PlayStore
                </Typography>
              </Link>
            </Button>
          </CardActions>
        </Box>
      </Card>
    </Box>
  );
};
