import {
  Box,
  Card,
  CardContent,
  Container,
  Typography,
  CardMedia,
  Badge,
  Grid,
  Chip,
  Rating,
} from "@mui/material";
import {
  Star as StarIcon,
  ShoppingCart as ShoppingCartIcon,
} from "@mui/icons-material";
import { popularMenuFood } from "../../assets/fake-data/products";

export const PopularMenu = () => {
  // console.log(...popularMenuFood);

  const allProducts = [
    ...popularMenuFood.map((item) => ({
      ...item,
      category: "Popular Menu",
    })),
  ];

  console.log(allProducts);

  return (
    <Box
      component="article"
      sx={{
        width: "82%",
        justifySelf: "center",
        mt: {
          xs: 10,
          md: 15,
        },
        mb: {
          xs: 10,
          md: 15,
        },
        // px: true ? 2 : 6,
      }}
    >
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        sx={{
          mb: 4,
          textAlign: "center",
          fontWeight: "bold",
          fontSize: {
            xs: "1.6rem",
            sm: "2.1rem",
          },
        }}
      >
        Popular Food Menu
      </Typography>

      <Grid container spacing={2}>
        {popularMenuFood.map((item) => (
          <Grid
            key={item.id}
            size={{
              xs: 6,
              sm: 4,
              md: 3,
            }}
          >
            <Card
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                borderRadius: 3,
                boxShadow: 3,
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "scale(1.03)",
                  boxShadow: 6,
                },

                bgcolor: "transparent.white.light",
              }}
            >
              <CardMedia
                // height="100%"
                component="img"
                image={item.imgUrl}
                alt={item.title}
                sx={{
                  width: "100%",
                  // height: isMobile ? 160 : 200,
                  objectFit: "cover",
                }}
              />

              <CardContent
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  // flexGrow: 1,
                  // justifyContent: "center",
                  alignItems: "center",
                  p: 1.5,
                  // m: 0,
                  gap: 1,
                }}
              >
                <Rating
                  value={5}
                  // readOnly
                  sx={{
                    // mb: 1,
                    fontSize: {
                      xs: "1.2rem",
                      sm: "1.5rem",
                    },
                  }}
                />
                <Typography
                  // variant="h6"
                  component="h5"
                  sx={{
                    color: "accent.main",
                    fontSize: {
                      xs: "0.8rem",
                      sm: "1rem",
                    },
                    fontWeight: "bold",
                    // color: theme.palette.text.primary,
                  }}
                >
                  {item.title}
                </Typography>

                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    component="span"
                    sx={{
                      fontSize: {
                        xs: "0.8rem",
                        sm: "1rem",
                      },
                    }}
                  >
                    Price:
                    <Typography
                      variant="body1"
                      component="span"
                      sx={{
                        fontSize: {
                          xs: "0.8rem",
                          sm: "1rem",
                        },
                        color: "accent.main",
                      }}
                    >
                      {` $${item.price}`}
                    </Typography>
                  </Typography>
                  {/* <Chip
                    label={`$${item.price}`}
                    color="primary"
                  /> */}
                  <ShoppingCartIcon />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

{
  /* <Container>
      <Typography variant="h3" color="initial">
        Popular Food Menu
      </Typography>
      <Box>
        {popularMenuFood.map((item) => (
          <Card key={item.title}>
            <CardMedia
              title=""
              component="img"
              image={item.imgUrl}
            />
            <CardContent>
              <Typography variant="h6" color="initial">
                {item.title}
              </Typography>
              <StarIcon />
              <Typography variant="h6" color="initial">
                Price: ${item.price}
              </Typography>
              <Badge
                // badgeContent={4}
                sx={{
                  ml: 2,
                  "& .MuiBadge-badge": {
                    right: -3,
                    top: 3,
                    border: `1px solid`,
                    padding: "0 4px",
                    color: "primary.main",
                    bgcolor: "accent.light",
                    fontWeight: "600",
                  },
                }}
              >
                <ShoppingCartIcon />
              </Badge>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container> */
}
