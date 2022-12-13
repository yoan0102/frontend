import UserList from './components/UsersList/UserList';
import { UserProvider } from './context/UserContext';

import './styles/Users.scss';

const Users = () => {
	return <div className='users'>
		<UserProvider>
			<UserList />
		</UserProvider>
	</div >;
};

export default Users;