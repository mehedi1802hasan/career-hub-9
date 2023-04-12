import React from 'react';

const Blog = () => {
    return (
        <div className='m-20 '>
            <div className='p-10 mb-5 bg-yellow-500'><h3  className='text-xl font-bold'>1.When should you use context API? </h3>
               <p>Anser: You should use the Context API in React when you need to share data or state across multiple components in your application, especially if the data needs to be accessed by components at different levels of the component tree.
</p></div>
            <div className='p-10 mb-5 bg-teal-500'>
                <h3  className='text-xl font-bold'>2.
What is a custom hook?</h3>
                <p>Anser: A custom hook is a function in React that allows you to extract and reuse logic that manages stateful data or side effects from a component. Custom hooks are named with the "use" prefix and follow the same rules as regular hooks, including being able to use other hooks within them. They help to keep components clean and focused, improve code reuse, and make it easier to share stateful logic across multiple components</p>
            </div>
           <div className='p-10 mb-5 bg-pink-500'>
           <h3  className='text-xl font-bold '>3.What is useRef?</h3>
                <p>Anser: useRef is a hook in React that returns a mutable ref object whose current property is initialized to the passed argument (initialValue). useRef is often used to reference a DOM element or a value that persists between renders without triggering a re-render.
</p>
           </div>
                <div className='p-10 mb-5 bg-sky-500'>
                <h3 className='text-xl font-bold'>4. What is useMemo?</h3>
                <p>Anser: useMemo is a React hook that caches the result of a function and returns the cached result unless its dependencies change. This can help to optimize performance by avoiding unnecessary computations or re-renders in your components.</p>
                </div>
                
        </div>
    );
};

export default Blog;