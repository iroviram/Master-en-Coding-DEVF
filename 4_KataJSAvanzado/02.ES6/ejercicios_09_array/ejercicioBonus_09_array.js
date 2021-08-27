//? RETO ADICIONAL
/*
Usando la siguiente "base de datos":
const Database = {
    "responses": [
        {
            "question": "¿te gusta el pan?",
            "answers": {
                "2020-01-01": [{
                    "answer": "SI",
                    "selected": true
                }, {
                    "answer": "SI",
                    "selected": true
                }, {
                    "answer": "SI",
                    "selected": true
                }, {
                    "answer": "NO",
                    "selected": true
                }],
                "2020-02-02": [{
                    "answer": "NO",
                    "selected": true
                }, {
                    "answer": "SI",
                    "selected": true
                }, {
                    "answer": "SI",
                    "selected": true
                }]
            }
        },
        {
            "question": "¿te gusta el queso?",
            "answers": {
                "2020-01-01": [{
                    "answer": "SI",
                    "selected": true
                }, {
                    "answer": "NO",
                    "selected": true
                }, {
                    "answer": "NO",
                    "selected": true
                }, {
                    "answer": "NO",
                    "selected": true
                }],
                "2020-02-02": [{
                    "answer": "SI",
                    "selected": true
                }, {
                    "answer": "NO",
                    "selected": true
                }, {
                    "answer": "SI",
                    "selected": true
                }]
            }
        }
    ]
}
Hacer una función que devuelva un objeto por fecha solo con el numero de repuestas si.
EJEMPLO DE SALIDA:
{
    "responses": [
        {
            "question": "¿te gusta el pan?",
            "answers": {
                "2020-01-01": 3,
                "2020-02-02": 2
            }
        },
        {
            "question": "¿te gusta el queso?",
            "answers": {
                "2020-01-01": 1,
                "2020-02-02": 2
            }
        }
    ]
}
*/