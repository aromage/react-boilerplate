import { useEffect } from 'react';
import { useQueryTest } from '../../services/test/test.queries';

const Home = () => {
  const { data, refetch } = useQueryTest();

  useEffect(() => {
    refetch();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return <div>home</div>;
};

export default Home;
