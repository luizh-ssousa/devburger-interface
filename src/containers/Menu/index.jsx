import { useEffect, useState } from 'react';
import { Container, Banner, CategoryMenu, ProductsContainer } from './styles';
import { api } from '../../services/api';

export function Menu() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
      async function loadCategories() {
        const { data } = await api.get('/categories');
  
        setCategories(data);
        console.log(data);
      }
  
      loadCategories();
    }, []);

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