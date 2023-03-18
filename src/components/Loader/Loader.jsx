import { LoaderWrapper } from './Loader.styled';
import { CirclesWithBar } from 'react-loader-spinner';

function Loader() {
  return (
    <LoaderWrapper>
      <CirclesWithBar
        height="100"
        width="100"
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        outerCircleColor=""
        innerCircleColor=""
        barColor=""
        ariaLabel='circles-with-bar-loading' />
    </LoaderWrapper>
  );
}
export default Loader;
