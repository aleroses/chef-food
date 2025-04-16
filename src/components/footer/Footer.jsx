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
        width: "100%",
        p: 2,
      }}
    >
      <Box>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <IconButton
            color="inherit"
            size="large"
            aria-label=""
            onClick={() => setOpen(true)}
            sx={{
              display: { xs: "flex", md: "none" },
            }}
          >
            <MenuIcon />
          </IconButton>
          <RestaurantMenuIcon
            sx={{
              display: { xs: "none", md: "flex" },
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

        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Reprehenderit itaque
          accusantium voluptates non, maiores quod omnis
          corrupti, sequi libero ratione quas autem amet
          cum vel voluptas necessitatibus doloribus,
          pariatur facilis.
        </Typography>
      </Box>

      <Grid container spacing={2}>
        <Grid>
          <Box>
            <Typography variant="span" color="initial">
              Info Links
            </Typography>

            <List
            // dense={dense}
            >
              {footerQuickLinks.map((item) => (
                <Link key={item.display} href={item.url}>
                  <ListItem key={item.display}>
                    <ListItemText
                      primary={item.display}
                      // secondary={true ? "Secondary text" : null}
                    />
                  </ListItem>
                </Link>
              ))}
            </List>
          </Box>
          <Box>
            <Typography variant="span" color="initial">
              Quick Links
            </Typography>

            <List
            // dense={dense}
            >
              {footerLinks.map((item) => (
                <Link key={item.display} href={item.url}>
                  <ListItem key={item.display}>
                    <ListItemText
                      primary={item.display}
                      // secondary={true ? "Secondary text" : null}
                    />
                  </ListItem>
                </Link>
              ))}
            </List>
          </Box>
          <Box>
            <Typography variant="subtitle2">
              Contact
            </Typography>

            <List>
              <ListItem>
                <ListItemText>
                  <PlaceIcon />
                  Sylhet, Bangladesh
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <EmailIcon />
                  example@mail.ec
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <PhoneIcon />
                  +593 0984233620
                </ListItemText>
              </ListItem>
            </List>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
