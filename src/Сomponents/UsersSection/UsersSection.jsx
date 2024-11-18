import UserProfile from '../UserProfile/UserProfile';
import data from './data'
import styles from './UserSection.module.scss'

const UsersSection = () => {
    const showUsers=(user)=>(<UserProfile key={user.id} user={user}/>)
return (
    <>
     <h2>Users</h2>
        <section className={styles.container}>
        {data.map(showUsers)}
        </section>
        </>
    );
}

export default UsersSection;
