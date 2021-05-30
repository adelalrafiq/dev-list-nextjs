import styles from '../../styles/Developers.module.css';

export const getStaticProps = async ()=>{
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props:{ developers: data }
  }
}

const Developers = ({developers}) => {
  return ( 
    <div>
      <h1>All developers</h1>
      {developers.map(developer => (
        <div key= {developer.id}>
          <a className={styles.single}><h3>{developer.name}</h3></a>
        </div>
      ))}
    </div>
   );
}
 
export default Developers;