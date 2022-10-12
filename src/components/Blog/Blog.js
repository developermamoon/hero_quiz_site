import React from 'react';
import './Blog.css'
import Accordion from 'react-bootstrap/Accordion';

const Blog = () => {
    return (
        <Accordion className='blog' defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header><b>What is the purpose of React Router?</b></Accordion.Header>
                <Accordion.Body>
                    ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route. <br /> <br />
                    React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                    Let us create a simple application to React to understand how the React Router works. The application will contain three components: home component, about a component, and contact component. We will use React Router to navigate between these components.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header><b>How does context API works?</b></Accordion.Header>
                <Accordion.Body>
                    The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux. <br /> <br />
                    Context provides a way to pass data through the component tree without having to pass props down manually at every level.

                    In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header><b>UseRef hook</b></Accordion.Header>
                <Accordion.Body>
                    The useRef Hook allows you to persist values between renders.It can be used to store a mutable value that does not cause a re-render when updated.It can be used to access a DOM element directly. <br /> <br />
                    The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. 

                    The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component. 
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default Blog;