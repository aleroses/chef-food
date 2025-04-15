import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import { ShoppingCart as ShoppingCartIcon } from "@mui/icons-material";

export const ProductCard = ({ product }) => {
  return (
    <Grid
      size={{
        xs: 6,
        sm: 4,
        md: 3,
      }}
    >
      <Card
        sx={{
          // width: "100%",
          // height: "100%",
          // display: "flex",
          // flexDirection: "column",
          borderRadius: 3,
          boxShadow: 3,
          transition: "transform 0.5s",
          "&:hover": {
            transform: "scale(1.03)",
            // boxShadow: 6,
            boxShadow: "0 1px 9px #ffe92e",
          },

          bgcolor: "transparent.white.light",
        }}
      >
        <CardMedia
          // height="100%"
          component="img"
          image={product.imgUrl}
          alt={product.title}
          loading="lazy"
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
                xs: "1.2em",
                sm: "1.5em",
              },
            }}
          />
          <Typography
            // variant="h6"
            component="h5"
            sx={{
              color: "accent.main",
              fontSize: {
                xs: "0.8em",
                sm: "1em",
              },
              fontWeight: "bold",
              // color: theme.palette.text.primary,
            }}
          >
            {product.title}
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
                  xs: "0.8em",
                  sm: "1em",
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
                {` $${product.price}`}
              </Typography>
            </Typography>
            <ShoppingCartIcon />
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};
