# React Modal Component

## Description

The React Modal Component is a customizable and reusable modal popup that can be easily integrated into your React applications. It allows you to display additional information, notifications, or any custom content in a clean and user-friendly overlay.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Props](#props)

## Installation

To use the React Modal Component in your project, follow these steps:

1- clone project in your device

## `git clone`

2- Install the component from npm using your package manager of choice (npm)

### `npm install`

or

### `npm i`

3- run the project local

### `npm start`

## Usage

The Modal component can be used by wrapping your content with it. You can control the modal's visibility using the isOpen prop and close it using the onClose function.

Here's a basic example of using the Modal component:

```jsx
import React from "react";
import "./App.css";
import { Modal } from "./components/modal";

function App() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  
  return (
    <div className="App">
      <button className="button" onClick={handleOpen}>
        Open Modal
      </button>
      <Modal open={open} onClose={handleClose}>
       <Modal.Header>React Modal Component text Example</Modal.Header>
        <Modal.Content>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        </Modal.Content>
        <Modal.Footer>
          <button onClick={handleClose}>Close</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App 
```

### Props

The Modal component supports the following props:

* `open` (boolean, required): Determines whether the modal is open or closed.
* `onClose` (function, required): The function to be called when the user.
* clicks the close button or outside the modal to close it.
* `children` (node, required): The content to be displayed inside the modal.
* `size` (xs, sm, md, lg, xl) : This keyword to control size modal.
* `position` (top, center, bottom) : This keyword to control position modal on the window.
