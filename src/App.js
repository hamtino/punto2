import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import './App.css';
import { MDBDataTable } from 'mdbreact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function App() {
  const data = {
    columns: [
      {
        label: 'Id Festivo',
        field: 'festivo',
        sort: 'asc',
        width: 150,
      },
      {
        label: 'Dia Festivo',
        field: 'dia',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Descripcion',
        field: 'descripcion',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Id Proceso',
        field: 'proceso',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Accion',
        field: 'accion',
        sort: 'asc',
        width: 150
      }
    ],
    rows: [
      {
        festivo: '926',
        dia: '2021-07-01',
        descripcion: 'prueba',
        proceso: '368',
        accion: <FontAwesomeIcon icon={faTrash} />
      },
      {
        festivo: '943',
        dia: '2021-07-12',
        descripcion: 'ooo',
        proceso: '368',
        accion: <FontAwesomeIcon icon={faTrash} />
      },
      {
        festivo: '964',
        dia: '2021-07-15',
        descripcion: 'prueba',
        proceso: '368',
        accion: <FontAwesomeIcon icon={faTrash} />
      },
      {
        festivo: '968',
        dia: '2021-07-21',
        descripcion: 'ooo',
        proceso: '368',
        accion: <FontAwesomeIcon icon={faTrash} />
      }
    ]
  };

  return (
    <div>
      <h3>INDRA TEST REACT</h3>
    <MDBDataTable
      striped
      bordered
      small
      data={data}
      infoLabel={["Elemento", "hasta", "de", "Elementos"]}
      searchLabel="Buscar"
      paginationLabel={["Anterior", "Siguiente"]}
      entriesLabel="Elementos"
    />
    </div>
  );
}

export default App;
