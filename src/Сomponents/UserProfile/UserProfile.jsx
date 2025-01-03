import { useState } from 'react';
import PropTypes from 'prop-types'
import Icon from '@mdi/react';
import { mdiThumbUp,mdiThumbDownOutline, } from '@mdi/js';
import styles from './UserProfile.module.scss'
const UserProfile = (props) => {
    const {user:{name='Anonim',age=0,email='anonim@gmail.com'}}=props;
    const [isSelect, setIsSelect] = useState(true);
    const [amount, setIsAmount] = useState(0);
    const [isDelete, setIsDelete] = useState(false);
    const changeIsSelect=()=>{setIsSelect(!isSelect)};
    const borderSelect=isSelect?'2px solid red':'2px solid green';
const addLike=(event)=>{setIsAmount(amount +1)
    event.stopPropagation()
}
const subLike=(event)=>{
    event.stopPropagation()
    if (amount>0) {
        setIsAmount(amount - 1)
    }else{
        setIsAmount(0)
    }
};
const changeIsDelete=()=>{
    setIsDelete(true)
    event.stopPropagation()
}
if (isDelete)return null
    return (
    <article onClick={changeIsSelect} className={styles['user-profile']} style={{border:borderSelect}}>
            <button onClick={changeIsDelete}>X</button>
            <h2>name: <span>{name}</span></h2>
            <h3 >age: {age}</h3>
            <p>email: {email}</p>
            <p className={styles.flex}>
                <span onClick={addLike}><Icon path={mdiThumbUp} size={1}/></span> <span>{amount}</span>
            <span onClick={subLike}><Icon path={mdiThumbDownOutline} size={1}/></span>
            </p>
        </article>
    );
}
UserProfile.propTypes={
    user:PropTypes.shape({
    name:PropTypes.string.isRequired,
    age:PropTypes.number.isRequired,
    email:PropTypes.string.isRequired,
})
}

export default UserProfile;
