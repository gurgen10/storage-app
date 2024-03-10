import { Card, Container } from "@mui/material";
import AddUserForm from "../../components/IndexDB.tsx/AddUserForm";
import UserTable from "../../components/IndexDB.tsx/UserTable";

const IndexDBExample = () => {

  return (
    <Container>
      <Card sx={{ m: 5 }}>
        <AddUserForm defaultAge={21} />
      </Card>
      <Card sx={{padding: 3}}>
        <UserTable />
      </Card>
   </Container>)
}

export default IndexDBExample;