# 📋 FORMULARIO - FIREBASE

Este proyecto utiliza Angular, Ionic y Firebase para crear un formulario con 8 campos que se almacenan en Firestore. También incluye un sistema de mensajería básica.

---

## 🧠 Main.ts

Inicializa una aplicación Angular en modo producción y configura los módulos necesarios para usar:

- **Ionic**
- **Angular Router**
- **Firebase**
- **Firestore**

![Main.ts](https://github.com/user-attachments/assets/28b9666a-6dca-445e-8b7c-034de10b7d03)

---

## 🧱 Home.page.html

Contiene la estructura visual de la aplicación, incluyendo:

- Listado de formularios guardados
- Formulario de entrada con 8 campos
- Botón de envío

![HTML 1](https://github.com/user-attachments/assets/082189b8-f322-4f05-91ec-44934422091a)  
![HTML 2](https://github.com/user-attachments/assets/2c4c4518-8dca-4eeb-8ccf-05e8db488d4d)

---

## 🧩 Home.page.ts

Lógica del formulario y su validación:

- **Estructura del formulario:**  
  Se define un objeto `formData` con 8 campos (`campo1` a `campo8`).

- **Lista de formularios enviados:**  
  `formDataList` almacena los formularios enviados.

- **Funciones clave:**
  - `submitForm()` – Guarda el formulario y limpia los campos.
  - `resetForm()` – Reinicia los campos vacíos.
  - `formValid()` – Verifica que todos los campos estén llenos antes de enviar.

![TS 1](https://github.com/user-attachments/assets/b6bf3542-196a-4557-8766-a138860f9446)  
![TS 2](https://github.com/user-attachments/assets/1fcee9de-2f49-4b9f-987d-b95cf0ea4d27)

---

## 💬 Chat.service.ts

Servicio encargado de:

- Obtener y guardar **mensajes** en la colección `messages` de Firestore.
- Guardar y obtener **datos del formulario** desde la colección `formData`.

Métodos clave:
- `getMessages()`
- `sendMessage(text, sender)`
- `saveFormData(data)`
- `getFormData()`

![Chat Service](https://github.com/user-attachments/assets/e117703f-24f4-4f09-87c3-8139e5d1dbf9)

---

## 🖼️ Vista del formulario

Visualización del formulario activo con campos ingresables:

![Vista del Formulario](https://github.com/user-attachments/assets/a57cb9ad-1229-4024-bfca-ef671a960ca6)

---

## 🚀 Tecnologías usadas

- Angular
- Ionic
- Firebase (Firestore)
- HTML, TypeScript

---


