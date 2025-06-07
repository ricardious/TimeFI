# 📚 Semestrix

**La herramienta definitiva para estudiantes de Ingeniería USAC** que te ayuda a planificar tu carrera de manera inteligente y eficiente.

Semestrix elimina el dolor de cabeza de organizar horarios, gestionar prerrequisitos y hacer seguimiento a tu progreso académico. Todo en una interfaz moderna y fácil de usar.

---

## ✨ ¿Por qué Semestrix?

**🎯 Planificación sin estrés**  
Organiza tus horarios con arrastrar y soltar, evitando automáticamente traslapes y considerando tiempos de traslado entre edificios del campus.

**📊 Control total de tu progreso**  
Visualiza claramente cuántos créditos has completado, cuáles te faltan y tu proyección de graduación.

**🔍 Inteligencia de prerrequisitos**  
El sistema analiza automáticamente qué cursos puedes inscribir cada semestre basándose en tu historial académico.

**📱 Experiencia moderna**  
Interfaz responsive con modo oscuro/claro que se adapta a tus preferencias y dispositivo.

---

## 🚀 Características principales

### 📅 Planificador de Horarios Inteligente
- **Arrastrar y soltar**: Organiza cursos de forma visual e intuitiva
- **Detección de conflictos**: Previene automáticamente traslapes de horarios
- **Tiempo de traslado**: Considera distancias entre edificios del campus
- **Vista múltiple**: Horarios por día, semana o vista general

### 📈 Seguimiento Académico Completo
- **Contador de créditos**: Suma automática de créditos cursados, aprobados y pendientes
- **Progreso visual**: Gráficos y barras de progreso para visualizar tu avance
- **Proyección de graduación**: Estima cuándo terminarás tu carrera
- **Historial académico**: Mantén registro completo de todos tus cursos

### 🧠 Sistema de Prerrequisitos
- **Análisis automático**: Evalúa tu historial para determinar elegibilidad
- **Sugerencias inteligentes**: Recomienda cursos óptimos para cada semestre
- **Alertas tempranas**: Te avisa sobre prerrequisitos que debes completar
- **Planificación a futuro**: Visualiza el camino hacia tu graduación

### 🎨 Experiencia de Usuario Premium
- **Modo oscuro/claro**: Se adapta automáticamente a tus preferencias del sistema
- **Responsive design**: Funciona perfectamente en móvil, tablet y desktop
- **Exportación flexible**: Descarga horarios en PDF o compártelos como imagen
- **Sincronización en la nube**: Accede a tus datos desde cualquier dispositivo

---

## 🛠️ Tecnologías de vanguardia

**Frontend moderno**
- **React 18 + Vite**: Desarrollo rápido con Hot Module Replacement
- **TypeScript**: Código más seguro y mantenible
- **Tailwind CSS**: Estilos utilitarios con soporte completo para dark mode

**Backend confiable**
- **Firebase Authentication**: Inicio de sesión seguro y sin fricciones
- **Firestore**: Base de datos NoSQL en tiempo real
- **Firebase Hosting**: Despliegue global y rápido

> 💡 **Completamente gratuito**: Utilizamos exclusivamente los servicios gratuitos de Firebase para mantener Semestrix accesible para todos los estudiantes.

---

## 🌐 Acceso rápido

