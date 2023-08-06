import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { apiClient } from "../../apis/ApiClient";
import { useLocation } from "react-router-dom";

const theme = createTheme();

const ContainerWrapper = styled.div`
  max-width: 1280px;
  min-height: 750px;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translate(-50%);
  margin-top: 100px;
`;

export const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userId = location.state?.userId as string;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const credentials = {
      AWSAccountId: data.get("awsAccountID"),
      AWSRegion: data.get("region"),
      AWSAccessKey: data.get("accessKey"),
      AWSSecretKey: data.get("secretKey") || "",
      GithubOAuthToken: data.get("githubOAuthToken") || "",
    };
    console.log(userId);
    const response = await apiClient
      .post(`/api/credential/${userId}`, credentials)
      .then((response) => {
        console.log(response);
        alert("회원가입이 완료되었습니다.");
        navigate("/");
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  return (
    <ContainerWrapper>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "white",
              borderRadius: "10px",
              padding: "10px",
            }}
          >
            <Typography component="h1" variant="h5">
              Register
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{
                mt: 3,
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="awsAccountID"
                    required
                    fullWidth
                    id="awsAccountID"
                    label="AWS ID"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    name="region"
                    label="Region"
                    id="region"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="accessKey"
                    label="AWS Access key"
                    name="accessKey"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="secretKey"
                    label="AWS Secret Key"
                    name="secrectKey"
                    type="password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="githubOAuthToken"
                    label="GithubOAuthToken"
                    type="password"
                    id="githubOAuthToken"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  backgroundColor: "black",
                  fontSize: "20px",
                }}
              >
                회원가입
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </ContainerWrapper>
  );
};
