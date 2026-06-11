# Product Backlog - IA Redactora de Comunicados y Notas de Prensa

## Epic 1: Gestión de hechos clave

### Story 1
Como usuario, quiero capturar título, fecha, lugar, audiencia y hechos importantes para que la IA tenga información suficiente para generar el comunicado.

**Criterios de aceptación**
- El formulario debe permitir ingresar título.
- El formulario debe permitir ingresar fecha y lugar.
- El formulario debe permitir ingresar hechos clave.
- El usuario debe poder identificar claramente los campos.

**Tasks**
- Diseñar formulario principal.
- Crear campos de entrada.
- Validar que el usuario pueda escribir los hechos clave.

---

### Story 2
Como usuario, quiero seleccionar el tipo de texto para que el sistema genere un comunicado o una nota de prensa.

**Criterios de aceptación**
- El usuario puede elegir comunicado de prensa.
- El usuario puede elegir nota de prensa.
- El resultado cambia de acuerdo con el tipo seleccionado.

**Tasks**
- Crear selector de tipo de texto.
- Programar lógica de encabezado.
- Probar generación con ambos tipos.

---

## Epic 2: Generación del borrador

### Story 3
Como usuario, quiero generar un borrador automático basado en hechos clave para ahorrar tiempo de redacción.

**Criterios de aceptación**
- El botón Generar borrador crea un texto automático.
- El texto incluye título, lugar, fecha y hechos clave.
- El texto indica que debe ser revisado antes de publicarse.

**Tasks**
- Crear función generarBorrador().
- Crear plantilla dinámica.
- Mostrar resultado en pantalla.

---

### Story 4
Como usuario, quiero seleccionar un tono para que el comunicado se adapte al contexto.

**Criterios de aceptación**
- El sistema permite seleccionar tono institucional, formal, informativo o urgente.
- El texto generado incluye una frase relacionada con el tono elegido.

**Tasks**
- Crear selector de tono.
- Programar frases por tono.
- Probar salida de cada tono.

---

## Epic 3: Revisión y publicación

### Story 5
Como editor, quiero revisar el borrador antes de publicarlo para evitar errores.

**Criterios de aceptación**
- El resultado se muestra claramente.
- Existe un checklist de revisión.
- Se indica que el texto está pendiente de revisión humana.

**Tasks**
- Diseñar área de resultado.
- Crear checklist de revisión.
- Agregar estado de revisión.

---

### Story 6
Como editor, quiero copiar el borrador para pegarlo en otro documento o plataforma.

**Criterios de aceptación**
- Existe botón para copiar texto.
- El sistema muestra confirmación al copiar.
- El texto copiado conserva la estructura del comunicado.

**Tasks**
- Crear botón Copiar.
- Programar función copiarBorrador().
- Probar copiado en navegador.
