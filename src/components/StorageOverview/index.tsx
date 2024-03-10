
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface StorageOverviewProps {
  overview: {
    title: string;
    about: string;
    keyPoints: { title: string; content: string; list?: string[] }[];
  }
}

const StorageOverview = ({overview}: StorageOverviewProps) => (
  <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1-content"
      id="panel1-header"
    >
      <Typography sx={{ fontWeight: 800, fontSize: '20px' }} component='h2'>{overview.title}</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <p>
        {overview.about}
      </p>
      {overview.keyPoints.map((keyPoint) => (
      <dl key={keyPoint.title}>
        <dt>{ keyPoint.title}</dt>
        <dd>{keyPoint.content}</dd>
        <dd>
          <ul>
            {keyPoint.list && keyPoint.list.map((item) => (
              <li key={item}>{ item }</li>
             ))}
          </ul>
        </dd>
      </dl>))}
    </AccordionDetails>
  </Accordion>
);

export default StorageOverview;