import { Card, Container, Paper } from "@mui/material";
import AddUserForm from "../../components/IndexDB.tsx/AddUserForm";
import UserTable from "../../components/IndexDB.tsx/UserTable";

const IndexDBExample = () => (
  <Container component={Paper}>
    <Card sx={{ m: 5 }}>
      <AddUserForm defaultAge={22} />
    </Card>
    <Card sx={{padding: 3}}>
      <UserTable />
    </Card>
  </Container>
)

export default IndexDBExample;