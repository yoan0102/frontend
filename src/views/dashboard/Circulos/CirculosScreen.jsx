import CirculoList from './components/CirculoList/CirculoList';
import { CirculoProvider } from './context/CirculoContext';

import './styles/Circulos.scss';

const Circulos = () => {
	return <div className='circulos'>
		<CirculoProvider>
			<CirculoList />
		</CirculoProvider>
	</div >;
};

export default Circulos;
