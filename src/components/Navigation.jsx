import { Link as RLink } from "react-router-dom";
import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const StyledLink = styled(Link)`
  color: white;
  margin: 0 10px;
`;

export default function Navigation() {
  return (
    <AppBar color="primary" position="static" style={{ height: "64px" }}>
      <Toolbar>
        <Typography>
          <RLink component={StyledLink} to="/todo">
            Todo
          </RLink>
          <RLink component={StyledLink} to="/todo-reducer">
            Todo with reducer
          </RLink>
          <RLink component={StyledLink} to="/form">
            Form
          </RLink>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
