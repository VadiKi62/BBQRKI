import { useState } from "react";
import {
  Modal,
  Paper,
  Typography,
  CircularProgress,
  Button,
} from "@mui/material";
import Image from "next/image";
import DefaultButton from "./DefaultButton";
import { useTheme } from "@mui/material/styles";

const ModalComponent = ({
  content,
  onClose,
  loading,
  run = false,
  onPaymentMethodSelect,
}) => {
  const theme = useTheme();
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleCashPayment = () => {
    setPaymentMethod("cash");
    onPaymentMethodSelect("cash");
  };

  const handleCardPayment = () => {
    setPaymentMethod("card");
    onPaymentMethodSelect("card");
  };

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
            <Typography variant="inherit" fontSize={"2rem"}>
              {content}
            </Typography>
            <CircularProgress color="primary" />
          </div>
        ) : (
          <div>
            <Typography variant="inherit" fontSize={"1.5rem"}>
              {content}
            </Typography>
            {run && (
              <div style={{ marginTop: "15px" }}>
                <Image
                  src={"/assets/icons/sonic.gif"}
                  alt="Running Man"
                  width={40}
                  height={40}
                />
              </div>
            )}

            {/* Cash payment button */}
            <Button variant="contained" onClick={handleCashPayment}>
              Pay with Cash
            </Button>

            {/* Card payment button */}
            <Button variant="contained" onClick={handleCardPayment}>
              Pay with Card
            </Button>

            {/* Close modal button */}
            <DefaultButton
              visibility={true}
              onClick={onClose}
              label="Cancel"
              relative={true}
            />
          </div>
        )}
      </Paper>
    </Modal>
  );
};

export default ModalComponent;
