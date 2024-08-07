import React from 'react';
import styled from 'styled-components';
import { cardsInfo } from '../utils/cardsMock';
import Card from './Card';
import Subtitles from './Subtitles';

const MainContainer = styled.main`
  padding: 1rem;
  background-color: #F9F8FE;
  
  @media (min-width: 640px) {
    padding: 2rem;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 1.5rem; 
  width: 100%;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr); 
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export default function TrendingProducts() {
  return (
    <MainContainer>
      <TitleContainer>
        <Subtitles type="secondary">Produtos em alta</Subtitles>
        <a href="/produtos" className="text-[#C92071] hover:underline">
          Ver todos ➝
        </a>
      </TitleContainer>
      <GridContainer>
        {cardsInfo.map((card) => (
          <Card
            key={card.id}
            discountPercentual={card.discountPercentual}
            category={card.category}
            productName={card.productName}
            discountPrice={card.discountPrice}
            price={card.price}
            isDiscount={card.isDiscount}
            url={card.url}
          />
        ))}
      </GridContainer>
    </MainContainer>
  );
}
