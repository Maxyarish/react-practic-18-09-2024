import styles from './UserProfile.module.css'
const UserProfile = (props) => {
    const {user:{name='Anonim',age=0,email='anonim@gmail.com'}}=props;
    return (
        <article className={styles['user-profile']}>
            <h1 className="user-name">name: {name}</h1>
            <h2 className="user-name">age: {age}</h2>
            <p className="user-email">email: {email}</p>
        </article>
    );
}

export default UserProfile;
