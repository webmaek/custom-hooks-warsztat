import { Paper, Modal } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

export const Container = styled(Paper)({
  backgroundColor: "#d9d9d9",
  padding: 0,
  margin: 0,
  height: "100vh",
});

export const ModalContainer = styled(Paper)({
  position: "absolute",
  backgroundColor: "#fff",
  width: "400px",
  height: "300px",
  padding: "15px",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  borderRadius: "3px",
  boxShadow: "6px 6px 12px rgba(0, 0, 0, 0.6) rgba(0, 0, 0, 0.6)",
});
