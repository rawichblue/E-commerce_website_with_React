import CardBox from './CardBox'
import Stack from '@mui/material/Stack';

const Home = () => {
  return (
    <>
      <h1>SHOPPING SHOES</h1>
      <p>Discover our collection of comfortable, stylish, and durable shoes that are perfect for every occasion. From versatile sneakers to elegant dress shoes, we offer high-quality footwear that provides the perfect fit and support for your feet. Explore our wide range of designs and find the perfect pair that combines fashion and functionality.</p>

      <Stack direction='row' spacing={1} className='StackCard'>
        <CardBox />
        <CardBox />
        <CardBox />
      </Stack>
    </>
  )
}

export default Home