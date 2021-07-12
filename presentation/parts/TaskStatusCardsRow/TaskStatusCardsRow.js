import { Box } from "@material-ui/core";
import StatusCard from "../../Components/Cards/StatusCard/StatusCard";

const TaskStatusCardsRow = () => {
  return (
    /* task status row */
    <Box
      mb={5}
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <span className="flex">
        <StatusCard text="Total Task" number={86} />
        <StatusCard text="Ongoing" bgc="#84cb5b" number={4} />
        <StatusCard text="Revision Request" bgc="#fe5292" number={1} />
      </span>
    </Box>
  );
};

export default TaskStatusCardsRow;