**¿Solo quieres usar Semestrix?**  
Visita directamente: **[semestrix.usac.edu.gt](https://ricardious.github.io/semestrix)**

No necesitas instalar nada. La aplicación funciona completamente en tu navegador con sincronización automática en la nube.

---

## 🧑‍💻 Desarrollo local

**Para desarrolladores y contribuidores**

### Requisitos previos
- Node.js 18 o superior
- npm, yarn o pnpm

### Configuración paso a paso

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/ricardious/semestrix.git
   cd semestrix
   ```

2. **Instala dependencias**
   ```bash
   npm install
   # o alternativamente:
   # yarn install
   # pnpm install
   ```

3. **Configura variables de entorno**
   ```bash
   cp .env.example .env
   # Edita .env con tus credenciales de Firebase
   ```

4. **Inicia el servidor de desarrollo**
   ```bash
   npm run dev
   ```

5. **Abre la aplicación**  
   Navega a [http://localhost:5173](http://localhost:5173)

---

## 📝 Scripts disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia servidor de desarrollo con hot reload |
| `npm run build` | Construye la aplicación para producción |
| `npm run preview` | Sirve la build de producción localmente |
| `npm run lint` | Ejecuta ESLint para revisar el código |
| `npm run lint:fix` | Corrige automáticamente problemas de linting |
| `npm run format` | Formatea el código con Prettier |
| `npm run test` | Ejecuta las pruebas unitarias |
| `npm run test:coverage` | Ejecuta pruebas con reporte de cobertura |

---

## 🔒 Privacidad y retención de datos

**Política de datos transparente**

Semestrix utiliza el plan gratuito de Firebase, lo que nos permite ofrecer el servicio sin costo. Para mantener la sostenibilidad:

- **Retención**: Las cuentas inactivas por más de 90 días serán eliminadas automáticamente
- **Notificación**: Recibirás un aviso por correo 7 días antes de la eliminación
- **Reactivación**: Simplemente inicia sesión para mantener tu cuenta activa
- **Exportación**: Siempre puedes exportar tus datos antes de la eliminación

**Tu privacidad es importante**: Solo almacenamos la información académica necesaria para el funcionamiento de la aplicación.

---

## 🤝 Contribuir al proyecto

**¡Tu ayuda es bienvenida!**

### Guía para contribuidores

1. **Fork del proyecto**
   ```bash
   git fork https://github.com/ricardious/semestrix.git
   ```

2. **Crea una rama para tu feature**
   ```bash
   git checkout -b feature/mi-nueva-funcionalidad
   ```

3. **Sigue las convenciones**
   - Código: ESLint + Prettier configurados
   - Commits: Conventional Commits (`feat:`, `fix:`, `docs:`, etc.)
   - TypeScript: Tipado estricto habilitado

4. **Pruebas**
   ```bash
   npm run test
   npm run lint
   ```

5. **Pull Request**
   - Descripción clara de los cambios
   - Screenshots si afecta la UI
   - Tests que cubran nuevas funcionalidades

### Ideas para contribuir
- 🐛 Reportar bugs o problemas
- 💡 Sugerir nuevas funcionalidades
- 📖 Mejorar documentación
- 🌐 Agregar soporte para otras carreras
- 🎨 Mejorar el diseño y UX

---

## ☕ Apoya el proyecto

**Si Semestrix te ha sido útil, considera apoyar su desarrollo**

Tu contribución ayuda a:
- Mantener los servidores funcionando
- Desarrollar nuevas funcionalidades
- Mejorar la experiencia de usuario
- Mantener el proyecto completamente gratuito

[![☕ Invítame un café](https://img.shields.io/badge/☕-Invítame%20un%20café-FF5E5B?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ko-fi.com/ricardious2004)

**Otras formas de apoyar:**
- ⭐ Dale una estrella al repositorio
- 🐦 Comparte Semestrix en redes sociales
- 📝 Escribe una reseña o testimonio
- 🤝 Recomienda la app a otros estudiantes

---

## 📊 Estadísticas del proyecto

[![GitHub stars](https://img.shields.io/github/stars/ricardious/semestrix?style=social)](https://github.com/ricardious/semestrix/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/ricardious/semestrix?style=social)](https://github.com/ricardious/semestrix/network)
[![GitHub issues](https://img.shields.io/github/issues/ricardious/semestrix)](https://github.com/ricardious/semestrix/issues)
[![GitHub license](https://img.shields.io/github/license/ricardious/semestrix)](https://github.com/ricardious/semestrix/blob/main/LICENSE)

---

## 📞 Contacto y soporte

**¿Necesitas ayuda o tienes sugerencias?**

- 🐛 **Reportar bugs**: [GitHub Issues](https://github.com/ricardious/semestrix/issues)
- 💬 **Discusiones**: [GitHub Discussions](https://github.com/ricardious/semestrix/discussions)

---

## 📄 Licencia

Este proyecto está licenciado bajo la **Licencia MIT** - ve el archivo [LICENSE](LICENSE) para más detalles.

```
MIT License - Puedes usar, modificar y distribuir libremente
```

---

## 🙏 Agradecimientos

**Gracias a toda la comunidad que hace posible Semestrix:**

- Los estudiantes de Ingeniería USAC que han probado y dado feedback
- La comunidad open source de herramientas que utilizamos
- Firebase por proporcionar infraestructura gratuita

---

<div align="center">

**Desarrollado con ❤️ para estudiantes de la USAC**

*"Porque tu tiempo es valioso y tu educación es importante"*

</div>
