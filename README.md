# Kursapplikation
En todo applikation byggd i TypeScript med klasser, DOM-hantering och localStorage.

## Syfte
Syftet med applikationen är att träna på att:
  - strukturera kod med klasser och objekt
  - hantera DOM-element dynamiskt
  - spara och läsa data från localStorage
  - validera användarinmatning
  - skapa en responsiv och semantisk UI layout
  - bygga en mindre applikation med tydlig logik och rendering

## Sidor i applikationen
Applikationen består av en sida 

### Index.html
  - Visar formulär för att lägga till todos
  - visar lista med befintliga todos
  - innehåller knappen för att rensa hela listan

## Funktionalitet
### Lägga till en todo
Användaren kan skriva en uppgift och välja prioritet.
Uppgiften sparas i en todolist-klass och skrivs ut i DOM.

### Markera todo som är klar
Varje todo har en checkbox. När den klickas i så uppdateras objektet och sparas om.

### Spara i localStorage
Alla todos sparar automatiskt i localStorage vid ändring.

### Läsa från localStorage vid start
När applikationen laddas skapas en todolist-instans som direkt läser in sparade todos.

### Rensa hela listan
En knapp med id clearList tömmer både localStorage och listan i minnet

### Responsiv layout
Formuläret använder CSS grid och ändrar layout vid 500 pixlar i bredd.

## Typer av funktioner
### todoList klasser
  - addTodo(task, priority) : lägger till en ny todo
  - getTodos() : returnerar all todos
  - markTodoCompleted(index) : markerar en todo som klar
  - saveToLocalStorage() : sparar listan
  - loadFromLocalStorage() : läser listan
  - clearTodos() : tömmer listan

### Render-funktion
  - renderTodos() : Skriver ut alla todos i DOM och uppdaterar UI

### Event-lyssnare
  - Formulär: Submit
  - Checkbox: Change
  - Rensa-knapp: Click

## Validering
Applikationen validerar:
  - att textfältet inte är tomt
  - att prioritet är ett giltigt nummer
Om valideringen misslyckas visas ett felmeddelande med hjälp av alert.

## HTML/CSS
  - Semantiskt HTML med elementen: form, ul li och label
  - Responsiv layout med hjälp av CSS grid
  - Rundade inputfält, knappar samt box shadows
  - Mediaquerie med brytpungt på 500px för CSS grid
  - Knappdesign med hover-effekter

## Installation
Klona projektet:
```
git clone 
cd todo-lab
```

Installera, starta & bygga:
```
npm install
npm run dev
npm run build
npm run preview
```

### Publicerad webbplats

Skapad av: Pontus Johansson
