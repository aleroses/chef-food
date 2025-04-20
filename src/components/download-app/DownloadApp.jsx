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
        width: {
          sm: "100%",
          md: "82%",
        },
        display: "flex",
        justifySelf: "center",
        justifyContent: "center",
        // justifyItems: "center",
        // alignSelf: "center",
        bgcolor: "accent.main",
        borderRadius: { xs: "1rem", sm: "1.5rem" },
        mb: 8,
      }}
    >
      <Card
        elevation={0}
        sx={{
          width: "100%",
          maxWidth: "900px",
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "row",
          },
          bgcolor: "accent.main",
          // gap: 2,
          borderRadius: { xs: "1rem", sm: "1.5rem" },
          pb: {
            xs: 2.2,
          },
          py: {
            sm: 2,
            // lg: 0,
          },
          mr: {
            md: 2,
          },
          columnGap: {
            lg: 8,
          },
        }}
      >
        <CardMedia
          component="img"
          image={appImg}
          sx={{
            width: {
              sm: "50%",
              // lg: "80%",
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
