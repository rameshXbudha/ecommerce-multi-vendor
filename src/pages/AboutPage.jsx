
import { useParams } from 'react-router-dom';
import Menu from '../component/Menu';

const AboutPage = () => {
    const {id, name} = useParams();
    return (
        <div>
            <Menu />
            <div>
                ID: {id} <br />
                Name: {name}
            </div>
        </div>
    );
};

export default AboutPage;