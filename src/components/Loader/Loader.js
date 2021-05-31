import Loader from 'react-loader-spinner';
import styles from './Loader.module.css';

const Loading = () => (
  <Loader
    className={styles.Loader}
    type="TailSpin"
    color="#00BFFF"
    height={200}
    width={200}
  />
);

export default Loading;
