# To-Do List App

## Overview
This is a **To-Do List Application** that allows users to add, edit, remove, and mark tasks as completed. Completed tasks move to the **Completed Tasks** page (`index4.html`), while uncompleted tasks return to the **Pending Tasks** page (`index5.html`).

## Features
- **Add New Tasks**: Users can input tasks and add them to the list.
- **Mark Tasks as Completed**: Clicking the star icon turns it green, changes the background of the task, and moves it to the Completed Tasks page.
- **Unmark Tasks as Completed**: Clicking a green star turns it back to default, resets the background, and moves the task to the Pending Tasks page.
- **Edit Tasks**: Users can modify task descriptions.
- **Remove Tasks**: Users can remove tasks from the list.
- **Persistent Task Management**: Ensures tasks remain when switching between completed and uncompleted lists.

## File Structure
```
📂 To-Do List App
├── 📄 index4.html  # Completed Tasks Page
├── 📄 index5.html  # Pending Tasks Page
├── 📄 style4.css   # Styles for UI
├── 📄 script3.js   # JavaScript logic for handling tasks
├── 📄 index1.html  # Login Page
├── 📄 index3.html  # Home Page
├── 📄 index6.html  # Profile Page
├── 📂 assets       # Images, icons, and other assets
```

## How It Works
1. **Adding a Task**:
   - Click **+Add** button.
   - Enter a task description.
   - Click **Add** to append it to the list.

2. **Completing a Task**:
   - Click the star (☆) to mark it as completed.
   - The task moves to `index4.html` (Completed Tasks).
   - Background color changes to **light blue**.

3. **Unmarking a Task**:
   - Click a **green** star (★) to revert the task to uncompleted.
   - The task moves to `index5.html` (Pending Tasks).
   - Background color returns to normal.

4. **Editing a Task**:
   - Click **Edit** next to a task.
   - Modify the description in the edit box.
   - Click **Done** to save changes.

5. **Removing a Task**:
   - Click the **Remove** button to delete the last added task.

6. **Navigation**:
   - **Logout**: Redirects to `index1.html`.
   - **Home**: Redirects to `index3.html`.
   - **Profile**: Redirects to `index6.html`.

## Installation
1. **Clone the repository:**
   ```sh
   git clone https://github.com/Kary-boj/todo-list.git
   ```
2. **Navigate to the project folder:**
   ```sh
   cd todo-list
   ```
3. **Open `index4.html` or `index5.html` in a browser.**

## Future Improvements
- LocalStorage support for task persistence.
- Drag-and-drop task sorting.
- User authentication.
- Mobile-friendly responsive design.

## Technologies Used
- HTML

- CSS

- JavaScript

## Author
Developed by **Boudjaj Karima** 🚀

I always wanted to find a great and orgnazied todo list but there is not something that attract me so i tried to create one but it is not as i want it to be so i am going to practice more and more to create my dreamed todo list.