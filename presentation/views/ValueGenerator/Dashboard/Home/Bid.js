import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import FormInput from "../../../../Components/Inputs/FormInput/FormInput";
import Layout from "../../../../Layout/Layout";
import PostedJobcard from "../../../../parts/PostedJobcard/PostedJobcard";
import TaskStatusCardsRow from "../../../../parts/TaskStatusCardsRow/TaskStatusCardsRow";
import SearchIcon from "@material-ui/icons/Search";

const Bid = () => {
  return (
    <Layout>
      <Container>
        <Box style={{ maxWidth: "300px !important" }}>
          <FormInput
            type="text"
            bgc="#f2f2f2"
            placeholder="Search For Jobs"
            icon={<SearchIcon fontSize="small" />}
          />
        </Box>
        <TaskStatusCardsRow />
        <PostedJobcard vscard />
        {/* text */}
        <Box className="flex-between" mt={2} mb={2}>
          <Typography variant="h6">Placing Bid For This Job</Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
            Harum voluptate saepe, doloribus magnam tenetur adipisci.
          </Typography>
        </Box>
        {/* textBox */}
        <Box
          style={{ backgroundColor: "#ececec", borderRadius: "5px" }}
          p={3}
          mb={2}
        >
          <Typography gutterBottom variant="subtitle1">
            To, <br /> Tony R
          </Typography>
          <TextField
            variant="outlined"
            fullWidth
            multiline
            rows={5}
            placeholder="Write here..."
            className="mb-5"
            style={{ backgroundColor: "#fff", marginBottom: "1rem" }}
          />
          <Button variant="contained" color="secondary">
            Send
          </Button>
        </Box>
      </Container>
    </Layout>
  );
};

export default Bid;
