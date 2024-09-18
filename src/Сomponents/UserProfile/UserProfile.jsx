import './UserProfile.css'
const UserProfile = (props) => {
    const {name='Anonim',age=0,email='anonim@gmail.com'}=props;
    return (
        <article className='user-body'>
            <h1 className="user-name">name: {name}</h1>
            <h2 className="user-name">age: {age}</h2>
            <p className="user-email">email: {email}</p>
        </article>
    );
}

export default UserProfile;
