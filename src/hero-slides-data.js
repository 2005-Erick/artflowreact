// src/hero-slides-data.js - VERSÃO CORRETA E FINAL

// 1. Importamos as imagens diretamente. O Vite nos dará o caminho correto.
import illustrationImg from '/public/ilustr-flow.PNG';
import photoImg from '/public/photo-flow.png';
import musicImg from '/public/music-flow.png';
import art3dImg from '/public/threedi-flow.jpg'; // Adicionei a de 3D

// 2. Usamos as variáveis no array.
export const slides = [
  {
    title: "Mostre Suas Habilidades",
    subtitle: "Do esboço à arte final, seu traço tem espaço aqui para brilhar e inspirar.",
    image: illustrationImg
  },
  {
    title: "Capture o Momento",
    subtitle: "O mundo através de suas lentes. Compartilhe sua visão, conte histórias com suas fotos.",
    image: photoImg
  },
  {
    title: "Dê Forma à Imaginação",
    subtitle: "Exponha seus projetos 3D mais incríveis e encontre seu público em nossa galeria.",
    image: art3dImg
  },
  {
    title: "Esbanje Seus Sons",
    subtitle: "Sua música merece ser ouvida. Deixe sua marca no mundo sonoro.",
    image: musicImg
  }
];