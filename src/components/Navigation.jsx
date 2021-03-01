import { Link as RLink } from "react-router-dom";
import { styled } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const StyledLink = styled(Link)({
  color: "#fff",
  margin: "0 10px",
});

export default function Navigation() {
  return (
    <AppBar color="primary" position="static" style={{ height: "64px" }}>
      <Toolbar>
        <Typography>
          <RLink component={StyledLink} to="/pokemon">
            Fetch Pokemon
          </RLink>
          <RLink component={StyledLink} to="/todo">
            Todo List
          </RLink>
          <RLink component={StyledLink} to="/todo-reducer">
            Todo List v2
          </RLink>
          <RLink component={StyledLink} to="/form">
            Form
          </RLink>
          <RLink component={StyledLink} to="/lotr">
            react-query v1
          </RLink>
          <RLink component={StyledLink} to="/calendar">
            react-query v2
          </RLink>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
