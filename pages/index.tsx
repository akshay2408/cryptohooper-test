import Listings from '@components/components/Listings';

export default function Home(props: any) {
  return (
    <Listings data={ props?.response } />
  );
}

export async function getStaticProps() {
  const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false').
    then((response) => response.json()).then((data) => {
    return data
  })
  return {
    props: {
      response
    }
  }
}
