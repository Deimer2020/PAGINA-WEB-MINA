// src/components/sections/Novedades/novedadesData.js
import { 
  FaVoteYea, FaMicrophone, FaMusic, FaFutbol, FaBirthdayCake
} from 'react-icons/fa'

// Importar imágenes
import imgElecciones from '../../../assets/images/novedades/elecciones-card.jpeg'
import imgFeria from '../../../assets/images/novedades/feria-card.jpeg'
import imgConcurso from '../../../assets/images/novedades/concurso-card.jpeg'
import imgMicrofutbol from '../../../assets/images/juegos/801.JPG'

import fotoYcleinis from '../../../assets/images/ganadores/8.png'
import fotoNacler from '../../../assets/images/ganadores/9.png'

import imgElecciones1 from '../../../assets/images/eventos/elecciones/foto1.jpeg'
import imgElecciones2 from '../../../assets/images/eventos/elecciones/foto2.jpeg'
import imgElecciones3 from '../../../assets/images/eventos/elecciones/foto3.jpeg'
import imgElecciones4 from '../../../assets/images/eventos/elecciones/foto4.jpeg'
import videoElecciones from '../../../assets/videos/elecciones-2026.mp4'

import videoConcurso from '../../../assets/videos/concurso-promo.mp4'

import micro1 from '../../../assets/images/juegos/801.JPG'
import micro2 from '../../../assets/images/juegos/profes.jpeg'

