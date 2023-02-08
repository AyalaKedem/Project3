import { BiDish } from 'react-icons/bi';
import { Badge } from 'react-bootstrap';
import { useAppSelector } from '../../app/hooks';
import css from './OrderBadge.module.scss'

const OrdersBadge = () => {
  const counter = useAppSelector(state => state.counter.counter)
  
  return (
  <div className={css.width}>
  <Badge className={css.badge}>{counter}</Badge>
  <BiDish style={{fontSize: '22px'}} />
</div>
  )
}

export default OrdersBadge