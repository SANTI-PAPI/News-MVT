export class ErrorView {

    render404(): { error: { code: number, title: string, message: string } } {
        return {
            error: {
                code: 404,
                title: 'Página No Encontrada',
                message: 'La página que buscas no existe o ha sido movida.'
            }
        };
    }

    render500(): { error: { code: number, title: string, message: string } } {
        return {
            error: {
                code: 500,
                title: 'Error del Servidor',
                message: 'Ha ocurrido un error inesperado. Por favor, intenta más tarde.'
            }
        };
    }

    renderError(code: number): { error: { code: number, title: string, message: string } } {
        const errors: { [key: number]: { title: string, message: string } } = {
            400: { title: 'Solicitud Incorrecta', message: 'La solicitud no pudo ser procesada.' },
            401: { title: 'No Autorizado', message: 'Debes iniciar sesión para acceder a esta página.' },
            403: { title: 'Prohibido', message: 'No tienes permisos para acceder a este recurso.' },
            404: { title: 'Página No Encontrada', message: 'La página que buscas no existe.' },
            500: { title: 'Error del Servidor', message: 'Ha ocurrido un error inesperado.' }
        };

        const errorInfo = errors[code] || {
            title: `Error ${code}`,
            message: 'Ha ocurrido un error.'
        };

        return {
            error: {
                code: code,
                title: errorInfo.title,
                message: errorInfo.message
            }
        };
    }
}