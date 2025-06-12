
import { useState } from 'react';

const initialItems = [
  {
    id: 1,
    codigo: '25208191',
    nome: 'MOUNT 3/8 ROSSI-TUBO 25MM (2 PARAFUSOS)',
    endereco: '3-A-A-1',
    foto: 'https://i.imgur.com/yGGuvxx.jpeg'
  },
  {
    id: 2,
    codigo: '25208193',
    nome: 'MOUNT ALTO ROSSI 3/8 -TUBO 25MM (4 PARAFUSOS)',
    endereco: '3-A-A-2',
    foto: 'https://i.imgur.com/YCTi7qC.jpeg'
  },
 {
    id: 3,
    codigo: '25208196',
    nome: 'ELEVADOR DE MOUNT 7/8 ROSSI (30,5X40 MM)',
    endereco: '3-A-A-3',
    foto: 'https://i.imgur.com/EaeyTDR.jpeg'
  },
 {
    id: 4,
    codigo: '25208264',
    nome: 'ADAPTADOR DE TRILHO ROSSI - 7/8 PARA 3/8',
    endereco: '3-A-A-4',
    foto: 'https://i.imgur.com/gGGaxon.jpeg'
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
          <img src={item.foto} alt={item.nome} style={{ width: '80%', height: 550, objectFit: 'cover', borderRadius: 8 }} />
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
