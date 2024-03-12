import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionDetails from '@mui/material/AccordionDetails';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import CheckboxClassification from '../CheckboxClassification/CheckboxClassification';
import CheckboxProductionMethod from '../CheckboxProductionMethod/CheckboxProductionMethod';
import CheckboxForSizeFilter from '../CheckboxForSizeFilter/CheckboxForSizeFilter';
import './Accordions.css';

const Accordions = () => {

  const [selectedValues, setSelectedValues] = useState([]);

  const handleDelete = (value) => {
    setSelectedValues(prevValues => prevValues.filter(item => item !== value));
  };

  const handleCheckboxChange = (name, checked, label) => {
    if (checked) {
      setSelectedValues(prevValues => [...prevValues, label]);
    } else {
      setSelectedValues(prevValues => prevValues.filter(item => item !== label));
    }
  };

  return (
    <div>
      <div className='chips'>
        <span className='chips-number'>1034,5 Results</span>
        <ul className='chips-list'>
          <Stack direction="row" spacing={1}>
            {selectedValues.map((value, index) => (
              <Chip
                key={index}
                label={value}
                sx={{ backgroundColor: '#297019', color: "#ffffff", border: "none" }}
                variant="outlined"
                onDelete={() => handleDelete(value)}
              />
            ))}
          </Stack>
        </ul>
      </div>
      <div className='side-filter'>
        <Accordion sx={{ backgroundColor: '#353542' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            id="checkbox1"
            sx={{ margin: "0px 0", color: "#ffffff", fontSize: "18px", fontWeight: "500", lineHeight: "1.35" }}
          >Classification
          </AccordionSummary>
          <AccordionDetails sx={{ color: "#959595", fontSize: "16px", fontWeight: "500" }}>
            <CheckboxClassification onCheckboxChange={handleCheckboxChange} onChipDelete={handleDelete} />
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ backgroundColor: '#353542' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            id="checkbox2"
            sx={{ margin: "0px 0", color: "#ffffff", fontSize: "18px", fontWeight: "500", lineHeight: "1.35" }}
          >Production Method
          </AccordionSummary>
          <AccordionDetails sx={{ color: "#959595", fontSize: "16px", fontWeight: "500" }}>
            <CheckboxProductionMethod onCheckboxChange={handleCheckboxChange} />
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ backgroundColor: '#353542' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="checkbox3"
            sx={{ margin: "0px 0", color: "#ffffff", fontSize: "18px", fontWeight: "500", lineHeight: "1.35" }}
          >Size
          </AccordionSummary>
          <AccordionDetails sx={{ color: "#959595", fontSize: "16px", fontWeight: "500" }}>
            <CheckboxForSizeFilter onCheckboxChange={handleCheckboxChange} />
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default Accordions;