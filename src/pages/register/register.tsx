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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const credentials = {
      awsAccountID: data.get("AWS_ID"),
      region: data.get("region"),
      accessKey: data.get("AWS_Access_Key"),
      secretKey: data.get("AWS_Secret_Key"),
      githubOAuthToken: data.get("githubOAuthToken"),
    };

    try {
      const response = await apiClient.post(
        "/api/credential/{userId}",
        credentials
      );
      alert("회원가입이 완료되었습니다.");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
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
                    name="AWS_ID"
                    required
                    fullWidth
                    id="AWS_ID"
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
                    id="AWS_Access_Key"
                    label="AWS Access key"
                    name="AWS_Access_Key"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="AWS_Secret_Key"
                    label="AWS Secret Key"
                    name="AWS_Secret_Key"
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