export const novedadesData = [
  {
    id: 'aniversario-40',
    titulo: '40 años formando generaciones',
    fecha: 'Del 21 al 25 de septiembre de 2026',
    descripcion: 'Celebramos los 40 años de la Institución Educativa Agrícola La Mina, con la participación de delegaciones de Media Luna y Manaure los días 23 y 24 de septiembre.',
    imagen: '/images/aniversario-40/portada.jpeg',
    imagenAlt: 'Imagen conmemorativa de los 40 años de la Institución Educativa Agrícola La Mina',
    imagenCompleta: true,
    etiqueta: '40.º aniversario',
    icono: <FaBirthdayCake />,
    color: '#b88724',
    destacado: true,
    modalTipo: 'aniversario',
    modalContent: {
      titulo: '40 años de la Institución Educativa Agrícola La Mina',
      fechaEvento: 'Del 21 al 25 de septiembre de 2026',
      introduccion: 'La Institución Educativa Agrícola La Mina celebró sus 40 años del 21 al 25 de septiembre de 2026. Una conmemoración para recordar nuestra trayectoria y compartir con la comunidad educativa.',
      delegaciones: 'Durante los días 23 y 24 de septiembre participaron delegaciones de instituciones educativas de Media Luna y Manaure, que acompañaron esta conmemoración y compartieron con nuestra comunidad educativa.',
      portada: '/images/aniversario-40/portada.jpeg',
      galeria: Array.from({ length: 27 }, (_, index) => ({
        src: `/images/aniversario-40/foto-${index + 1}.jpg`,
        alt: `Fotografía ${index + 1} de la celebración del 40.º aniversario`,
      })),
    },
  },
  {
    id: 'microfutbol',
    titulo: "⚽ Torneo de Microfútbol 2026",
    fecha: "28 de agosto - 5 de septiembre de 2026",
    descripcion: "¡Llegó el Torneo de Microfútbol! Categorías Infantil (6°-7°), Prejuvenil (8°-9°) y Juvenil (10°-11°). También participa el equipo de docentes.",
    imagen: imgMicrofutbol,
    imagenAlt: "Torneo de microfútbol",
    icono: <FaFutbol />,
    color: "#2196F3",
    destacado: true,
    modalTipo: "microfutbol",
    modalContent: {
      titulo: "⚽ Torneo de Microfútbol 2026",
      subtitulo: "Deporte, integración y sana competencia",
      fechaEvento: "28 de agosto - 5 de septiembre de 2026",
      lugar: "Cancha de Microfútbol - Sede Principal",
      hora: "8:00 AM - 4:00 PM",
      introduccion: "La Institución Educativa Agrícola La Mina se llena de emoción con el Torneo de Microfútbol 2026.",
      docenteACargo: {
        nombre: "Prof. Hugues Cuello",
        especialidad: "Educación Física y Deportes",
        años: "15 años de experiencia",
        mensaje: "El deporte une, enseña y transforma."
      },
      categorias: [
        { nombre: "Infantil", grados: "6° y 7°", equipos: "4 equipos" },
        { nombre: "Prejuvenil", grados: "8° y 9°", equipos: "4 equipos" },
        { nombre: "Juvenil", grados: "10° y 11°", equipos: "4 equipos" },
        { nombre: "Docentes", grados: "Personal docente", equipos: "2 equipos" }
      ],
      cronograma: [
        { dia: "28 de agosto", actividad: "Inauguración" },
        { dia: "29 de agosto", actividad: "Fase de grupos" },
        { dia: "30 de agosto", actividad: "Fase de grupos" },
        { dia: "31 de agosto", actividad: "Semifinales" },
        { dia: "1 de septiembre", actividad: "Finales y clausura" }
      ],
      galeria: {
        imagenes: [
          { src: micro1, titulo: "Inauguración", descripcion: "Desfile de delegaciones" },
          { src: micro2, titulo: "Partido", descripcion: "Acción en la cancha" }
        ]
      },
      impacto: "Fomenta el trabajo en equipo, la disciplina y la sana competencia."
    }
  },
  {
    id: 'elecciones',
    titulo: "🗳️ Resultados Elecciones 2026",
    fecha: "18 de marzo de 2026",
    descripcion: "¡Ya tenemos nuevos líderes estudiantiles! Conoce a nuestro Personero, Contralor y la nueva mesa directiva de AFADEC.",
    imagen: imgElecciones,
    imagenAlt: "Estudiantes votando",
    icono: <FaVoteYea />,
    color: "#FF9800",
    destacado: true,
    modalTipo: "elecciones",
    modalContent: {
      titulo: "Elecciones Estudiantiles 2026",
      subtitulo: "Un hito en la historia institucional",
      fechaEvento: "18 de marzo de 2026",
      introduccion: "Por primera vez, las elecciones se realizaron con un sistema digital innovador.",
      datos: {
        participantes: 200,
        votosValidos: 317,
        nivelParticipacion: "85%"
      },
      innovacion: {
        titulo: "✨ Innovación Tecnológica",
        descripcion: "Sistema de votación electrónica desarrollado internamente.",
        tecnologias: [
          "Plataforma web de votación segura",
          "Verificación de identidad",
          "Resultados en tiempo real",
          "Transparencia total"
        ]
      },
      ganadores: {
        personero: {
          nombre: "Yeleinis Arias",
          grado: "11°",
          votos: 153,
          lema: "¡Tu voz, mi compromiso!",
          propuestas: "Mejorar la comunicación estudiantil",
          foto: fotoYcleinis
        },
        contralor: {
          nombre: "Nacler Arias",
          grado: "11°",
          votos: 164,
          lema: "Transparencia y equidad",
          propuestas: "Control de recursos",
          foto: fotoNacler
        }
      },
      galeria: {
        imagenes: [
          { src: imgElecciones1, titulo: "Votación digital", descripcion: "Jornada electoral" },
          { src: imgElecciones2, titulo: "Mesa de votación", descripcion: "Estudiantes votando" },
          { src: imgElecciones3, titulo: "Conteo", descripcion: "Resultados en tiempo real" },
          { src: imgElecciones4, titulo: "Ganadores", descripcion: "Celebrando" }
        ],
        video: videoElecciones
      },
      impacto: "Marca un antes y después en la participación democrática."
    }
  },
  {
    id: 'concurso',
    titulo: "🎤 Buscando una Estrella",
    fecha: "Inscripciones hasta el 15 de abril 2026",
    descripcion: "Concurso de Canto Vallenato. Demuestra tu voz y gana un gran premio.",
    imagen: imgConcurso,
    imagenAlt: "Concurso de canto",
    icono: <FaMicrophone />,
    color: "#E91E63",
    destacado: true,
    modalTipo: "concurso",
    modalContent: {
      titulo: "🎤 Buscando una Estrella",
      subtitulo: "Concurso de Canto Vallenato",
      fechaInscripcion: "15 de abril de 2026",
      fechaEvento: "21 de abril de 2026",
      lugar: "Tarima Principal",
      hora: "4:00 PM",
      introduccion: "Concurso de canto vallenato 'Buscando una Estrella'.",
      requisitos: [
        "Ser estudiante de sexto a once grado",
        "Interpretar una canción del Binomio de Oro de América",
        "Presentarse con vestuario acorde",
        "Máximo 5 minutos"
      ],
      premio: {
        titulo: "🏆 Gran Premio",
        descripcion: "Presentación en tarima especial + $500.000",
        adicional: "Grabación de video profesional"
      },
      jurado: [
        "Israel Romero - Acordeonero",
        "Representante de la Casa de la Cultura",
        "Docente de música"
      ],
      videoPromocional: videoConcurso
    }
  },
  {
    id: 'feria',
    titulo: "🎶 Tercer Encuentro de Carrizos y Acordeones",
    fecha: "21 de abril de 2026",
    descripcion: "Homenaje a Israel Romero, Rafael Orozco y Rafael Andrés Carrillo.",
    imagen: imgFeria,
    imagenAlt: "Evento cultural",
    icono: <FaMusic />,
    color: "#9C27B0",
    destacado: true,
    modalTipo: "feria",
    modalContent: {
      titulo: "Tercer Encuentro de Carrizos y Acordeones",
      subtitulo: "Homenaje a las leyendas del vallenato",
      fechaEvento: "21 de abril de 2026",
      lugar: "Plaza Principal - La Mina",
      hora: "6:00 PM",
      introduccion: "Celebración de la tradición musical vallenata.",
      homenajeados: [
        { nombre: "Israel Romero", instrumento: "Acordeonero" },
        { nombre: "Rafael Orozco", instrumento: "Cantante" },
        { nombre: "Rafael Andrés Carrillo", instrumento: "Compositor" }
      ],
      actividades: [
        "Desfile de apertura",
        "Presentación de acordeonistas",
        "Concurso de carrizos",
        "Muestra de danza folclórica",
        "Velada musical"
      ],
      organizadores: {
        docentes: [
          "Prof. Carlos Martínez - Coordinador Cultural",
          "Prof. Laura Rodríguez - Directora de Banda"
        ],
        estudiantes: [
          "Comité Cultural AFADEC",
          "Grupo de Danzas Folclóricas"
        ]
      }
    }
  }
]