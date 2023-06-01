import shoe from '../img/shoe_1.jpg';
import { Stack, Button, Accordion, AccordionSummary, Typography, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';




const Product = () => {
  return (
    <>
      <div className='productBox'>

        <img src={shoe} className='imgproduct' />

        <div className='DetailsProduct'>
          <h1>JORDAN</h1>
          <h3>JORDAN 1 MID SE SNEAKERS</h3>
          <p>Price: 9,800 TH</p>
          <Stack direction="row" spacing={1} className='Stack-btn'>
            <Button variant="outlined" className='btn-product'>Store</Button>
            <a href="Checkout"><Button variant="contained" color="success" className='btn-product'> Buy Now </Button></a>
          </Stack>

          <h3>Details:</h3>
          <div className='Details'>
            The original "Black Toe" colourway of Michael Jordan's first signature mid-top shoe is rearranged on these Jordan 1 Mid SE sneakers. Black nylon overlays on the forefoot, toe cap, and eyelets give a nod to this original style. The colour-scheme here is that of some of the most coveted shoes in Jordan Brand history.
          </div>
        </div>
      </div>

      <div className='Accordion'>
        <Accordion style={{ marginTop: '50px' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Composition</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography style={{ textAlign: 'start' }}>
              📍Sole: Rubber 100%
              <br />
              📍Outer: Leather 100%, Suede 100%
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Product IDs</Typography>
          </AccordionSummary>

          <AccordionDetails>
            <Typography style={{ textAlign: 'start' }}>
              📍FARFETCH ID: 15786504
              <br />
              📍Brand style ID: 852542100
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  )
}

export default Product