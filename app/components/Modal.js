import React from "react";
import Image from "next/image";
import { Modal, Paper } from "@mui/material/";
import CircularProgress from "@mui/material/CircularProgress";
import DefaultButton from "./DefaultButton";
import Typography from "@app/components/common/Typography";
import { useTheme } from "@mui/material/styles";

const ModalComponent = ({ loading, content, onClose, run = false }) => {
  const theme = useTheme();
  return (
    <Modal
      open={true}
      onClose={onClose}
      style={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        sx={{
          backgroundColor: theme.palette.secondary.beige,
          color: theme.palette.text.dark,
          padding: "16px",
          borderRadius: "8px",
          textAlign: "center",
        }}
      >
        {loading ? (
          <div>
            <Typography variant="inherit">
              {content} fontSize={"2rem"}
            </Typography>
            <CircularProgress color="primary" />
          </div>
        ) : (
          <div>
            <Typography variant="inherit" fontSize={"2rem"}>
              {content}
            </Typography>
            {run && (
              <div style={{ marginTop: "15px" }}>
                <Image
                  src={"/icons/sonic.gif"}
                  alt="Running Man"
                  style={{ width: "40px", height: "40px" }}
                />
              </div>
            )}

            <DefaultButton
              visibility={true}
              onClick={onClose}
              label="Ok"
              relative={true}
            />
          </div>
        )}
      </Paper>
    </Modal>
  );
};

export default ModalComponent;
