# App Graph Builder

A modern interactive application dependency graph builder built with React, TypeScript, React Flow, Zustand, TanStack Query, and Mock Service Worker (MSW).

## Overview

App Graph Builder visualizes service dependencies as an interactive node graph. Users can inspect services, update configurations, monitor runtime information, create new nodes, connect services, and manage graph topology through an intuitive dashboard interface.

<img width="1440" height="900" alt="image" src="https://github.com/user-attachments/assets/066fe76e-d19e-4f3e-8c02-fbb9cc4fb37e" />

## Features

### Graph Visualization

* Interactive React Flow canvas
* Draggable service nodes
* Connection creation between nodes
* Automatic graph fitting
* Zoom and pan controls
* Background grid visualization

### Node Management

* Create new service nodes
* Delete selected nodes
* Edit node metadata
* Update service descriptions
* Modify service load percentage
* Real-time UI updates

### Node Inspector

* Configuration tab
* Runtime information tab
* Service status visualization
* Editable node properties
* Load monitoring

### Application Switching

* Multiple application graphs
* Dynamic graph loading
* Application selector

### State Management

* Zustand for global state
* React Query for server state
* MSW-powered mock API layer

## Tech Stack

### Frontend

* React 19
* TypeScript
* Vite

### Graph & Visualization

* React Flow (@xyflow/react)

### State Management

* Zustand
* TanStack Query

### UI & Styling

* Tailwind CSS
* Lucide React Icons

### API Mocking

* Mock Service Worker (MSW)

## Project Structure

```text
src/
├── components/
│   ├── canvas/
│   ├── inspector/
│   └── layout/
├── hooks/
├── mocks/
├── providers/
├── store/
├── types/
└── App.tsx
```

## Getting Started

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Usage

### Select an Application

Choose an application from the Applications panel to load its dependency graph.

### Inspect a Service

Click any service node to view and edit its configuration in the inspector panel.

### Add a Service

Use the **Add Node** button in the top navigation bar.

### Connect Services

Drag from one node handle to another to create a dependency connection.

### Delete a Service

* Select a node and press the **Delete** key
* Or use the **Delete Node** button inside the inspector

### Modify Service Data

Update:

* Name
* Description
* Load Percentage
* Runtime Information

## Mock Data

The application ships with mocked application graphs including:

* Payments
* Analytics
* Orders

All API requests are intercepted using MSW to simulate backend interactions.

## Design

The UI uses a custom dark theme inspired by modern observability and infrastructure tools.

### Color Palette

```text
Background  : #222831
Surface     : #393E46
Accent      : #00ADB5
Text        : #EEEEEE
```

## Future Improvements

* Persistent graph storage
* Node type variations
* Graph export/import
* Real-time collaboration
* Search and filtering
* Layout algorithms
* Edge metadata editing

## Author

Ankit Kumar
