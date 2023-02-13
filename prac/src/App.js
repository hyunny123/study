import React, { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

function Header() {
  return (
    <header>
      <h1>LIST</h1>
    </header>
  );
}

function Nav() {
  return (
    <nav>
      <ol>
        <li>html</li>
        <li>css</li>
      </ol>
    </nav>
  );
}

function Article() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <article
      style={{
        border: "1px solid #ddd",
        borderRadius: "20px",
        padding: "10px",
      }}
    >
      <h2>Welcome</h2>
      안녕하세요! 반갑습니다! 열심히 하겠습니다!안녕하세요! 반갑습니다! 열심히
      하겠습니다!안녕하세요! 반갑습니다! 열심히 하겠습니다!안녕하세요!
      반갑습니다! 열심히 하겠습니다!안녕하세요! 반갑습니다! 열심히
      하겠습니다!안녕하세요! 반갑습니다! 열심히 하겠습니다!안녕하세요!
      반갑습니다! 열심히 하겠습니다!안녕하세요! 반갑습니다! 열심히
      하겠습니다!안녕하세요! 반갑습니다! 열심히 하겠습니다!안녕하세요!
      반갑습니다! 열심히 하겠습니다!안녕하세요! 반갑습니다! 열심히
      하겠습니다!안녕하세요! 반갑습니다! 열심히 하겠습니다!안녕하세요!
      반갑습니다! 열심히 하겠습니다!안녕하세요! 반갑습니다! 열심히
      하겠습니다!안녕하세요! 반갑습니다! 열심히 하겠습니다!안녕하세요!
      반갑습니다! 열심히 하겠습니다!안녕하세요! 반갑습니다! 열심히
      하겠습니다!안녕하세요! 반갑습니다! 열심히 하겠습니다!안녕하세요!
      반갑습니다! 열심히 하겠습니다!
      <br />
      <ButtonGroup>
        <Button variant="outlined" onClick={handleClickOpen}>
          Create
        </Button>
        <Button variant="outlined">Update</Button>
        <Button variant="outlined" color="error">
          Delete
        </Button>
      </ButtonGroup>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>CREATE</DialogTitle>
        <DialogContent>
          <DialogContentText>Hello Create!!</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined">CREATE</Button>
          <Button variant="outlined" color="info" onClick={handleClose}>
            CANCEL
          </Button>
        </DialogActions>
      </Dialog>
    </article>
  );
}

export default function App() {
  return (
    <Container fixed>
      <Header></Header>
      <Grid container>
        <Grid item xs={2}>
          <Nav />
        </Grid>
        <Grid item xs={10}>
          <Article />
        </Grid>
      </Grid>
    </Container>
  );
}
