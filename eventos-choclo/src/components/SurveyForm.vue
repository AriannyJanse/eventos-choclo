<template>
  <survey :survey="survey" />
</template>

<script>
import * as Survey from "survey-vue";

import "survey-vue/survey.css";

Survey.StylesManager.applyTheme("default");

export default {
  name: "SurveyForm",
  data() {
    const json = {
 "locale": "es",
 "title": "Encuesta de usuario",
 "description": "Esto es una pruebita",
 "logoWidth": "60px",
 "logoHeight": "60px",
 "pages": [
  {
   "name": "Datos Personales",
   "elements": [
    {
     "type": "text",
     "name": "email",
     "title": {
      "default": "Your e-mail:",
      "es": "Ingresa tu dirección de correo electrónico"
     },
     "isRequired": true,
     "requiredErrorText": {
      "es": "Este campo no puede estar vacío."
     },
     "validators": [
      {
       "type": "email"
      }
     ],
     "inputType": "email",
     "placeHolder": {
      "default": "jon.snow@nightwatch.org",
      "es": "ejemplo@ejemplo.com"
     }
    },
    {
     "type": "text",
     "name": "name",
     "title": {
      "default": "Ingresa tu nombre",
      "es": "Nombre y Apellidos"
     },
     "isRequired": true,
     "requiredErrorText": {
      "es": "Este campo no puede estar vacío."
     },
     "validators": [
      {
       "type": "text",
       "minLength": 0,
       "maxLength": 0,
       "allowDigits": true
      }
     ],
     "placeHolder": {
      "default": "Jon Snow",
      "es": "Escribe tu nombre y apellido"
     }
    },
    {
     "type": "dropdown",
     "name": "question2",
     "title": {
      "es": "Tipo de Documento"
     },
     "isRequired": true,
     "requiredErrorText": {
      "es": "Este campo no puede estar vacío."
     },
     "choices": [
      {
       "value": "item1",
       "text": {
        "es": "Cédula de Cuidadanía"
       }
      },
      {
       "value": "item2",
       "text": {
        "es": "Cédula de Extranjería"
       }
      },
      {
       "value": "item3",
       "text": {
        "es": "Tarjeta de Identidad"
       }
      },
      {
       "value": "item4",
       "text": {
        "es": "Pasaporte"
       }
      },
      {
       "value": "item5",
       "text": {
        "es": "NIT"
       }
      }
     ]
    },
    {
     "type": "text",
     "name": "question3",
     "title": {
      "es": "Número de Documento"
     },
     "isRequired": true,
     "requiredErrorText": {
      "es": "Este campo no puede estar vacío."
     },
     "validators": [
      {
       "type": "numeric",
       "minValue": 0
      }
     ]
    },
    {
     "type": "text",
     "name": "question4",
     "title": {
      "es": "Edad"
     },
     "isRequired": true,
     "requiredErrorText": {
      "es": "Este campo no puede estar vacío."
     },
     "validators": [
      {
       "type": "numeric",
       "minValue": 0
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question5",
     "title": {
      "es": "Sexo"
     },
     "isRequired": true,
     "requiredErrorText": {
      "es": "Este campo no puede estar vacío."
     },
     "choices": [
      {
       "value": "item1",
       "text": {
        "es": "Femenino"
       }
      },
      {
       "value": "item2",
       "text": {
        "es": "Masculino"
       }
      },
      {
       "value": "item3",
       "text": {
        "es": "Prefiero no decirlo"
       }
      }
     ],
     "hasOther": true,
     "otherText": {
      "es": "Otro..."
     }
    },
    {
     "type": "text",
     "name": "question6",
     "title": {
      "es": "Ciudad"
     },
     "isRequired": true,
     "requiredErrorText": {
      "es": "Este campo no puede estar vacío."
     },
     "validators": [
      {
       "type": "text",
       "minLength": 0,
       "maxLength": 0,
       "allowDigits": true
      },
      {
       "type": "expression"
      },
      {
       "type": "text",
       "minLength": 0,
       "maxLength": 0,
       "allowDigits": true
      }
     ]
    },
    {
     "type": "text",
     "name": "question7",
     "title": {
      "es": "Número de teléfono"
     },
     "isRequired": true,
     "requiredErrorText": {
      "es": "Este campo no puede estar vacío."
     },
     "validators": [
      {
       "type": "numeric"
      }
     ]
    }
   ],
   "title": {
    "es": "Datos Personales"
   }
  },
  {
   "name": "page2",
   "elements": [
    {
     "type": "text",
     "name": "question1",
     "title": "Esta es otra pregunta",
     "isRequired": true,
     "requiredErrorText": "Por favor complete este campo"
    }
   ]
  }
 ],
 "showTitle": false,
 "showQuestionNumbers": "off",
 "questionErrorLocation": "bottom",
 "showProgressBar": "bottom",
 "checkErrorsMode": "onValueChanged"
};
    const survey = new Survey.Model(json);

    return {
      survey: survey,
    };
  },
};
</script>

<style scoped>
</style>
