# Conversor de Monedas con React

✨ Este es un proyecto desarrollado como parte de las actividades de la facultad. Es una aplicación web que permite a los usuarios realizar conversiones de moneda, eligiendo la moneda de origen, la moneda de destino, e ingresando una fecha específica para calcular la conversión basada en la tasa de cambio de ese día. ✨

## Tecnologías Utilizadas

- **React**: Biblioteca de JavaScript para la construcción de interfaces de usuario.
- **Tailwind CSS**: Framework de CSS para estilos rápidos y personalizables, con soporte para modo claro y oscuro.
- **Lucide React**: Biblioteca de íconos SVG reactivos.
- **API Frankfurter**: Fuente de datos para obtener tasas de cambio de monedas.

## Características

1. **Interfaz de Usuario Intuitiva:**
   - Campo de entrada para el monto a convertir.
   - Selector desplegable para elegir moneda de origen y destino.
   - Selector de fecha para especificar el día de la tasa de cambio.
   - Botón para realizar la conversión.
   - Resultado de la conversión mostrado de manera clara.

2. **Modo Claro y Oscuro:** ☀ 🌙
   - Implementado con Tailwind CSS para mejorar la experiencia de usuario en diferentes condiciones de luz.

3. **Conexión con la API Frankfurter:**
   - Obtención dinámica de tasas de cambio para realizar las conversiones basadas en la fecha seleccionada. 📈

## Instalación y Uso

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/conversor-monedas
   ```

2. Navega al directorio del proyecto:
   ```bash
   cd conversor-monedas
   ```

3. Instala las dependencias:
   ```bash
   npm install
   ```

4. Inicia la aplicación:
   ```bash
   npm start
   ```

5. Abre tu navegador y accede a `http://localhost:3000` para ver la aplicación en acción. 🌐

## Uso de la Aplicación

☑ Ingresa un monto en el campo de texto.

☑ Selecciona la moneda de origen y la moneda de destino utilizando los desplegables.

☑ Selecciona una fecha utilizando el selector de fecha.

☑ Haz clic en el botón de conversión para ver el resultado basado en la tasa de cambio de la fecha elegida.

## Archivos Principales

- `src/components/DatePicker.js`: Componente para seleccionar la fecha.
- `src/components/CurrencySelector.js`: Componente para seleccionar las monedas.
- `src/App.js`: Lógica principal y ensamblaje de la aplicación.
- `src/index.css`: Configuración de Tailwind CSS.

## Capturas de Pantalla

- **Modo Claro:** 🔆  
  <img src="https://github.com/user-attachments/assets/33101edb-edbd-4f92-8903-b399d4ae55d2" alt="Modo Claro" width="600" />

- **Modo Oscuro:** 🌌  
  <img src="https://github.com/user-attachments/assets/a2247365-a1e1-4e7c-8091-a5b2a9e1595d" alt="Modo Oscuro" width="600" />

## Fuentes de Datos

- **Frankfurter API:**
  - URL para las monedas disponibles: `https://api.frankfurter.app/currencies`
  - URL para tasas de cambio específicas: `https://api.frankfurter.app/YYYY-MM-DD`

## Contribuciones

✨ Este es un proyecto académico, por lo que no se aceptan contribuciones externas. Sin embargo, si deseas dejar comentarios o sugerencias, puedes abrir un issue en este repositorio. ✨

## Licencia

⚡ Este proyecto es de uso exclusivo para fines educativos y no tiene una licencia formal asociada. ⚡

---

Gracias por revisar este proyecto. Si tienes preguntas o inquietudes, no dudes en contactarme. 😊

