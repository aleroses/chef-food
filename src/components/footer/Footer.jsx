import {
  Box,
  Grid,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import {
  Menu as MenuIcon,
  RestaurantMenu as RestaurantMenuIcon,
  Search as SearchIcon,
  ShoppingCart as ShoppingCartIcon,
  Place as PlaceIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
} from "@mui/icons-material";

const footerQuickLinks = [
  {
    display: "Terms & Conditions",
    url: "#",
  },
  {
    display: "Privacy Policy",
    url: "#",
  },
  {
    display: "Return & Refund",
    url: "#",
  },
  {
    display: "Payment Method",
    url: "#",
  },
];

const footerLinks = [
  {
    display: "About us",
    url: "#",
  },
  {
    display: "Menu",
    url: "#",
  },
  {
    display: "Recipes",
    url: "#",
  },
  {
    display: "Contact",
    url: "#",
  },
];

export const Footer = () => {
  return (
    <Box
      sx={{
        width: "82%",
        justifySelf: "center",
        // p: 2.2,
      }}
    >
      <Box
        sx={{
          mb: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            mb: 2,
          }}
        >
          <RestaurantMenuIcon
            sx={{
              // display: { xs: "none", md: "flex" },
              display: "flex",
              alignSelf: "center",
              mr: 1,
            }}
          />
          <Typography
            variant="h5"
            sx={{
              flexGrow: 1,
              color: "accent.main",
              fontWeight: 700,
              pl: {
                md: 1,
              },
            }}
          >
            Chef Food
          </Typography>
        </Box>

        <Typography
          variant="body1"
          sx={{
            fontSize: {
              xs: "0.8em",
              md: "1em",
            },
            // color: "secondary.main",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Reprehenderit itaque
          accusantium voluptates non, maiores quod omnis
          corrupti, sequi libero ratione quas autem amet
          cum vel voluptas necessitatibus doloribus,
          pariatur facilis.
        </Typography>
      </Box>

      <Grid container spacing={2}>
        {/* <Grid
          size={{
            xs: 6,
            md: 4,
          }}
        > */}
        <Grid size={{ xs: 6, sm: 4 }}>
          <Typography variant="span">
            Info Links
          </Typography>

          <List
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            {footerQuickLinks.map((item) => (
              <Link key={item.display} href={item.url}>
                <ListItem
                  key={item.display}
                  sx={{
                    p: 0,
                  }}
                >
                  <ListItemText
                    sx={{
                      // p: 0,
                      m: 0,
                    }}
                  >
                    <Typography
                      // variant="body2"
                      // component="span"
                      sx={{
                        fontSize: {
                          xs: "0.8em",
                          md: "1em",
                        },
                        color: "primary.contrast",
                      }}
                    >
                      {item.display}
                    </Typography>
                  </ListItemText>
                </ListItem>
              </Link>
            ))}
          </List>
        </Grid>
        <Grid size={{ xs: 6, sm: 4 }}>
          <Typography variant="span" color="initial">
            Quick Links
          </Typography>

          <List
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            {footerLinks.map((item) => (
              <Link key={item.display} href={item.url}>
                <ListItem
                  key={item.display}
                  sx={{
                    p: 0,
                  }}
                >
                  <ListItemText
                    sx={{
                      m: 0,
                    }}
                  >
                    <Typography
                      // variant="body2"
                      // component="span"
                      sx={{
                        fontSize: {
                          xs: "0.8em",
                          md: "1em",
                        },
                        color: "primary.contrast",
                      }}
                    >
                      {item.display}
                    </Typography>
                  </ListItemText>
                </ListItem>
              </Link>
            ))}
          </List>
        </Grid>
        <Grid size={{ xs: 6, sm: 4 }}>
          <Typography variant="subtitle2">
            Contact
          </Typography>

          <List
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <ListItem
              sx={{
                // display: "flex",
                p: 0,
              }}
            >
              <PlaceIcon
                sx={
                  {
                    // width: "fitContent",
                    // width: "100%",
                    // bgcolor: "blue",
                  }
                }
              />
              <ListItemText
                sx={{
                  display: "flex",
                  // flexDirection: "row",
                  // flexWrap: "wrap",
                  m: 0,
                  // bgcolor: "red",
                }}
              >
                <Typography
                  // variant="body2"
                  // component="span"
                  sx={{
                    fontSize: {
                      xs: "0.8em",
                      md: "1em",
                    },
                    color: "primary.contrast",
                  }}
                >
                  Sylhet, Bangladesh
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem
              sx={{
                p: 0,
              }}
            >
              <EmailIcon />
              <ListItemText
                sx={{
                  m: 0,
                }}
              >
                <Typography
                  // variant="body2"
                  // component="span"
                  sx={{
                    fontSize: {
                      xs: "0.8em",
                      md: "1em",
                    },
                    color: "primary.contrast",
                  }}
                >
                  example@mail.ec
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem
              sx={{
                p: 0,
              }}
            >
              <PhoneIcon />
              <ListItemText
                sx={{
                  m: 0,
                }}
              >
                <Typography
                  // variant="body2"
                  // component="span"
                  sx={{
                    fontSize: {
                      xs: "0.8em",
                      md: "1em",
                    },
                    color: "primary.contrast",
                  }}
                >
                  +593 0984233620
                </Typography>
              </ListItemText>
            </ListItem>
          </List>
        </Grid>
      </Grid>
      {/* </Grid> */}
    </Box>
  );
};
