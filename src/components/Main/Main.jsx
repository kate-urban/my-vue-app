import { useState } from 'react';
import Form from '../Form/form';
import Layout from '../Layout/Layout';
import styles from '../Main/Main.module.css';
import Button from '../Button/Button';

export default function Main() {
    const [formIsActive, setFormActive] = useState(false)
    
    return (
        <Layout className={styles.layout}>
            <Button label='Связаться со мной' onClick={() => setFormActive(active => !active)} />
            {formIsActive && <Form />}
        </Layout>
    )
}