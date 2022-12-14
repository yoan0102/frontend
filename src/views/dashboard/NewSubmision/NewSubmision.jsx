import { SubmisionProvider } from './context/SubmisionContext'; 
import SubmisionForm from './components/forms/SubmisionForm';

import './styles/NewSubmision.scss';

const NewSubmision = () => {
	return <div className='newsubmision'>
		<SubmisionProvider>
			<SubmisionForm />
		</SubmisionProvider> 
	</div >;
};

export default NewSubmision;