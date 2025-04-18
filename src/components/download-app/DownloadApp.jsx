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
        mb: 4,
      }}
    >
      <Card
        elevation={0}
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
          // gap: 2,
          pb: 2.2,
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
              xs: "82%",
              sm: "50%",
            },
            display: "flex",
            flexDirection: "column",
            // justifyContent: "center",
            alignSelf: "center",
            pr: {
              sm: 2,
              md: 0,
            },
            py: {
              sm: 2,
              md: 0,
            },
            gap: 2,
          }}
        >
          <CardContent
            // elevation={0}
            // boxShadow={0}
            sx={{
              p: 0,
            }}
          >
            <Typography
              component="span"
              sx={{
                color: "secondary.main",
                fontWeight: "500",
              }}
            >
              Download our app
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              // variant="body1"
              sx={{
                color: "primary.main",
                fontWeight: "600",
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
              // p: 0,

              pr: 0,
              pl: 0,
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

                  textDecoration: "none",
                }}
              >
                <AppleIcon
                  fontSize="small"
                  sx={{
                    display: "flex",
                    alignSelf: "center",
                    // mr: 1,
                    color: "primary.contrast",
                  }}
                />
                <Typography
                  component="span"
                  sx={{
                    height: "",
                    // display: "flex",
                    // alignSelf: "center",
                    fontSize: {
                      xs: "0.8em",
                      sm: "1em",
                    },
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
                  // fontSize: {
                  //   xs: "0.8em",
                  //   sm: "1em",
                  // },
                  textDecoration: "none",
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
                    fontSize: {
                      xs: "0.8em",
                      sm: "1em",
                    },
                    textTransform: "capitalize",
                    lineHeight: 2,
                    color: "primary.main",
                    fontWeight: "500",
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
