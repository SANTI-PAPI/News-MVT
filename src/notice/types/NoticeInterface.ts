export interface NoticeInterface {
    id: number;
    titulo: string;
    descripcion: string;
    participantes: string[];
    fecha: string;
    materia: string;
    imagen: string;
    imagenes: string[];
    comentarios: { usuario: string; mensaje: string; fecha: string}[];
    
}