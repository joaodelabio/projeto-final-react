import './alerta.css';
import { useEffect } from 'react';

export default function Alerta({ mensagem, onClose }) {
    useEffect(() => {
        const timer = setTimeout(onClose, 3000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className="alerta">
            <p>{mensagem}</p>
        </div>
    );
}
