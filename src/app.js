
import { useState } from 'react';

const initialItems = [
  {
    id: 1,
    codigo: '25209017',
    nome: 'Cápsula Descartável Co2 Banza',
    endereco: 'Corredor A - Prateleira 1',
    foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbuyxzOhDnt2ptPchRARAY2qXesIeZErDcfA&s'
  },
  {
    id: 2,
    codigo: 'DEF002',
    nome: 'Caixa P',
    endereco: 'Corredor B - Prateleira 3',
    foto: 'https://i.imgur.com/IOhLZ8y.jpg'
  },
  {
    id: 3,
    codigo: 'XYZ003',
    nome: 'Plástico Bolha',
    endereco: 'Corredor C - Prateleira 2',
    foto: 'https://i.imgur.com/KZsmUi2l.jpg'
  }
];

export default function PrateleirasExpedicaoRossi() {
  const [items, setItems] = useState(initialItems);

  const handleEnderecoChange = (id, novoEndereco) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, endereco: novoEndereco } : item
      )
    );
  };

  return (
    <div style={{ padding: 16, display: 'grid', gap: 16 }}>
      {items.map(item => (
        <div key={item.id} style={{ border: '1px solid #ccc', padding: 16, borderRadius: 12 }}>
          <img src={item.foto} alt={item.nome} style={{ width: '100%', height: 150, objectFit: 'cover', borderRadius: 8 }} />
          <h3>{item.nome}</h3>
          <p><strong>Código:</strong> {item.codigo}</p>
          <input
            value={item.endereco}
            onChange={e => handleEnderecoChange(item.id, e.target.value)}
            style={{ width: '100%', marginBottom: 8 }}
          />
          <button>Salvar Localização</button>
        </div>
      ))}
    </div>
  );
}
