import React from 'react';

// Components
import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import Banner from '../../components/Banner/index';
import Carousel from '../../components/Carousel/index';
import { Helmet } from 'react-helmet';

import Datas from '../../data/dados_iniciais.json';

const Home: React.FC = () => {
  return (
    <>
      <Helmet title="Home - VitorFlix Official Site" />

      <Header />

      <Banner
        videoTitle={Datas.categorias[0].videos[0].titulo}
        url={Datas.categorias[0].videos[0].url}
        videoDescription={
          'O que é Front-end? Trabalhando na área os termos HTML, CSS e Javascript fazem parte da rotina das desenvolvedoras e desenvolvedore. Mas o que eles fazem, afinal? Descubra com a Vanessa!'
        }
      />

      <Carousel ignoreFirstVideo category={Datas.categorias[0]} />

      <Carousel category={Datas.categorias[1]} />

      <Carousel category={Datas.categorias[2]} />

      <Carousel category={Datas.categorias[3]} />

      <Carousel category={Datas.categorias[4]} />

      <Carousel category={Datas.categorias[5]} />
      <Footer />
    </>
  );
};

export default Home;
