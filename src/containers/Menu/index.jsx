import { Container, Banner, CategoryMenu, ProductsContainer } from './styles';

export function Menu() {
  return (
    <Container>
      <Banner>
        <h1>
            O MELHOR
            <br />
            HAMBURGER
            <br />
            ESTÁ AQUI!
        </h1>
        <span>Esse cardápio está irresistível!</span>
      </Banner>

      <CategoryMenu></CategoryMenu>

      <ProductsContainer></ProductsContainer>
      
    
      </Container>
   
  );
}