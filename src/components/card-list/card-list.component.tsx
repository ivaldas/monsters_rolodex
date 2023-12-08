import { Monster } from '../../App';
import Card from '../card/card.component';
import './card-list.styles.css';

type CardListProps = {
	monstersx: Monster[]
}

const CardList = ({ monstersx }: CardListProps) => (
	<div className="card-list">
		{monstersx.map((monster) => {
			return <Card monster={monster} key={monster.id} />;
		})}
	</div>
);

export default CardList;
