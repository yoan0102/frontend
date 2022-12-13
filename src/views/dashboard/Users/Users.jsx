import UserList from './components/UsersList/UserList';
import { UserProvider } from './context/UserContext';

import UserForm from './components/forms/UserForm';
import './styles/Users.scss';

const Users = () => {
	return <div className='users'>
		<UserProvider>
			<UserList />
 		</UserProvider>
	</div >;
};

export default Users;
