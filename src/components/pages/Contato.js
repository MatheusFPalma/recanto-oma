import styles from './Contato.module.css';

function Contato() {
    return (
        <div className={styles.halfpage}>
            <div className={styles.card}>
                <h2>Cadastre-se para Promoções Exclusivas</h2>
                <form method="POST" action="YOUR_GOOGLE_FORM_ACTION_URL">
                    <label htmlFor="whatsapp">WhatsApp:</label>
                    <input type="text" id="whatsapp" name="whatsapp" placeholder="Seu número de WhatsApp" required />
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" id="email" name="email" placeholder="Seu e-mail" required />
                    <button type="submit">Enviar Cadastro</button>
                </form>
            </div>
            <div className={styles.card}>
                {/* Espaço para futuras informações */}
                <h2>Informações Adicionais</h2>
                <p>Este espaço será preenchido futuramente.</p>
            </div>
        </div>
    );
}

export default Contato;
