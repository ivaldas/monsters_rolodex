import './card-list.styles.css';
import Card from '../card/card.component';

const CardList = ({ filteredMonsters }) => (
	<div className="card-list">
		{filteredMonsters.map((monster) => {
			return <Card monster={monster} key={monster.id} />;
		})}
	</div>
);

export default CardList;
