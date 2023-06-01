import { CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import shoe from '../img/shoe_1.jpg'

const CardBox = () => {
    return (
        <>
            <Card sx={{ maxWidth: 345 }} style={{ marginTop: '50px' }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={shoe}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Nike Air Jordan 1
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    The original "Black Toe" colourway of Michael Jordan's first signature mid-top shoe is rearranged on these Jordan 1 Mid SE sneakers. Black nylon overlays on the forefoot, toe cap, and eyelets give a nod to this original style. The colour-scheme here is that of some of the most coveted shoes in Jordan Brand history.
                    </Typography>
                </CardContent>
                <CardActions style={{justifyContent: 'space-between' }}>
                    <a href="Product"><Button size="small">Add To Cart</Button></a>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </>
    )
}

export default CardBox