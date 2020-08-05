import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';
import numberToBRL from '../../utils/numberToBRL';
import api from '../../services/api';

export interface Teacher {
  id: number;
  avatar: string;
  name: string;
  subject: string;
  bio: string;
  cost: number;
  whatsapp: string;
}

interface TeacherItemProps {
  teacher: Teacher
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  
  const { id, avatar, name, subject, bio, cost, whatsapp } = teacher;
  
  function createNewConnection() {
    api.post('connections', {
      user_id: id
    })
  }

  return (
    <article className="teacher-item">
      <header>
        <img src={avatar} alt={name} />
        <div>
          <strong>{name}</strong>
          <span>{subject}</span>
        </div>
      </header>

      <p>{bio}</p>

      <footer>
        <p>
          Preço/hora
          <strong>{numberToBRL(cost)}</strong>
        </p>
        <a 
          target="_blank" 
          onClick={createNewConnection} 
          href={`https://wa.me/${whatsapp}`}
        >
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </a>
      </footer>
    </article>
  )
}

export default TeacherItem;
