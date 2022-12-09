import OrganismoList from './components/OrganismoList/OrganismoList';
import { OrganismoProvider } from './context/OrganismoContext';

import './styles/Organismos.scss';

const Organismos = () => {
	return <div className='organismos'>
		<OrganismoProvider>
			<OrganismoList />
		</OrganismoProvider>
	</div >;
};

export default Organismos;
