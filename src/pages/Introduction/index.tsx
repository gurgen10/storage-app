import { Box, Card, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { TreeView } from '@mui/x-tree-view/TreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import './Introduction.css';

const Introduction = () => {
  return (
    <Box sx={{ minHeight: 180, flexGrow: 1, mx: 'auto', mt: '50px' }}>
      <Typography component='h1' sx={{mb: '40px', fontSize: '50px', color: 'coral', textAlign: 'center'}}>
        Introduction
      </Typography>
      <Card sx={{p: '20px', fontSize: '20px'}} >
        <TreeView
          sx={{
            
            color: 'Highlight',
            '& .MuiTreeItem-label': {
              fontSize: '25px !important',
              fontWeight: '700 !important'
            },
           
            '& .MuiTreeItem-group .MuiTreeItem-label': {
              fontSize: '22px !important',
              color: 'coral',
              fontWeight: '500 !important'
            }
          }}
          aria-label="file system navigator"
          defaultCollapseIcon={<ExpandMoreIcon sx={{fontSize: '25px !important'}} />}
          defaultExpandIcon={<ChevronRightIcon sx={{fontSize: '25px !important'}} />}
        >
        <TreeItem  nodeId="1" label="Local Storage">
          <TreeItem nodeId="1.1" label="What is local storage" />
          <TreeItem nodeId="1.2" label="Usage" />
          <TreeItem nodeId="1.3" label="About of local storage" />
        </TreeItem>
          
        <TreeItem nodeId="2" label="Session Storage">
          <TreeItem nodeId="2.1" label="What is session storage" />
          <TreeItem nodeId="2.2" label="Usage" />
          <TreeItem nodeId="2.3" label="About of session storage" />
          <TreeItem nodeId="2.4" label="Comparison  with local storage" />
        </TreeItem>
          
        <TreeItem nodeId="3" label="Cookies">
          <TreeItem nodeId="3.1" label="What is cookies storage" />
          <TreeItem nodeId="3.2" label="Usage" />
          <TreeItem nodeId="3.3" label="About of cookies storage" />
          <TreeItem nodeId="3.4" label="Comparison  with local storage and seesion storage" />
        </TreeItem>
          
        <TreeItem nodeId="4" label="IndexDb">
          <TreeItem nodeId="4.1" label="What is IndexDb" />
          <TreeItem nodeId="4.2" label="Usage" />
          <TreeItem nodeId="4.3" label="About of IndexDb" />
          <TreeItem nodeId="4.4" label="About https://dexie.org/" />
        </TreeItem>
      </TreeView>
      </Card>
    </Box>
  )
}


export default Introduction;