// Función para manejar errores internos del servidor (Error 500)
export function handleInternalServerError(err, res) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error. Please try again later.' });
}

export default class ErrorHandler {
    constructor(error) {
        this.errorHandler = error.errInfo;
        this.status = 400;
    }

    showMessage() {return { status: this.status, message: this.errorHandler }}

    static handle(error, res) {
const err = new ErrorHandler(error);
        res.status(err.status).send(err.showMessage());
    }
}

// details.schemaRulesNotSatisfied[0].propertiesNotSatisfied[0].description