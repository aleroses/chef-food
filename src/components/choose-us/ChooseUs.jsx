import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import pastaImg from "../../assets/images/pasta.png";
import { chooseUs } from "../../assets/fake-data/choose-us";

export const ChooseUs = () => {
  return (
    <Box
      component="article"
      sx={{
        width: "82%",
        justifySelf: "center",
        mb: 6,
        // border: "none",
      }}
    >
      <Card
        elevation={0}
        sx={{
          width: "100%",
          height: "auto",
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          alignItems: "center",
          // boxShadow: 3,
          // borderRadius: 4,
          // elevation: 4,
          overflow: "hidden",
          bgcolor: "secondary.main",
        }}
      >
        <CardMedia
          component="img"
          image={pastaImg}
          alt="Image of pasta"
          sx={{
            width: { xs: "100%", sm: "80%", md: "60%" },
            height: "100%",
            // display: "flex",
            // justifySelf: "center",
            objectFit: "cover",
            // bgcolor: "red"
          }}
        />

        <CardContent
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            // alignItems: "center",
            // p: true ? 3 : 6,
            // p: {
            //   xs: 3,
            //   md: 6,
            // },
            p: 3,
            gap: 2,
          }}
        >
          <Typography
            variant="h4"
            component="h2"
            // gutterBottom
            sx={{
              fontSize: {
                xs: "1.6em",
                sm: "2.1em",
              },
              fontWeight: 700,
            }}
          >
            Who are we?
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            sx={{
              color: "warning.main",
            }}
          >
            Take a look at the benefits we offer you.
          </Typography>
          <Typography
            variant="body1"
            color="primary.contrast"
            sx={{
              fontSize: {
                xs: "0.8em",
                sm: "1em",
              },
            }}
          >
            Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Mollitia aliquam temporibus
            velit. Corporis repudiandae ex inventore eum
            mollitia quaerat, eligendi fugit sed,
            explicabo quasi, praesentium vel? Magnam
            dignissimos accusamus odio.
          </Typography>
        </CardContent>
      </Card>

      <Grid
        container
        spacing={2}
        sx={{
          // py: 8,
          // bgcolor: "secondary.main",
          mt: 2,
        }}
      >
        {chooseUs.map((item) => {
          const IconComponent = item.icon;

          return (
            <Grid
              key={item.title}
              size={{ xs: 6, sm: 4, md: 3 }}
              // sx={{ mt: "2rem" }}
            >
              <Card
                sx={{
                  bgcolor: "secondary.main",
                }}
              >
                <IconComponent
                  sx={{
                    width: "2.2rem",
                    height: "2.2rem",
                    color: "primary.contrast",
                    bgcolor: `${item.color}`,
                    borderRadius: "50%",
                    p: 0.8,
                    ml: 2,
                  }}
                />
                <CardContent>
                  <Typography
                    component="p"
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
                    {item.title}
                  </Typography>
                  <Typography
                    component="p"
                    sx={{
                      color: "primary.contrast",
                      fontSize: {
                        xs: "0.8em",
                        sm: "1em",
                      },
                    }}
                  >
                    {item.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

/* 
    <Box>
      <Card>
        <CardMedia
          component="img"
          image={pastaImg}
          alt="Image of pasta"
        />
        <CardContent>
          <Box>
            <Typography component="span" variant="h5">
              Who are we?
            </Typography>
            <Typography variant="body1">
              Take a look at the benefits we offer you.
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Mollitia aliquam
              temporibus velit. Corporis repudiandae ex
              inventore eum mollitia quaerat, eligendi
              fugit sed, explicabo quasi, praesentium vel?
              Magnam dignissimos accusamus odio.
            </Typography>
          </Box>
          <Box>
            <DeliveryDiningIcon />
            <Typography variant="h6">
              Free Home Delivery
            </Typography>
            <Typography component="p">
              Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </Typography>
          </Box>
          <Box>
            <AttachMoneyIcon />
            <Typography variant="h6">
              Return & Refund
            </Typography>
            <Typography component="p">
              Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </Typography>
          </Box>

          <Box>
            <CreditScoreIcon />
            <Typography variant="h6">
              Secure Payment
            </Typography>
            <Typography component="p">
              Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </Typography>
          </Box>

          <Box>
            <AccessAlarmIcon />
            <Typography variant="h6">
              Free Home Delivery
            </Typography>
            <Typography component="p">
              Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
*/
