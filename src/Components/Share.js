import { useEffect, useState } from "react";
import axios from "axios";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

import { addDoc } from "firebase/firestore";
import { db } from "../firebase-config";
import { collection, getDocs, serverTimestamp } from "firebase/firestore";
const Share = ({ toggleFetch, setToggleFetch }) => {
  const API_KEY = "keyN5KW3EITtcAGls";
  const API_URL = `https://api.airtable.com/v0/appix77dwjzsTAHgi/Table%201?api_key=${API_KEY}`;

  const postsCollectionRef = collection(db, "posts");

  //const [date, setDate] = useState('');
  const [story, setStory] = useState("");
  const [grade, setGrade] = useState("");
  const [approved, setApproved] = useState(false);
  const [submit, setSubmit] = useState(false);

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    await addDoc(postsCollectionRef, {
      date_time: serverTimestamp(),
      description: story,
      grade: grade,
      visible: false,
    });

    setToggleFetch(!toggleFetch);
    setSubmit(!submit);
  };
  const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: "#d32f2f",
      },
    },
  });

  return (
    <div>
      {submit ? (
        <h1>
          Your story means a lot to this community. We are truly sorry for this
          experience. We will look over your story to ensure it follows our
          guidelines for safety and anonymity. This is for you and others
          safety.{" "}
        </h1>
      ) : (
        <form onSubmit={handleSubmit} id="story-form">
          <div className="form-container">
            <FormControl id="input-grade">
              <InputLabel>Grade</InputLabel>
              <Select
                labelId="grade-select"
                id="grade-select"
                label="Garde"
                onChange={(ev) => setGrade(ev.target.value)}
              >
                <MenuItem value={"freshman"}>Freshman</MenuItem>
                <MenuItem value={"sophomore"}>Sophomore</MenuItem>
                <MenuItem value={"junior"}>Junior</MenuItem>
                <MenuItem value={"senior"}>Senior</MenuItem>
                <MenuItem value={"grad"}>Grad Student</MenuItem>
              </Select>
            </FormControl>

            <FormControl id="input-story">
              <TextField
                type="text"
                id="story-box"
                multiline
                label="Story"
                rows={12}
                onChange={(ev) => setStory(ev.target.value)}
              />
            </FormControl>
          </div>

          <ThemeProvider theme={theme}>
            <Button variant="outlined" id="submit-share" type="submit">
              Submit
            </Button>
          </ThemeProvider>
        </form>
      )}
    </div>
  );
};

export default Share;
