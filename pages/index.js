import Head from 'next/head'
import Intro from '../components/intro'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import { data } from '../data'


export default function Home({services}) {
  // console.log(services);
  return (
    <div >
      <Head>
        <title>Hasin Anjum Pabon</title>
        <meta name="description" content="the best agency" />
      </Head>
          <Intro/>
          <Services services={services}/>
          <Testimonials/>
    </div>
  )
}

export const getStaticProps = async ()=>{
  const services = data;
  return{
    props: {services},
  };
}
