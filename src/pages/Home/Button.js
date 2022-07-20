import Button from 'react-bootstrap/Button';
import css from './Button.module.scss';
import { Container } from 'react-bootstrap';
import ProductAll from './ProductAll';
import ProductCard from '../../styles/ProductCard';

function OutlineTypesExample() {
  return (
    <>
      <div className={css.wrap}>
        <Button variant="outline-primary">인기</Button>{' '}
        <Button variant="outline-primary">최신</Button>{' '}
        <Button variant="outline-primary">팔로잉</Button>{' '}
      </div>
      <Container>
        <div className={css.Container}>
          <div className={css.tag}>
            <Button>#줌인챌린지</Button>
            <Button>#스트릿룩</Button> <Button>#프스캇</Button>{' '}
            <Button>#여름코디</Button> <Button>#스타피쉬</Button>
            <Button>#KREAMSTYLE</Button>
            <Button>#베이퍼와플</Button>
            <Button>#오늘은뭐입지</Button>
          </div>
        </div>
      </Container>
      <div>
        <ProductAll />
      </div>
    </>
  );
}

export default OutlineTypesExample;
